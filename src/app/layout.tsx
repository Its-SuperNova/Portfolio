import "./globals.css";
import { DM_Sans } from "next/font/google";
import { ReactNode } from "react";
import SmoothScroll from "../components/hooks/smoothscroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
