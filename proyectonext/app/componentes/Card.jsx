'use client';
import React, { useState } from 'react';
import Modal from './Modal';

const PokemonCard = ({ img, id, name, hp, attack, defense }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="card">
      <h3>#{id} - {name}</h3>
      <img src={img} alt={name} />
      <button onClick={handleShowModal}>Saber más</button>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <>
            <h2>{name}</h2>
            <p>ID: {id}</p>
            <p>HP: {hp}</p>
            <p>Ataque: {attack}</p>
            <p>Defensa: {defense}</p>
            <img src={img} alt={name} />
            <button onClick={handleCloseModal}></button>
          </>
        </Modal>
      )}
    </div>
  );
};

export default PokemonCard;
