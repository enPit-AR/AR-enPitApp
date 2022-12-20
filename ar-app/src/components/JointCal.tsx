import * as poseDetection from "@tensorflow-models/pose-detection";
// import * as tf from '@tensorflow/tfjs-core';
// Register one of the TF.js backends.
import '@tensorflow/tfjs-backend-webgl';
// import '@tensorflow/tfjs-backend-wasm';

async function JointCal(): Promise<poseDetection.Keypoint[]> {
    const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING};
    const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);
    const image = document.getElementById("img") as HTMLImageElement;
    const poses = await detector.estimatePoses(image);
    //値の取得
    const result = poses[0].keypoints;
    console.log(result);
    return result;
};

//3点からなる2つのベクトルの間のcosθを計算する
//3つの点を引数に指定し、端の点の要素-間の点の要素の演算でベクトルを2つ生成、
//(各ベクトルの〇番目の要素がx、1番目の要素がyの値)
//その内積を求めて
//ノルム(ベクトルの長さ)で割ることでcosを求めている
function InnerProductCal(Joint1:any,CenterList:any,Joint2:any){
    const vector1:number[] = [Joint1["x"]-CenterList["x"],Joint1["y"]-CenterList["y"]];
    const vector2:number[] = [Joint2["x"]-CenterList["x"],Joint2["y"]-CenterList["y"]];
    const innerProduct:number = vector1[0]*vector2[0] + vector1[1]*vector2[1];
    const nolm1:number = vector1[0]*vector1[0] + vector1[1]*vector1[1];
    const nolm2:number = vector2[0]*vector2[0] + vector2[1]*vector2[1];
    const cosin:number = innerProduct/(nolm1*nolm2);
    return cosin;
  }


function Score(result:poseDetection.Keypoint[]) {
    
};

export default JointCal;

