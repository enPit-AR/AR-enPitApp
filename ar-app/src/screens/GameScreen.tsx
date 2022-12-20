import { useNavigate } from "react-router-dom"
import Camera from "../components/Camera";
import StopWatch from "../components/StopWatch";
import GameContent from "../components/GameContent";


const GameScreen : React.FC = () => {
    
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <button onClick={() => navigate('/')}>スタート画面へ</button>
                <button onClick={() => navigate('/ResultScreen')}>結果画面へ</button>
            </div>
            <div style={styles.mainScreen}>
                <div style={styles.left}>
                    <div style={styles.camera}>
                        <Camera/>
                    </div>
                </div>

                <div style={styles.right}>
                    <div style={styles.stopWatch}>
                        <StopWatch/>
                    </div>
                    <div style={styles.game}>
                        <GameContent/>
                    </div>
                </div>
            </div>
        </div>
    );
  };

const styles : {[key: string]: React.CSSProperties} = {
    mainScreen:{
        display: "flex", 
        margin:0,
        padding:0, 
    },
    left:{
        flex: 1,
        margin:0,
        padding:0, 
        border: "solid",
        display:"flex",
    },
    camera:{
    },

    right:{
        flex: 1,
        margin:0,
        padding:0, 
        border: "solid",
        display: 'flex',
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        
    },
    stopWatch:{
        flex: 0.1,
        alignItems: "center",
    },
    game:{
        border: "solid",
        flex:0.9,
    },
}

export default GameScreen;