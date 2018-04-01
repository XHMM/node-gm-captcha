"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gm = require("gm");
var utility_1 = require("./utility");
function genNumPic(param, cb) {
    var w = param.w === undefined ? 100 : param.w; //直接写出let w=param.w|100 ts会报错
    var h = param.h === undefined ? 50 : param.h;
    var length = param.length === undefined ? 4 : param.length;
    var fontSize = param.fontSize === undefined ? 16 : param.fontSize;
    var numStr = utility_1.getRanNum(length);
    var meta = { type: 'num', filename: param.filename, w: w, h: h, value: numStr, items: [], time: '' };
    var isEven = length % 2 === 0;
    var fragmentWith = w / length;
    var paddingX = ((w / length) - fontSize) / 2;
    var paddingY = (h - fontSize) / 2;
    var offsetRangeX = paddingX * (3 / 4); //混淆参数
    var offsetRangeY = paddingY * (3 / 4); //混淆参数
    var rotateRange = 35; //混淆参数
    var correctSide = 20; //混淆参数：纠正收尾字符的旋转度数
    var pen = gm(w, h, 'white').font('Arial').fontSize(fontSize);
    for (var i = 0; i < length; i++) {
        if (isEven) {
            var value = numStr[i];
            var rotate = void 0;
            //此处和下方的if判断目的：由于旋转是依据图像中心旋转的，因此越偏离中心的字符越有可能旋转到图像外部，所以对第一位和最后一位的旋转度数进行缩小
            if (i === 0 || i === length - 1)
                rotate = utility_1.getFromRange(-rotateRange + correctSide, rotateRange - correctSide);
            else
                rotate = utility_1.getFromRange(-rotateRange, rotateRange);
            var offsetX = -(length / 2 - 0.5 - i) * fragmentWith + utility_1.getFromRange(-offsetRangeX, offsetRangeX);
            var offsetY = utility_1.getFromRange(-offsetRangeY, offsetRangeY);
            var temp = { value: '', offsetX: 0, offsetY: 0, rotate: 0 };
            temp.value = value;
            temp.offsetX = offsetX;
            temp.offsetY = offsetY;
            temp.rotate = rotate;
            meta.items.push(temp);
            pen.draw("rotate " + rotate + " gravity Center text " + offsetX + "," + offsetY + " '" + value + "'");
        }
        else {
            var rotate = void 0;
            if (i === 0 || i === length - 1)
                rotate = utility_1.getFromRange(-rotateRange + correctSide, rotateRange - correctSide);
            else
                rotate = utility_1.getFromRange(-rotateRange, rotateRange);
            var value = numStr[i];
            var offsetX = -((length + 1) / 2 - i - 1) * fragmentWith + utility_1.getFromRange(-offsetRangeX, offsetRangeX);
            var offsetY = utility_1.getFromRange(-offsetRangeY, offsetRangeY);
            var temp = { value: '', offsetX: 0, offsetY: 0, rotate: 0 };
            temp.value = value;
            temp.offsetX = offsetX;
            temp.offsetY = offsetY;
            temp.rotate = rotate;
            meta.items.push(temp);
            pen.draw("rotate " + rotate + " gravity Center text " + offsetX + "," + offsetY + " '" + value + "'");
        }
    }
    pen.write(param.filename, function (err) {
        meta.time = new Date().toString();
        cb(err, meta);
    });
}
exports.default = genNumPic;
