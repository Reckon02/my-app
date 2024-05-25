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
import Buy from "@/components/ui/Buy"





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
      <div className="bg-slate-300 h-screen flex flex-col items-center p-5">
        <h1 className="text-5xl pb-10 pt-5 font-extrabold">Hydrabottle</h1>
        <img src="ampolla.png" width={500} height={300} alt="Ampolla"/>
      </div>
      <div className="grid grid-cols-3" >
        <div className=" m-4 h-96 flex p-6 flex-col text-lg bg-cover bg-[url('../public/Frame-1.png')] min-w-96"></div>
        <div className=" m-4 h-96 flex p-6 flex-col text-lg bg-cover bg-[url('../public/Frame-1.png')] min-w-96"></div>
        <div className=" m-4 h-96 flex p-6 flex-col text-lg bg-cover bg-[url('../public/Frame-1.png')] min-w-96"></div>
        <h1 className="p-10 self-center justify-self-center col-span-3 font-normal text-3xl">Aquesta ampolla ho pot fer-ho tot!</h1>
        </div>
        <div className="h-screen bg-slate-500 p-10 pt-15">
          <div className="grid grid-cols-2 gap-4 h-full content-start">
            <div className="Image:"><img src="/ampolla.png" width={660}></img></div>
            <div className="flex h-4/5 flex-col pt-20">
            <h1 className=" mb-5 text-5xl">Hydrabottle</h1>
            <p className=" pb-5 grid-rows-subgrid row-span-2 ">Si aquesta ampolla no es per tu llavors no es per ningu Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem optio illum sapiente sit doloribus blanditiis laborum repellendus consequatur similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi fugit earum sed odit itaque provident alias, ipsa deserunt facilis assumenda quasi, officiis sapiente suscipit nesciunt? Qui, mollitia recusandae voluptate quidem maiores voluptates laborum possimus saepe atque, quibusdam repellendus reiciendis eum natus impedit nobis dolore ad labore. Magni, incidunt nemo?</p>
            <div className=""><Buy /></div>

</div>
          </div>  
        </div>
    </main>
  );
}
