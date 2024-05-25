import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

import Nav from "@/components/Nav"
import Grid4 from "@/components/Grid4"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


export default function Home() {
  return (
    <main className="" >
      <div className="flex justify-between p-1.5 mx-5">
      <Nav />
      <Drawer>
        <DrawerTrigger>Qui som?</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Aquest es un projecte de mates de 3r ESO</DrawerTitle>
            <DrawerDescription>Som Simón Rapanelli, Lucas Pizarro, Adrian Rull, Luis Naranjo i Dusan</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button>Entesos</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </div> 
      <Grid4 />
      <div className="2xl bg-slate-300 h-screen flex justify-center p-5">
        <h1 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-10">Hydrabottle</h1>
      </div>
    </main>
  );
}
