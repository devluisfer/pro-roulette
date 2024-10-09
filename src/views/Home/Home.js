import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Pro Roulette</h1>
      <button onClick={() => navigate('/game')}>Start Game</button>
    </div>
  );
};

export default Home;
