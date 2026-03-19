'use client'
import { Inter } from "next/font/google";
import AuthProvider from "@/src/context/AuthProvider";
import "./globals.css";
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          {children}
          <Toaster richColors position="top-right"
            toastOptions={{
              success: {
                style: {
                  background: "#16a34a",
                  color: "#fff",
                },
              },
              error: {
                style: {
                  background: "#dc2626",
                  color: "#fff",
                },
              },
            }}
          />
        </body>
      </AuthProvider>

    </html>
  );
}