"use strict";

module.exports = function (col, prop, aggregator) {

    if (!prop) {
        return col;
    }

    var map = new Map(),
        _getKey = function () {
        var _this = this;

        return aggregator ? function (value) {
            return String(aggregator.call(_this, value));
        } : function (value) {
            return String(value);
        };
    }();

    Array.prototype.forEach.call(col, function (item) {
        var key = _getKey(item[prop]);

        var _map$get = map.get(key);

        var mapItem = _map$get === undefined ? [] : _map$get;

        mapItem.push(item);
        map.set(key, mapItem);
    });

    return Array.from(map.values());
};

//# sourceMappingURL=index-compiled.js.map