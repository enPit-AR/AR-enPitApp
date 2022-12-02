import { useNavigate } from "react-router-dom"
import Camera from "../components/Camera";

const GameScreen = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <h1>ここはゲーム画面</h1>
            </div>
            <div>
                <Camera/>
            </div>
            <div>
                <button onClick={() => navigate('/')}>スタート画面へ</button>
                <button onClick={() => navigate('/ResultScreen')}>結果画面へ</button>
            </div>

        </div>
    );
  };

export default GameScreen;