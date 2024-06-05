import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuroTrack",
  description: "Get Quality advices and cure faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <main className={cn("container container-2xl pb-10", inter.className)}>
          <Navbar/>
            {children}
          </main>
          <Toaster
            toastOptions={{
              unstyled: true,
              classNames: {
                error: 'flex items-center gap-2 p-4 rounded-lg text-red-600 bg-red-100',
                success: 'flex items-center gap-2 p-4 rounded-lg text-lime-600 bg-lime-100',
              },
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
