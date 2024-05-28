import React from "react";

const Grid4 = () => {
  return (
    <div className="grid grid-cols-2 rounded-xl">
      <div className="rounded-xl m-4 h-96 flex p-6 flex-col text-lg bg-cover text-white bg-[url('https://raw.githubusercontent.com/Reckon02/my-app/master/public/fiberbottle.webp')] min-w-96">
        Fibra de carboni
        <p className="text-blue-200 rounded-xl text-sm">Comprar</p>
      </div>
      <div className="bg-slate-200 rounded-xl  m-4 h-96 flex p-6 flex-col text-lg text-white bg-cover bg-[url('https://raw.githubusercontent.com/Reckon02/my-app/master/public/blackrbottle.png')] min-w-96">
        Negre
        <p className="text-blue-200 text-sm">Comprar</p>
      </div>
      <div className="bg-slate-200 rounded-xl m-4 h-96 flex p-6 flex-col text-lg text-white bg-cover bg-[url('https://raw.githubusercontent.com/Reckon02/my-app/master/public/whitebottle.png')] min-w-96">
        Blanc
        <p className="text-blue-200 text-sm">Comprar</p>
      </div>
      <div className="bg-slate-200 rounded-xl m-4 h-96 flex p-6 flex-col text-lg text-white bg-cover bg-[url('https://raw.githubusercontent.com/Reckon02/my-app/master/public/aluminunbottle.png')] min-w-96">
        Alumini
        <p className="text-blue-200 text-sm">Comprar</p>
      </div>
    </div>
  );
};

export default Grid4;
