import React from "react";

const Grid4 = () => {
  return (
    <div className="grid grid-cols-2 rounded-xl">
      <div className="rounded-xl m-4 h-96 flex p-6 flex-col text-lg bg-cover text-white bg-[url('https://cdn.discordapp.com/attachments/1244300670761173002/1244310151717191740/fiberbottle.png?ex=6654a5a2&is=66535422&hm=5a254b994dd74aa3d4df1c1b120b6a4c9d08fbaf9a79f435f9124b9513c50aba&')] min-w-96">
        Fibra de carboni
        <p className="text-blue-200 rounded-xl text-sm">Comprar</p>
      </div>
      <div className="bg-slate-200 rounded-xl  m-4 h-96 flex p-6 flex-col text-lg text-white bg-cover bg-[url('https://cdn.discordapp.com/attachments/1244300670761173002/1244311485081976902/blackrbottle.png?ex=6654a6e0&is=66535560&hm=363b229e7cbac4f8b8e46159309d5d483af2af842710f803bcc50e9569785d48&')] min-w-96">
        Negre
        <p className="text-blue-200 text-sm">Comprar</p>
      </div>
      <div className="bg-slate-200 rounded-xl m-4 h-96 flex p-6 flex-col text-lg text-white bg-cover bg-[url('https://cdn.discordapp.com/attachments/1244300670761173002/1244312662289023137/whitebottle.png?ex=6654a7f8&is=66535678&hm=325a4d8b4828573b126530bf8f5ac22bc38d7b5b09f48defa115aef6f4af5a09&')] min-w-96">
        Blanc
        <p className="text-blue-200 text-sm">Comprar</p>
      </div>
      <div className="bg-slate-200 rounded-xl m-4 h-96 flex p-6 flex-col text-lg text-white bg-cover bg-[url('https://cdn.discordapp.com/attachments/1244300670761173002/1244314596328869888/aluminunbottle.png?ex=6654a9c6&is=66535846&hm=94eabeb459634f2050e09efe4635a17370ca0d0ef3c073da1825942347bc9517&')] min-w-96">
        Alumini
        <p className="text-blue-200 text-sm">Comprar</p>
      </div>
    </div>
  );
};

export default Grid4;
