// import react from "react";
// import logo from '../../assets/logo.svg';

const Home = () => {
    return (

      <div>
        <h1>Welcome to Pro Roulette</h1>
        <button onClick={() => window.location.href = '/game'}>Start Game</button>
      </div>
    );
};

export default Home;