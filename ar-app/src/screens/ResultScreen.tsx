import { useNavigate } from 'react-router-dom';

const ResultScreen = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <h1>結果の表示</h1>
            </div>
            <div>
                <button onClick={() => navigate('/')}>スタート画面へ戻る</button>
            </div>
        </div>
    );
  };

export default ResultScreen;