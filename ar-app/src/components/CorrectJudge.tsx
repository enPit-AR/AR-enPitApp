import CorrectData from "../CorrectData.json";


async function CorrectJudge(cosinScore:number[]){

    // const A = [-0.9864507137564382, -0.9920115838996543,
    //             0.06892296897611219, 0.11007489646105037,
    //             -0.986136600927558, -0.9829290279527364, 
    //             -0.05505923357497307, -0.11711336460112497, 
    //             -0.9675118734569814, -0.9636112758677082, 
    //             -0.1991716057087662, -0.1526162964381668, 
    //             -0.9969980657515924, -0.993972464826227];

    // const B = [-0.8992835339552115, -0.4673238541093036, 
    //             -0.3768876609448178, -0.5910825454497665, 
    //             0.8635956057658356, 0.6986636991904109, 
    //             0.0610451527922356, -0.35970844865836776,
    //             -0.9981370773604402, -0.41348161043229015, 
    //             -0.12182891251805246, -0.7008342635411074, 
    //             -0.9999004572017784, 0.7788057708134233];

    // const C = [-0.02864014209916077, -0.1895814527579234, 
    //             -0.9859577140327158, -0.9729150862985695, 
    //             -0.6958532945710661, 0.6120419094514914, 
    //             0.29668411761180014, -0.4597177155073893, 
    //             -0.856285768815065, -0.4488269343117037, 
    //             0.23920079532678537, -0.5872578884003699, 
    //             -0.9997529838192628, -0.9943971696732711];

    // const D = [-0.9715391942909506, -0.4281206004081113, 
    //             -0.32929308298103666, -0.6174096100885206, 
    //             0.93232747411333, 0.5991602644829293, 
    //             -0.04579961385499918, -0.24888437660797455, 
    //             -0.9979161930609708, -0.9846773010325894, 
    //             -0.018751535073195498, 0.07617178771880954, 
    //             -0.9964168451267682, -0.9995204112697501];   
        
    // const E = [-0.8152848494015726, -0.5512342879274615, 
    //             0.9174936095644127, -0.9019622019693339, 
    //             0.6731739690547681, -0.17608664969092222, 
    //             0.1180665921956003, -0.17733406974222712, 
    //             -0.9958907574096388, 0.14238377315408854, 
    //             -0.02765217069279641, -0.9993732159756579, 
    //             -0.9509865253031129, 0.01862397563534447]; 
    
        
    // const F = [-0.9981663752774379, 0.4150168307992827, 
    //             -0.998730237333314, -0.9175826646592702, 
    //             -0.049812623060398145, -0.40486479615720145, 
    //             -0.005301831633852558, -0.10273996034296409, 
    //             -0.9999479764062178, -0.9939274081354873, 
    //             -0.004898520484245236, -0.007339399338900705, 
    //             -0.998085772225517, -0.9961870858364025];
        
    // const G = [-0.13013781272140168, 0.6638079336421693, 
    //             -0.6927426879531504, -0.853845035758622, 
    //             -0.9306880584832731, 0.6161677297652268, 
    //             -0.16076972605159912, -0.11266854384759488, 
    //             -0.9994324453123385, -0.9992187409421232, 
    //             0.12743007418065466, 0.07331118669693243, 
    //             -0.9998442218152216, -0.9881661004175034];
        
    // const H = [0.15946809453178326, 0.12537923999736977, 
    //             -0.9686036230188667, -0.9824854310296028, 
    //             0.1461156537448742, 0.04992944687103823, 
    //             -0.12197436529463976, -0.11952395814578964, 
    //             -0.4158802703941229, -0.47831292260025693, 
    //             -0.8519022372965755, -0.8147241556883434, 
    //             -0.3372832354113375, -0.38223787063741244];
        
    // const I = [-0.9402776221949058, -0.995900327758092, 
    //             -0.24369535138175782, -0.14513627749771102, 
    //             0.9150794644585721, 0.9493463146003268, 
    //             -0.1584019058323941, -0.18280796892437093, 
    //             -0.9955365770703711, -0.9884877272995337, 
    //             0.06450992113661594, 0.03195199528977497, 
    //             -0.9998870558682779, -0.9984991361812271];
        
    // const J = [-0.992342736175097, -0.9587603153305928, 
    //             -0.9864636985557179, -0.9705794237864478, 
    //             0.04417997379789639, -0.0067211416599316535, 
    //             -0.23144729504978168, -0.13642926846624204, 
    //             -0.9696738702108496, -0.9681094478425665, 
    //             -0.013337959946013318, -0.11610669351557637, 
    //             0.19376504108631296, -0.9767044862337289];
        
    // const K = [-0.21706908998636346, -0.9807227257170724, 
    //             -0.5834588303725656, -0.9473011642289706, 
    //             -0.8889435170434427, -0.39723305087634125, 
    //             -0.035307233014132244, -0.1930899606054533, 
    //             -0.9995691845429051, -0.7353888455282576, 
    //             0.06462411092141851, -0.5228965962014467, 
    //             -0.9999441429228365, -0.9995501483387861];
        
    // const L =[0.5082328596188433, -0.956593198686462, 
    //             -0.44629405827151264, -0.9315076736280569, 
    //             -0.9534221673254334, 0.24251663249651784, 
    //             -0.09815453197895767, -0.1841397676332042, 
    //             -0.9999977919177572, -0.9779194007406895, 
    //             0.09606299677403513, -0.025334969243838486, 
    //             -0.987762101570074, -0.9976190596710134];
        
    // const M = [-0.34914541385469977, 0.5256851144145713, 
    //             -0.8628614345477208, -0.8315158250296621, 
    //             0.06898626921173669, 0.6705457627240706, 
    //             0.07390414262952338, -0.3791191181352632, 
    //             -0.997685058919503, -0.6728735109678937, 
    //             -0.005915178620093021, -0.4294338700228808, 
    //             -0.999446332470462, -0.9405380756742462];
        
    // const N = [0.9352243550698064, 0.463496204787775, 
    //             -0.8503170230657692, -0.9170328397836578, 
    //             0.18781204284170055, 0.459259452968258, 
    //             -0.1546357153557196, -0.1425878104385363, 
    //             -0.9995841296935392, -0.9651828013334998, 
    //             0.12608135520222272, -0.12128025050811096, 
    //             -0.9922064402543744, -0.9998426364580344];
       
    // const O = [-0.2856097899192683, -0.037999583697480986, 
    //             -0.5098660208134064, -0.5426515428962515, 
    //             -0.9035822773202138, -0.8198896474478337, 
    //             -0.05490627740859056, -0.001370240419839208, 
    //             -0.9996085220989382, -0.9977503490192616, 
    //             0.02694837945089177, 0.0684061956913684, 
    //             -0.9899157530168733, -0.9926278768520221];
        
    // const P =[-0.9352401291471157, 0.5626159116266269, 
    //             -0.4272456027714069, -0.678125578381405, 
    //             0.9414007915859561, -0.8772730217845056, 
    //             0.0688701104356657, -0.21440361008092848, 
    //             -0.9993941863554467, -0.989383311590094, 
    //             -0.03410785861122335, 0.07017747195544331, 
    //             -0.9917108094686174, -0.99559377728244];
        
    // const Q = [-0.04246517900183679, 0.6633769214356852, 
    //             -0.7870333805640678, -0.9643778156740211, 
    //             -0.6881958044172128, -0.39685957135924843, 
    //             0.11149746235749138, 0.12252762279641725, 
    //             -0.9949667565852378, -0.9999967708999592, 
    //             -0.011355523139496844, -0.12504937557878001, 
    //             -0.9986948055191055, -0.9878195625545068];
        
    // const R = [-0.17192529076336407, 0.16850998770069175, 
    //             -0.4223044695285117, -0.6820182500661388, 
    //             -0.9184453395600719, -0.8210558443988178, 
    //             -0.06257831716209966, -0.10946335925029364, 
    //             -0.8678686774167107, -0.7041590305996379, 
    //             -0.4415102293297214, -0.6286959174822419, 
    //             -0.9740578599359333, -0.6115647404915461];
        
    // const S = [-0.03381340211095391, 0.05191916299401587, 
    //             -0.48588698098305666, -0.5382676932132275, 
    //             -0.964538026405638, 0.8147724165426053, 
    //             -0.14282574193738823, -0.1465033100680612, 
    //             -0.9852749218802875, -0.9911564074040172, 
    //             -0.02850205738153081, 0.013940673727427915, 
    //             -0.9999500526576979, -0.9966527637562681];
        
    // const T = [-0.9999463793020511, -0.9986096446507327, 
    //             -0.9974851226214857, -0.9708648936242832, 
    //             -0.023956946892962298, -0.03836295313171262, 
    //             -0.11419239856878101, -0.25786072900556534, 
    //             -0.9845026792688675, -0.9891553886020455, 
    //             -0.06179966175424766, 0.11315846688947992, 
    //             -0.9994846823521718, -0.9999953898082199];
        
    // const U = [-0.9188625813674972, -0.6642735907392853, 
    //             -0.703237813893392, -0.8335235920818882, 
    //             -0.813677882710175, -0.6470721258790766, 
    //             -0.12530846311104749, -0.15176559344404514, 
    //             -0.9905626244894994, -0.9929964472275686, 
    //             -0.011854670524190614, 0.03392700092310019, 
    //             -0.998403023144103, -0.9996515305311391]; 
    
    // const V = [0.9995592259475591, 0.9706740681179372, 
    //             -0.050294824102660465, 0.2542754312257853, 
    //             0.9823519993861635, 0.9785559521183181, 
    //             -0.07259042500881681, -0.11455940015161785, 
    //             -0.9966597883158069, -0.996561877086978, 
    //             -0.009102171434904724, 0.03185916774095873, 
    //             -0.998484184790881, -0.9973833086632367];

    // const W = [0.05290089353547023, 0.03518399945782054, 
    //             -0.7641576126462031, -0.6125772621737513, 
    //             0.564416353899539, 0.6560139562487403, 
    //             -0.1542566955855365, -0.14193380716390372, 
    //             -0.9918266989650629, -0.9982990401996024, 
    //             0.026930770015006454, 0.08398144644029114, 
    //             -0.9998118545463454, -0.9989584391243236];
        
    // const X = [-0.9999936924057637, -0.9993479563769059, 
    //             -0.8330635329570406, -0.823990887110873, 
    //             -0.6638197815191844, -0.6934046238789061, 
    //             -0.09315608864738384, -0.2087296731100368, 
    //             -0.9243878834126659, -0.9050810474174998, 
    //             -0.29368274649899406, -0.22695525318976123, 
    //             -0.9921764476107384, -0.9973575944535498];
        
    // const Y = [-0.995735268069248, -0.9993213103705991, 
    //             -0.9171325753240955, -0.8663567974285596, 
    //             -0.5728387477502129, -0.5864522257788901, 
    //             -0.08078447049176718, -0.22101789511017053, 
    //             -0.9951035688303818, -0.980843278875718, 
    //             -0.018125724963710007, 0.02680281533061194, 
    //             -0.9997351815207025, -0.9923040298591208];
        
    // const Z = [0.34593285978837596, 0.7767626004862809, 
    //             -0.6129697987680164, -0.7746816472915734, 
    //             0.8275644647368958, -0.8301858218113591, 
    //             -0.04743706593478033, -0.18259828337640507, 
    //             -0.9717673765849886, -0.975527763768798, 
    //             -0.1895776131330787, -0.038049946181149354, 
    //             -0.9997679877561612, -0.9991565296694975];    

    // const AllCorrectAnswer = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
    // const AllCorrectAnswerLetter =['A','B','C','D','E','F','G',
    //                             'H','I','J','K','L','M','N',
    //                             'O','P','Q','R','S','T','U',
    //                             'V','W','X','Y','Z']       
    
    const correctData = CorrectData.CorrectDataList;

    var Answer = 0;
    // (cosinScore[0]-A[0])**2 + (cosinScore[1]-A[1])**2 .......
    //初回のAの文字はとりあえず保存
    for(var j=0;j<cosinScore.length-1;j++){
        Answer += (cosinScore[j]-correctData[0].Data[j])**2;
    };

    Answer = Answer**0.5;

    var AnswerLetter = correctData[0].Alphabet;
    
    //A以降の文字は答えたポーズとAの文字のユークリッド距離より値がよければAnswerを更新
    for (var i=1;i<correctData.length-1;i++){
        var NowAnswer = 0;
        for(var j=0;j<cosinScore.length-1;j++){
            NowAnswer += (cosinScore[j]-correctData[i].Data[j])**2;
        };

        NowAnswer = NowAnswer**0.5;
        
        if(NowAnswer<Answer){
            Answer=NowAnswer;
            AnswerLetter=correctData[i].Alphabet
        };

    };
    console.log(Answer);
    console.log(AnswerLetter)
    return AnswerLetter;
          
};

export default CorrectJudge;