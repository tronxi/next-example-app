'use client'
import {PokemonModel} from "@/app/models/pokemon";
import "./selected-pokemon.css";
export default function SelectedPokemon({pokemon} : {pokemon : PokemonModel}) {
    return (
        <div className="pokemon-card">
            <h1>Pokemon Actual : {pokemon.name}</h1>
        </div>
    )
}