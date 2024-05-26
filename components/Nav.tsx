import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Nav = () => {
  return (
    <nav className=" top-0 z-10 bg-white">
      <div className="max-w-5xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <a href="/my-app">
            <img
              src="https://cdn.discordapp.com/attachments/1244300670761173002/1244300750373388439/Component_2_1.png?ex=66549ce0&is=66534b60&hm=748c5e0b435a6d251cb2c94f518b57210ad2556db4a4e57ef38e920b12b5a148&"
              alt="Hydratech"
              width={100}
            />
          </a>
          <div className="flex text-gray-900 pl-3">
            <a href="/my-app/login">
              <Button variant={"outline"}>Inici de sessió</Button>
            </a>
            <a
              href="https://5ilhcri21ki.typeform.com/to/rN6FYn5E"
              target="_blank"
            >
              <Button variant={"link"}>Feedback</Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
