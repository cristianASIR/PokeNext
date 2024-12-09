'use client'
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../componentes/funciones';
import RootLayout from '@/app/layout';

const Gen1 = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const randomIds = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 152); // Generación 1: IDs 1 a 151
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
    <RootLayout>
      
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        
        {pokemons.map((pokemon) => (
          <Tarjeta
            key={pokemon.numero}
            img={pokemon.img}
            title={`#${pokemon.numero} - ${pokemon.nombre}`}
            text={`HP: ${pokemon.hp} Ataque: ${pokemon.ataque} Defensa: ${pokemon.defensa}`}
            onButtonClick={() => alert(`Detalles de ${pokemon.nombre}`)} // Aquí puedes abrir el modal con detalles
          />
        ))}
      </div>
    </RootLayout>
  );
};

export default Gen1;
