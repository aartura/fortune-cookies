import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "fortune_cookies.com",
    template: "%f | fortune_cookies.com",
  },
  description:
    "Need a little bit of sage advice or a quick pick-me-up? Get the wisdom of your fortune cookie without the calories!",
  openGraph: {
    title: "fortune_cookies.com",
    description:
      "Need a little bit of sage advice or a quick pick-me-up? Get the wisdom of your fortune cookie without the calories!",
    url: "https://fortune_cookies.com",
    siteName: "fortune_cookies.com",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/fc.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head />
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
