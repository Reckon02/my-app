import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
      <head>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/Reckon02/my-app/29b1e68c186ca61aeb93298d560c8148531d42cf/public/next.svg"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <div className="flex justify-between p-1.5 mx-5">
          <Nav />
          <Drawer>
            <DrawerTrigger>
              <Button variant={"outline"}>Qui som?</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  Aquest es un projecte de mates de 3r ESO
                </DrawerTitle>
                <DrawerDescription>
                  <p>
                    <b>Desenvolupament de la web: </b>Simón Rapanelli
                  </p>
                  <p>
                    <b>Disseny Web:</b> Lucas Pizarro, Luis Naranjo
                  </p>
                  <p>
                    <b>Disseny logo i marketing:</b> Dusan Martin
                  </p>
                  <p>
                    <b>Excel: </b>Simón Rapanelli, Dusan Martin, Adrian Rull
                  </p>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button>Entesos</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        {children}
      </body>
    </html>
  );
}
