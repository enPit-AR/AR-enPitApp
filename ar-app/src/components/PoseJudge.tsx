import { text } from "node:stream/consumers";
import { ListFormat, TypeVariable } from "typescript";






const VectorAngle = () => {
  /***
  * movenetの出力する関節点の数は17種類
  * 鼻、目(左右)、耳(左右)、肩(左右)、ひじ(左右)、
  * 手首(左右)、腰(左右)、膝(左右)、足首(左右)の17個
  * 
  * 出力画面を見た時の線分の様子
  * 
  * 
  *     　　　　　　左耳3　左目1　鼻0　右目2　右耳4
  * 
  * 左手首9 --- 左肘7 --- 左肩5 --- 右肩6 --- 右肘8 --- 右手首10
  * 　　　　　　　　　　　 |        |
  *                    |         |
  *                  左腰11　---　右腰12
  * 　　　　　　　　　　　|          |
  *                   |           |
  *                左膝13　　　　　　右膝14
  *                   |             |
  *               左足首15　　　　　　右足首16
  * 
  * 2線間の角度を出すため、調べる角度は14個
  */

  //3点からなる2つのベクトルの間のcosθを計算する
  //3つの点を引数に指定し、端の点の要素-間の点の要素の演算でベクトルを2つ生成、その内積を求めて
  //ノルム(ベクトルの長さ)で割ることでcosを求めている
  function InnerProductCal(Joint1:any,CenterList:any,Joint2:any){
    const vector1:number[] = [Joint1["x"]-CenterList["x"],Joint1["y"]-CenterList["y"]]
    const vector2:number[] = [Joint2["x"]-CenterList["x"],Joint2["y"]-CenterList["y"]]
    const innerProduct:number = vector1[0]*vector2[0] + vector1[1]*vector2[1]
    const nolm1:number = vector1[0]*vector1[0] + vector1[1]*vector1[1]
    const nolm2:number = vector2[0]*vector2[0] + vector2[1]*vector2[1]
    const cosin:number = innerProduct/(nolm1*nolm2)
    return cosin
  }

  /**
   * 各関節のcosinのベクトル
   * 正解ポーズ分同じようなベクトルを正解情報として作成して、
   * カメラで撮ってきた写真の関節のcosinベクトルとのユークリウッド距離でどの文字を回答してるか判断。
   * そのあと今答えるべき文字のポーズかチェックして当たってるなら正解、違うなら不正解とする。
   */
  const result =[
    // InnerProductCal(DemoJoint[9],DemoJoint[7],DemoJoint[5]),//左手首、左肘、左肩
    // InnerProductCal(DemoJoint[10],DemoJoint[8],DemoJoint[6]),//右手首、右肘、右肩
    // InnerProductCal(DemoJoint[7],DemoJoint[5],DemoJoint[6]),//左肘、左肩、右肩
    // InnerProductCal(DemoJoint[8],DemoJoint[6],DemoJoint[5]),//右肘、右肩、左肩
    // InnerProductCal(DemoJoint[7],DemoJoint[5],DemoJoint[11]),//左肘、左肩、左腰
    // InnerProductCal(DemoJoint[8],DemoJoint[6],DemoJoint[12]),//右肘、右肩、右腰
    // InnerProductCal(DemoJoint[5],DemoJoint[11],DemoJoint[12]),//左肩、左腰、右腰
    // InnerProductCal(DemoJoint[6],DemoJoint[12],DemoJoint[11]),//右肩、右腰、左腰
    // InnerProductCal(DemoJoint[5],DemoJoint[11],DemoJoint[12]),//左肩、左腰、左膝
    // InnerProductCal(DemoJoint[6],DemoJoint[12],DemoJoint[14]),//右肩、右腰、右膝
    // InnerProductCal(DemoJoint[12],DemoJoint[11],DemoJoint[13]),//右腰、左腰、左膝
    // InnerProductCal(DemoJoint[11],DemoJoint[12],DemoJoint[14]),//左腰、右腰、右膝
    // InnerProductCal(DemoJoint[11],DemoJoint[13],DemoJoint[15]),//左腰、左膝、左足首
    // InnerProductCal(DemoJoint[12],DemoJoint[14],DemoJoint[16]),//右腰、右膝、右足首
  ]
}




// export default PoseJudge

export default VectorAngle;
