import React from 'react'
import { ShoppingBasket } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"

const Buy = () => {
  return (
    <div>
    <Sheet>
    <SheetTrigger>
    <Button>
      <ShoppingBasket className="mr-2 h-4 w-4"/>Afegir a la bossa
    </Button>
  </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Bossa</SheetTitle>
        <SheetDescription>
          Aquesta funció està en desenvolupament. Perdoneu les molesties
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet></div>
  )
}

export default Buy