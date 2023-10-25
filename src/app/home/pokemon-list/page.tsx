'use client'

import Link from 'next/link'
import Pokemon from "@/app/components/pokemon/pokemon";
import {retrieveAll} from "@/app/services/pokemon-client";
import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import {PokemonModel} from "@/app/models/pokemon";
import {PokemonContext} from "@/app/home/pokemon-context";

export default function PokemonList() {
    const [pokemonComponents, setPokemonComponents] = useState<React.JSX.Element[]>([]);
    const [pokemonModels, setPokemonModels] = useState<PokemonModel[]>([]);
    const [pokemonContext, setContext] = useContext(PokemonContext);

    useEffect(() => {
        retrieveAll().then(response => {
            setPokemonModels(response)
            setPokemonComponents(response
                .map(pokemon => <Pokemon
                    key={pokemon.id}
                    pokemon={{id: pokemon.id, name: pokemon.name, url : pokemon.url}}
                    handleClick={() => {
                        setContext(pokemon)
                    }}></Pokemon>));
        })
    }, []);

    function onFilter(e: ChangeEvent<HTMLInputElement>) {
        const filtered = pokemonModels.filter(value => value.name.includes(e.target.value));
        setPokemonComponents(filtered
            .map(pokemon => <Pokemon
                key={pokemon.id}
                pokemon={{id: pokemon.id, name: pokemon.name, url : pokemon.url}}
                handleClick={() => {console.log(pokemon.name)}}></Pokemon>));
    }

  return (
      <>
        <input onChange={onFilter} className="button"/>
          <div className="button">
              <Link href="/home/counter">Contador</Link>
          </div>
          <div>Pokemons</div>
          {pokemonComponents}
      </>
  )
}