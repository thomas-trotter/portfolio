import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import classNames from "classnames";
import { rootMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

type RootLayoutProps = {
  readonly children: React.ReactNode;
}

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={classNames(
        "min-h-dvh",
        jakartaSans.variable,
        jetBrainsMono.variable,
      )}
    >
      <body className="flex min-h-dvh flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
