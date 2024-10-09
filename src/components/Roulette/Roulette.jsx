// src/components/Roulette/Roulette.jsx
import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './Roulette.css';
import rouletteData from '../../data/rouletteData.json';

const RouletteComponent = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [sections, setSections] = useState(
    rouletteData.sections.map(section => ({
      option: section.label,
      style: { backgroundColor: getRandomColor() }
    }))
  );

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * sections.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    
    <div className="roulette-container">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={sections}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
        onStopSpinning={() => {
          setMustSpin(false);
          alert(`¡Felicidades! Ganaste: ${sections[prizeNumber].option}`);
        }}
      />
      <button className="spin-button" onClick={handleSpinClick} disabled={mustSpin}>
        Girar
      </button>
    </div>
  );
};

// Función para generar colores aleatorios
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default RouletteComponent;
