'use client'
import React, { useState } from 'react';
import Modal from './Modal';

const PokemonCard = ({ pokemon }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="card">
      <img src={PokemonCard.sprites}  />
      {/* <h3>{pokemon.nombre}</h3> */}
      {/* <p>#{pokemon.id}</p> */}
      <button onClick={handleShowModal}>Saber más</button>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>{pokemon.name}</h2>
          <p>ID: {pokemon.id}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <button onClick={handleCloseModal}>Cerrar</button>
        </Modal>
      )}
    </div>
  );
};

export default PokemonCard;
PokemonCard.sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
