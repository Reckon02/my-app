import React from "react";
import { ShoppingBasket } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const Buy = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button>
            <ShoppingBasket className="mr-2 h-4 w-4" />
            Afegir a la bossa
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Bossa</SheetTitle>
            <SheetDescription>
              Aquesta funció està en desenvolupament. Perdoneu les molesties
            </SheetDescription>
            <div className="grid grid-cols-2 my-5 grid-rows-2 py-5">
              <img
                src="https://cdn.discordapp.com/attachments/1244300670761173002/1244319766571913287/lafunkinbotellatransparente.png?ex=6656a8d6&is=66555756&hm=bdc5b98c329841e0cd24c536facafbaab0473ac301d2863e3a816428e3d2c16f&"
                alt="Ampolla"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">Hydrabottle</h1>
                <p className="font-light">
                  <b>Quantitat</b> : 1
                </p>
                <p className="font-semibold text-xl">75,99€</p>
                <div className="flex mt-2">Total: 75,99€</div>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Buy;
