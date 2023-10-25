'use client'

import React, {useState} from "react";
import SelectedPokemon from "@/app/components/selected-pokemon/selected-pokemon";
import {PokemonContext} from "@/app/home/pokemon-context";
import {PokemonModel} from "@/app/models/pokemon";
export default function DashboardLayout({children}: {
  children: React.ReactNode
}) {
    const [pokemonModel, setPokemonModel] = useState<PokemonModel>();
    return (
      <section>
        <nav className="nav">
          <p>Cosas comunes</p>
            {pokemonModel != undefined ?
                <SelectedPokemon pokemon={pokemonModel}></SelectedPokemon> :
                <span></span>}
        </nav>
          <PokemonContext.Provider value={[pokemonModel, setPokemonModel]}>
              {children}
          </PokemonContext.Provider>
      </section>
  )
}