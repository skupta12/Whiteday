import localFont from "next/font/local"

export const nippo = localFont({
    src: [
      {
        path: '../../public/fonts/Nippo-Regular.woff2',
        weight: '400',
      },
      {
        path: '../../public/fonts/Nippo-Medium.woff2',
        weight: '500',
      },
      {
        path: '../../public/fonts/Nippo-Bold.woff2',
        weight: '700',
      },
    ],
    variable: '--font-nippo',
    // fallback: ["sans serif"],
    adjustFontFallback: false
  });
  