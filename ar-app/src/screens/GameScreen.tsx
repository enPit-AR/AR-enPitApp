import { useNavigate } from "react-router-dom"
import Camera from "../components/Camera";
import StopWatch from "../components/StopWatch";
// import JointCal from "../components/JointCal";

const GameScreen = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <button onClick={() => navigate('/')}>スタート画面へ</button>
                <button onClick={() => navigate('/ResultScreen')}>結果画面へ</button>
            </div>
            <div style={styles.mainScreen}>
                <div style={styles.camera}>
                    <Camera/>
                </div>
                <div style={styles.stopWatch}>
                    <StopWatch/>
                </div>
            </div>
            {/* <div>
                <JointCal />
            </div> */}
                <div>関節点計算したい！</div>
                <div >
                    <img id="img" alt="うわああ読み込まれないいい" src="MySample_A.jpg" width="400" height="500"/>
                </div>   
        </div>
    );
  };

const styles : {[key: string]: React.CSSProperties} = {
    mainScreen:{
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-around",

    },

}

export default GameScreen;