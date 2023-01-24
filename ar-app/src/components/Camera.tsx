// import { useRef, useState, useCallback } from "react";
//  import Webcam from "react-webcam";
//  import Calculation from "./JointCal";
//  import CorrectJudge from "./CorrectJudge";
//  import useInterval from "./UseInterval";
 
//  function Camera() {
//      const webcamRef = useRef<Webcam>(null);
//      const [url, setUrl] = useState<string | null>(null);
//      const capture = useCallback(() => {
//          const imageSrc = webcamRef.current?.getScreenshot();
//          if (imageSrc) {
//            setUrl(imageSrc);
//          }
//        }, [webcamRef]);
//     const captureCalc =async () => {
//         capture();
//         var cosinResult=Calculation();
//         CorrectJudge(await cosinResult);
//     }

//     //  const autoCapture = () => {
//     //      //自動化する仕組み
//     //  }
//      return(
//          <div style={styles.component}>
//              <div style={styles.image}>
//              <Webcam
//                audio={false}
//             //    width={540}
//             //    height={360}
//                width={540}
//                height={460}
//                ref={webcamRef}
//                screenshotFormat="image/jpeg"
//                videoConstraints={{
//                  width: 720,
//                  height: 540,
//                  facingMode: "user"
//                }}
//              />
//              </div>
//              <div>
//                  <button onClick={captureCalc}>撮影</button>
//              </div>
//              <div>
//                  {url && (
//                  <>
//                      <div>
//                          <button
//                          onClick={() => {
//                              //画像を別ファイルに保存するように書き換える
//                              //urlに名前をつけて別ファイルに保存していく
//                              setUrl(null);
//                          }}
//                          >
//                          削除
//                          </button>
//                      </div>
//                      <div>
//                          <img id='img' style={styles.image} src={url} alt="Screenshot" />
//                      </div>
//                  </>
//                  )}
//              </div>
//          </div>
         
//      );
//  };

// const styles : {[key: string]: React.CSSProperties} = {
//     component:{
//         // border: "solid"
//     },
//     image :{
//         transform: 'scale(-1,1)'
//     }
// }
//  export default Camera;


import { useRef, useState, useCallback } from "react";
  import Webcam from "react-webcam";
  import Calculation from "./JointCal";
  import CorrectJudge from "./CorrectJudge";
  import useInterval from "./UseInterval";
  
  function Camera() {
    const TIME: number = 10;
  	 const [ isAutoStart, setIsAutoStart ] = useState<boolean>(false); //add
     const [countdown, setCountdown] = useState<number>(TIME); //add
     const [delay] = useState<number>(1) //add
  	 const captureStop = () => {
        setIsAutoStart(false)
    } //add
      const webcamRef = useRef<Webcam>(null);
      const [url, setUrl] = useState<string | null>(null);
      const capture = useCallback(() => {
          const imageSrc = webcamRef.current?.getScreenshot();
          if (imageSrc) {
            setUrl(imageSrc);
          }
        }, [webcamRef]);
     const captureCalc =async () => {
     	setIsAutoStart(true);
         capture();
         var cosinResult=Calculation();
         CorrectJudge(await cosinResult);
     }; //add
     useInterval(
          () => {
              setCountdown(prevState => prevState -1)
              if (countdown === TIME){
  
              } else if (countdown === 0){
                  setCountdown(TIME);
                  captureCalc();
              }
          },
          isAutoStart ? delay * 1000 : null
      ); //add
 
     //  const autoCapture = () => {
     //      //自動化する仕組み
     //  }
      return(
          <div style={styles.component}>
              <div style={styles.image}>
              <Webcam
                audio={false}
             //    width={540}
             //    height={360}
                width={540}
                height={460}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  width: 720,
                  height: 540,
                  facingMode: "user"
                }}
              />
              </div>
              <div>
                  {/* //<button onClick={captureCalc}>撮影</button>
    
    				//add */}
                  {!isAutoStart ? (
                  <button onClick={captureCalc}>撮影</button>
                  ) : (
                  <button onClick={captureStop}>ストップ</button>
                  )}
                  
              </div>
              <div>
                  {url && (
                  <>
                      <div>
                          <button
                          onClick={() => {
                              //画像を別ファイルに保存するように書き換える
                              //urlに名前をつけて別ファイルに保存していく
                              setUrl(null);
                          }}
                          >
                          削除
                          </button>
                      </div>
                      <div>
                          <img id='img' style={styles.image} src={url} alt="Screenshot" />
                      </div>
                  </>
                  )}
              </div>
          </div>
          
      );
  };
 
 const styles : {[key: string]: React.CSSProperties} = {
     component:{
         // border: "solid"
     },
     image :{
         transform: 'scale(-1,1)'
     }
 }
  export default Camera;
 
