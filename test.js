const assert = require('assert');
Object.freeze(assert);

const sumOfOther = require('./src/sumOfOther'),
      make = require('./src/make'),
      recursion = require('./src/recursion');

describe('rsschool_codejam_3 tests', function () {

    describe('sumOfOther() – should return array, every element is a sum of other elements', function () {

        it('[2, 3, 4, 1]', function () {
            assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
        });

        it('[ 1, 2, 3, 4, 1, 2, 3, 4]', function () {
            assert.deepEqual(sumOfOther([ 1, 2, 3, 4, 1, 2, 3, 4]), [ 18, 16, 14, 12, 18, 16, 14, 12 ]);
        });

    });

    describe('make() – must return the result of the function to the rest of the arguments', function () {

        let sum = function(a, b) {
            return a + b;
        };

        it('make(97)(40)(47)(sum)', function () {
            assert.deepEqual(make(97)(40)(47)(sum), 184);
        });

        let multi = function(a, b) {
            return a * b;
        };

        it('make(1)(2)(3)(4)(5)(multi)', function () {
            assert.deepEqual(make(1)(2)(3)(4)(5)(multi), 120);
        });
    });

    describe('recursion() – should return array that contains values of tree nodes', function () {

        it('tree #1', function () {
            let tree ={"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
            let answer = [[100], [90, 120], [70,99,110,130]];
            assert.deepEqual(recursion(tree), answer);
        });

        it('tree #2', function () {
            let tree = { "value": 20, "left": { "value": 15, "left": { "value": 10 }, "right": { "value": 15 } }, "right": { "value": 25, "left": { "value": 22 }, "right": { "value": 30 } } };
            let answer = [[20], [15, 25], [10, 15, 22, 30]];
            assert.deepEqual(recursion(tree), answer);
        });

    });


});