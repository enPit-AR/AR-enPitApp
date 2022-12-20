import poseDetection from "@tensorflow-models/pose-detection";
import * as tf from '@tensorflow/tfjs-core';
// Register one of the TF.js backends.
import '@tensorflow/tfjs-backend-webgl';
// import '@tensorflow/tfjs-backend-wasm';

export async function JointCal(): Promise<number> {
    const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING};
    const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);
    const image = document.getElementById("img") as HTMLImageElement;
    const poses = await detector.estimatePoses(image);
    console.log(poses[0].keypoints);
    return 1;
        
};



// export default JointCal;

