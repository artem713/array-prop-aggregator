'use strict';

var _indexCompiled = require('./index-compiled');

var _indexCompiled2 = _interopRequireDefault(_indexCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = require('assert');


describe('array property aggregator', function () {
    var sourceArray = void 0;
    var givenProp = void 0;
    beforeEach(function () {
        sourceArray = [{ k: 1, v: 'a' }, { k: 1, v: 'b' }, { k: 2, v: 'c' }, { k: 3, v: 'd' }];
        givenProp = 'k';
    });
    it('should return given array if no property was passed', function () {
        givenProp = undefined;

        var res = (0, _indexCompiled2.default)(sourceArray, givenProp);

        assert.deepEqual(res, sourceArray);
    });
    it('should return empty array if given array was empty', function () {
        sourceArray = [];

        var res = (0, _indexCompiled2.default)(sourceArray, givenProp);

        assert.deepEqual(res, []);
    });
    it('should aggregate array by given property', function () {
        var res = (0, _indexCompiled2.default)(sourceArray, givenProp);

        assert.deepEqual(res, [[{ k: 1, v: 'a' }, { k: 1, v: 'b' }], [{ k: 2, v: 'c' }], [{ k: 3, v: 'd' }]]);
    });
    it('should aggregate array by given property with aggregator func', function () {
        sourceArray = [{ k: 1.1, v: 'a' }, { k: 1.9, v: 'b' }, { k: 2, v: 'c' }, { k: 2.2, v: 'c' }, { k: 3, v: 'd' }];
        var aggr = function aggr(x) {
            return Math.floor(x);
        };

        var res = (0, _indexCompiled2.default)(sourceArray, givenProp, aggr);

        assert.deepEqual(res, [[{ k: 1.1, v: 'a' }, { k: 1.9, v: 'b' }], [{ k: 2, v: 'c' }, { k: 2.2, v: 'c' }], [{ k: 3, v: 'd' }]]);
    });
});