import { Separator } from "@/components/ui/separator";
import Nav from "@/components/Nav";
import Grid4 from "@/components/Grid4";
import { Button } from "@/components/ui/button";
import Buy from "@/components/Buy";
import Footer from "@/components/Footer";

import { Nfc } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen flex flex-col items-center p-5 bg-[url('../public/retro.webp')] bg-contain">
        <h1 className="text-5xl pb-10 pt-5 font-bold text-white">
          Hydrabottle
        </h1>
        <img src="ampolla.png" width={500} height={300} alt="Ampolla" />
      </div>
      <Grid4 />
      <Separator className="my-4" />
      <div className="grid grid-cols-3 min-h-max mt-0">
        <h1 className="p-10 pb-5 self-center justify-self-center col-span-3 font-normal text-3xl">
          Pantalla integrada
        </h1>
        <div className="m-10 mt-0 h-96 flex p-6 flex-col text-lg bg-cover bg-[url('../public/Frame-1.png')] min-w-96"></div>
        <div className="m-10 mt-0 h-96 flex p-6 flex-col text-lg bg-cover bg-[url('../public/Frame-2.png')] min-w-96"></div>
        <div className="m-10 mt-0 h-96 flex p-6 flex-col text-lg bg-cover bg-[url('../public/Frame-3.png')] min-w-96"></div>
      </div>
      <div className="h-screen bg-slate-500 p-10 pt-15">
        <div className="grid grid-cols-2 gap-4 h-full content-start">
          <div className="Image:">
            <img src="ampolla.png" width={660}></img>
          </div>
          <div className="flex h-4/5 flex-col pt-20">
            <h1 className=" mb-5 text-5xl">Hydrabottle</h1>
            <p className=" pb-5 grid-rows-subgrid row-span-2 ">
              Si aquesta ampolla no es per tu llavors no es per ningu Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
              voluptatem optio illum sapiente sit doloribus blanditiis laborum
              repellendus consequatur similique! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi eligendi fugit earum sed odit
              itaque provident alias, ipsa deserunt facilis assumenda quasi,
              officiis sapiente suscipit nesciunt? Qui, mollitia recusandae
              voluptate quidem maiores voluptates laborum possimus saepe atque,
              quibusdam repellendus reiciendis eum natus impedit nobis dolore ad
              labore. Magni, incidunt nemo?
            </p>
            <div className="flex flex-row ">
              <div className="">
                <Buy />
              </div>
              <Button className="ml-5" variant="secondary">
                <Nfc className="mr-2 h-4 w-4" />
                Google Pay
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
