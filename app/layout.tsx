import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hydratech",
  description: "Projecte 3r ESO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/next.svg" sizes="any" /></head>
      <body className={inter.className}>{children}
      <div className=" h-10 flex items-center justify-center p-10 ">
        <h2 className="text-xl">Projecte 3r ESO mates ❤</h2>
      </div>
      </body>
    </html>
  );
}
