import "./globals.css";
import { baseUrl } from "@/lib/utils";
import { nippo } from "./fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components";

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nippo.className} antialiased bg-black`}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>

    </html>
  );
}
