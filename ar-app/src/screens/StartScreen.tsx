import { useNavigate } from "react-router-dom";

const StartScreen = () => {
    const navigate = useNavigate();
    // const gameStart = () => {
    //     const WAITTIME:number= 3;
    //     const hoge = {
    //         //3秒まつ感じの処理
    //     };

    //     navigate('/ResultScreen')
    // };

    return (
        //CSSを整える
        <div>
            <div>
                <h1>ENjoいずむ</h1>
                <br />
                スタート画面
            </div>

            <div>
                <button onClick={() => {
                    console.log('button is pushed')
                    navigate('/GameScreen')
                    // gameStart()
                    }}>ゲームスタート</button>
            </div>
            {/* <div>
                <button onClick={() => navigate('/ResultScreen')}>結果を見る</button>
            </div> */}
        </div>
    );
  };

export default StartScreen;
  