import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


import { ModalProvider } from "@/providers/modal-provider";

import "./globals.css";

const inter = Inter ({ subsets: ["latin"]})

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
          <header className="flex justify-between p-5">
            <h1> Ecomerce Admin </h1>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton showName />
            </SignedIn>
          </header>
          <main>
            <ModalProvider/>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
