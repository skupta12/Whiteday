'use client';

import { useEffect } from "react";
import { toast } from "sonner";

export function WelcomeToast() {
  useEffect(() => {
    // Ignore if screen height is too small
    if (window.innerHeight < 650) return;

    if (!document.cookie.includes("welcome-toast=2")) {
      toast("Welcome to my Commerce Template🎉", {
        id: "welcome-toast",
        duration: Infinity,
        onDismiss: () => {
          document.cookie = "welcome-toast=2; max-age=31536000; path=/";
        },
        description: (
          <>
            This is a high-performance, SSR storefront powered by Shopify, Next.JS, and Vercel. 🚀
            <br />
            <span
              className="font-semibold text-black"
              style={{ marginTop: '8px', marginBottom: '8px' }}
            >
              If you like this project, give it a star! ⭐
            </span>
            <br />
            <span className="">
              <a href="https://github.com/skupta12">https://github.com/skupta12</a>
            </span>
          </>
        ),
      });
    }
  }, []);

  return null;
}
