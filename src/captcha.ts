import genNumPic from './numPic'
import genCharPic from './charPic'
import genMixPic from './mixPic'

class Captcha {
  constructor() {
  }

  static genPic(param: genParam, cb: genCallback): void {
    if (typeof param !== 'object') throw Error('The first param should be an object');
    switch (param.type) {
      case 'num':
        //todo：加噪点，随机曲线
        genNumPic(param, cb);
        break;
      case 'char':
        //enCharPic(param.filename,cb);
        break;
      case 'mix':
        //genMixPic(param.filename,cb);
        break;
      default:
        throw Error('The first param schema not match')
    }
  }
}

module.exports = Captcha;