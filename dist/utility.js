"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRanNum(length) {
    var res = '';
    for (var i = 0; i < length; i++) {
        res += Math.floor(Math.random() * 10);
    }
    return res;
}
exports.getRanNum = getRanNum;
function getFromRange(from, to) {
    return Math.floor(Math.random() * (to - from)) + from;
}
exports.getFromRange = getFromRange;
