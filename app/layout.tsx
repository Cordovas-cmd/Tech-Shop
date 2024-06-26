import type { Metadata } from "next";
// global imports
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

// personal imports
import { ModalProvider } from "@/providers/modal-provider";

// relative import
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        {children}</body>
      </html>
    </ClerkProvider>
  );
}
