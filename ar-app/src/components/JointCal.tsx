import MySample_A from "../img/MySample_A.jpg";
import poseDetection from "@tensorflow-models/pose-detection";

function JointCal() {
    // const model = poseDetection.SupportedModels.MoveNet;
    // async() => {
  
    //     //　検出器を生成
    //     const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet)
       
    //     // img要素を取得する 
    //     const imageElement = document.getElementById('img')
        
    //     // 姿勢推定を実行する
    //     const poses = await detector.estimatePoses(imageElement)
        
    //     // 姿勢推定結果を出力する
    //     console.log(poses[0].keypoints)
        
    //   }
    return (
        <div>
            <div>関節点計算したい！</div>
            <div style={styles.calcImage}>
                <img id="img" alt="うわああ読み込まれないいい" src={MySample_A} width="400" height="500"/>
            </div>   
        </div>
    );
};


const styles : {[key: string]: React.CSSProperties} = {
    calcImage:{
        // display: "none"
    }

};


export default JointCal;

