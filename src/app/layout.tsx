import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
// import AppProtector from "./app-protector";
import PageLayout from "./PageLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "digistacks booking",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className="light">
      <body className={inter.className}>
        <Providers>
          <PageLayout>
            {children}</PageLayout>
{/*           <AppProtector />  */}
        </Providers> 
      </body>
    </html>
  );
}
