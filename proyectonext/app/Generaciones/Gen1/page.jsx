"use client";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../componentes/funciones";
import PokemonCard from "@/app/componentes/Card";

const Gen1 = () => {
  const [pokemon, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const randomIds = Array.from(
        { length: 10 },
        () => Math.floor(Math.random() * 151) + 1
      );
      const pokemonList = await Promise.all(
        randomIds.map(async (id) => {
          const pokemonData = await fetchData({ id });
          return pokemonData;
        })
      );
      setPokemons(pokemonList);
    };
    fetchPokemons();
  }, []);
  
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.numero}
          img={pokemon.img}
          id={pokemon.numero}
          name={pokemon.nombre}
          title={`#${pokemon.id} - ${pokemon.nombre}`}
          hp={pokemon.hp} 
          attack={pokemon.ataque} 
          defense={pokemon.defensa}
        />
      ))}
    </div>
  );
};

export default Gen1;
