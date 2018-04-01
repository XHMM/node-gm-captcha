"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gm = require("gm");
function genCharPic(filename, cb) {
    gm(100, 100, 'white').write(filename, function (err) {
        cb(err);
    });
}
exports.default = genCharPic;
