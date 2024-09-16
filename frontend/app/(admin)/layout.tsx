import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zone Admin",
  description: "Zone admin du compteur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ height: "100vh" }}>
        <main className="min-h-screen">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl">ZONE ADMIN</h1>
            <div className="flex gap-8">
              <Link href="/testPage" className="hover:underline">Zone de Tests</Link>
              <Link href="/stats" className="hover:underline">Stats</Link>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}