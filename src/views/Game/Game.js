import RouletteComponent from '../../components/Roulette/Roulette';


const Game = () => {
    return (
        <div>
            <button onClick={() => window.location.href = '/'}>Home</button>
            <RouletteComponent />
        </div>
    );
};

export default Game;