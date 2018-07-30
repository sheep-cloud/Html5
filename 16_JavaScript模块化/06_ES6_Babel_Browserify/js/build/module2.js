'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 统一暴露
function fun() {
    console.log('module2 fun()');
}

function fun2() {
    console.log('module2 fun2()');
}

exports.fun = fun;
exports.fun2 = fun2;