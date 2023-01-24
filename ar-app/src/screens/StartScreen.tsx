import { useNavigate } from "react-router-dom";

const StartScreen = () => {
    const navigate = useNavigate();
    return (
        //CSSを整える
        <div>
            <div>
                <h1>ENjoいずむ</h1>
            </div>

            <div>
                <button onClick={() => {
                    console.log('button is pushed')
                    navigate('/GameScreen')
                    // gameStart()
                    // JointCal()
                    }}>ゲームスタート</button>
            </div>
            {/* <div>
                <button onClick={() => navigate('/ResultScreen')}>結果を見る</button>
            </div> */}
        </div>
    );
  };

export default StartScreen;
  