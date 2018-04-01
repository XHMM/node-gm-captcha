"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gm = require("gm");
function genMixPic(filename, cb) {
    gm(100, 100, 'white').write(filename, function (err) {
        cb(err);
    });
}
exports.default = genMixPic;
