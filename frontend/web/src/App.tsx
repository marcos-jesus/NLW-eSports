import { useState, useEffect } from "react"

import GameBanner from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"
import { CreateAdModal } from "./components/Form/CreateAdModal"

import logoImg from "./assets/Logo.svg"
 
import "./styles/main.css"

import * as Dialog from "@radix-ui/react-dialog"


function App() {

  interface Game {
    id: string;
    bannerUrl: string;
    title: string;
    _count: {
      ads: number
    }
  }

  const [games, setGames] = useState<Game[]>([])
  
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })

  },[])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} width="280" alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span> está aqui.
      </h1>
      
      <div className="grid grid-cols-6 gap-6 p-8">
        {games.map(game => {
          return (
            <GameBanner 
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads} 
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
