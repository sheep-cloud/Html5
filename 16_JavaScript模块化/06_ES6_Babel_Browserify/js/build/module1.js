'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = foo;
// 暴露模块 分别暴露
function foo() {
    console.log('module1 foo()');
}

var bar = exports.bar = function bar() {
    console.log('module1 bar()');
};

var bar2 = exports.bar2 = function bar2() {
    console.log('module1 bar2()');
};

var DATA_ARR = exports.DATA_ARR = [1, 2, 3, 4, 5];