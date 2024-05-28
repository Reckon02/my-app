"use client";
import { Separator } from "@/components/ui/separator";
import Nav from "@/components/Nav";
import Grid4 from "@/components/Grid4";
import { Button } from "@/components/ui/button";
import Buy from "@/components/Buy";
import Footer from "@/components/Footer";

import { Widget } from "@typeform/embed-react";

import { Nfc } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen flex flex-col items-center p-5 bg-[url('../public/retro.webp')] bg-cover">
        <h1 className="text-5xl pb-5 pt-5 font-bold text-white">Hydrabottle</h1>
        <h2 className="text-3xl p-5 text-white font-semibold">
          &quot;La hidratació és una prioritat&quot;
        </h2>
        <img
          src="https://cdn.discordapp.com/attachments/1244300670761173002/1244319766571913287/lafunkinbotellatransparente.png?ex=6654ae96&is=66535d16&hm=55406e200ac116a6e54b372df1bdd3374d396dc6d6dd23d9db4610699fdde0fd&"
          width={500}
          height={300}
          alt="Ampolla"
        />
      </div>
      <div className=" grid grid-cols-2">
        <div className="p-14">
          <h1 className="text-3xl font-semibold pb-3">
            Perquè necessito això?
          </h1>
          <h2 className="text-xl font-medium pb-2">
            Alguna vegada has pensat quantes vegades has estat sense beure aigua
            per quatre o cinc hores sense saber-hi?
          </h2>
          <h3 className="text-xl font-normal pb-3">
            Aqui hi han alguns efectes:
          </h3>
          <div className="font-light">
            <p>
              <b>Boca seca: </b>
              La falta de saliva pot dificultar parlar, empassar i mastegar.
            </p>
            <p>
              {" "}
              <li>
                Fatiga: La deshidratació pot fer que et sentis cansat i amb poca
                energia. <br />
              </li>
              <li>
                Mal de cap: La deshidratació pot provocar maldecaps lleus o
                moderats. <br />
              </li>
              <li>
                Marejos: La deshidratació pot fer que et sentis marejat o
                atordit, especialment si et poses dret ràpidament. <br />
                <li>
                  Restrenyiment: La deshidratació pot fer que la femta sigui
                  dura i difícil de passar.
                </li>
              </li>
              <li>
                Dificultat per a concentrar-se: La deshidratació pot afectar la
                teva capacitat per a concentrar-te i parar esment.
              </li>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://cdn.discordapp.com/attachments/1244300670761173002/1244404065425690794/untitled.png?ex=6654fd19&is=6653ab99&hm=cb18fc613937ee010c9a639ee4f67c7ceea1389878651c69c027db7dca2d24bc&"
            width={478}
          ></img>
        </div>
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
      <div className="h-screen bg-slate-200 p-10 pt-15">
        <div className="grid grid-cols-2 gap-4 h-full content-start">
          <div className="Image:">
            <img
              src="https://raw.githubusercontent.com/Reckon02/my-app/master/public/Frame-1.png"
              width={660}
              alt="Ampolla"
            ></img>
          </div>
          <div className="flex h-4/5 flex-col pt-20">
            <h1 className=" mb-5 text-5xl font-semibold">Hydrabottle</h1>
            <p className=" pb-5 grid-rows-subgrid row-span-2 mr-36 ">
              Aquesta és l&apos;ampolla que d&apos;una vegada acabés amb la
              deshidratació. T&apos;avisarà per prendre, recarregar-la i
              s&apos;adaptarà als teus hàbits d&apos;hidratar-te. Pots
              beure&apos;n el que vulguis. Per rentar-la és tan simple com una
              ampolla normal, mai t&apos;hauràs de preocupar de trencar-la.
              Oblideu-vos de carregar-la sempre, amb carregar-ho una hora
              tindràs dues setmanes d&apos;ús.
            </p>
            <li>Un més de bateria</li>
            <li>Durabilitat de grau militar</li>
            <li>Garantia per dos anys</li>
            <h2 className="py-5 text-3xl">75,99€</h2>

            <div className="flex flex-row">
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
