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
          <h2>{PokemonCard.nombre}</h2>
          <p>ID: {PokemonCard.id}</p>
          <img src={PokemonCard.sprites} alt={PokemonCard.name} />
          <button onClick={handleCloseModal}>Siguiente</button> - 
          <button onClick={handleCloseModal}>Anterior</button> - 
          <button onClick={handleCloseModal}></button> 
        </Modal>
      )}
    </div>
  );
};

export default PokemonCard;
PokemonCard.sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
