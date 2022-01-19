'use strict';

module.exports = core;

function core() {
    // TODO
    console.log('something');
    console.log('version2.0.0');
    let a = function () {
        console.log('a function');
        console.log(new Date());
        return new Date();
    }
    return a;
}
