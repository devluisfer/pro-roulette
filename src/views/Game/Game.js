import RouletteComponent from '../../components/Roulette/Roulette';
import { useNavigate } from "react-router-dom";


const Game = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/')}>Home</button>
            <RouletteComponent />
        </div>
    );
};

export default Game;