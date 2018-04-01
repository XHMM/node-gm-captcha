import gm =require('gm');
import {getRanNum,getFromRange} from './utility'

function genNumPic(param:genParam, cb:genCallback){
    let w=param.w===undefined?100:param.w;//直接写出let w=param.w|100 ts会报错
    let h=param.h===undefined?50:param.h;
    let length=param.length===undefined?4:param.length;
    let fontSize = param.fontSize===undefined?16:param.fontSize;
    let numStr = getRanNum(length);
    let meta:metaData={type:'num',filename:param.filename,w,h,value:numStr,items:[],time:''};

    let isEven=length%2===0;
    let fragmentWith=w/length;
    let paddingX=((w/length)-fontSize)/2;
    let paddingY=(h-fontSize)/2;

    let offsetRangeX=paddingX*(3/4);//混淆参数
    let offsetRangeY=paddingY*(3/4);//混淆参数
    let rotateRange=35;//混淆参数
    let correctSide=20;//混淆参数：纠正收尾字符的旋转度数

    let pen=gm(w,h,'white').font('Arial').fontSize(fontSize);
    for(let i=0;i<length;i++){
      if(isEven) {
        let value=numStr[i];
        let rotate;
        //此处和下方的if判断目的：由于旋转是依据图像中心旋转的，因此越偏离中心的字符越有可能旋转到图像外部，所以对第一位和最后一位的旋转度数进行缩小
        if(i===0||i===length-1)
          rotate=getFromRange(-rotateRange+correctSide, rotateRange-correctSide);
        else
          rotate=getFromRange(-rotateRange, rotateRange);
        let offsetX=-(length / 2 - 0.5 - i) * fragmentWith + getFromRange(-offsetRangeX, offsetRangeX);
        let offsetY=getFromRange(-offsetRangeY, offsetRangeY);
        let temp={value:'',offsetX:0,offsetY:0,rotate:0};
        temp.value=value;
        temp.offsetX=offsetX;
        temp.offsetY=offsetY;
        temp.rotate=rotate;
        meta.items.push(temp);
        pen.draw(`rotate ${rotate} gravity Center text ${offsetX},${offsetY} '${value}'`);
      }
      else {
        let rotate;
        if(i===0||i===length-1)
          rotate=getFromRange(-rotateRange+correctSide, rotateRange-correctSide);
        else
          rotate=getFromRange(-rotateRange, rotateRange);
        let value=numStr[i];
        let offsetX=-((length + 1) / 2 - i - 1) * fragmentWith + getFromRange(-offsetRangeX, offsetRangeX);
        let offsetY=getFromRange(-offsetRangeY, offsetRangeY);
        let temp={value:'',offsetX:0,offsetY:0,rotate:0};
        temp.value=value;
        temp.offsetX=offsetX;
        temp.offsetY=offsetY;
        temp.rotate=rotate;
        meta.items.push(temp);
        pen.draw(`rotate ${rotate} gravity Center text ${offsetX},${offsetY} '${value}'`);
      }
    }
    pen.write(param.filename,(err)=>{
      meta.time=new Date().toString();
      cb(err,meta)
    })
}
export default genNumPic;