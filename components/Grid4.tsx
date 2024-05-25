import React from 'react'

const Grid4 = () => {
  return (
          <div className="grid grid-cols-2 rounded-xl" >
        <div className="rounded-xl m-4 h-96 flex p-6 flex-col text-lg bg-[url('../public/ampolla.png')] min-w-96">Blau
        <p className="text-blue-900 rounded-xl text-sm">Comprar</p></div>
        <div className="bg-slate-200 rounded-xl  m-4 h-96 flex p-6 flex-col text-lg bg-cover bg-[url('../public/ampolla.png')] min-w-96">Negre
        <p className="text-blue-900 text-sm">Comprar</p></div>
        <div className="bg-slate-200 rounded-xl m-4 h-96 flex p-6 flex-col text-lg bg-cover bg-[url('../public/ampolla.png')] min-w-96">Blanc
        <p className="text-blue-900 text-sm">Comprar</p></div>
        <div className="bg-slate-200 rounded-xl m-4 h-96 flex p-6 flex-col text-lg bg-cover bg-[url('../public/ampolla.png')] min-w-96">Alumini
        <p className="text-blue-900 text-sm">Comprar</p></div>
        
</div>
  )
}

export default Grid4