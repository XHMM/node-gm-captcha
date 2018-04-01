"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numPic_1 = require("./numPic");
var Captcha = /** @class */ (function () {
    function Captcha() {
    }
    Captcha.genPic = function (param, cb) {
        if (typeof param !== 'object')
            throw Error('The first param should be an object');
        switch (param.type) {
            case 'num':
                //todo：加噪点，随机曲线
                numPic_1.default(param, cb);
                break;
            case 'char':
                //enCharPic(param.filename,cb);
                break;
            case 'mix':
                //genMixPic(param.filename,cb);
                break;
            default:
                throw Error('The first param schema not match');
        }
    };
    return Captcha;
}());
module.exports = Captcha;
