import { useRef, useState, useCallback } from "react";
 import Webcam from "react-webcam";
 
 function Camera() {
     const webcamRef = useRef<Webcam>(null);
     const [url, setUrl] = useState<string | null>(null);
     const capture = useCallback(() => {
         const imageSrc = webcamRef.current?.getScreenshot();
         if (imageSrc) {
           setUrl(imageSrc);
         }
       }, [webcamRef]);
    //  const autoCapture = () => {
    //      //自動化する仕組み
    //  }
     return(
         <div>
             <div>
             <Webcam
               audio={false}
               width={540}
               height={360}
               ref={webcamRef}
               screenshotFormat="image/jpeg"
               videoConstraints={{
                 width: 720,
                 height: 360,
                 facingMode: "user"
               }}
             />
             </div>
             <div>
                 <button onClick={capture}>撮影</button>
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
                         <img src={url} alt="Screenshot" />
                     </div>
                 </>
                 )}
             </div>
         </div>
         
     );
 };
 export default Camera;