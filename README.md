# array-prop-aggregator
Method that returns array composed of arrays, aggregated by a given key and optional transform function.

***Agruments***
* Source array (Array)
* Array's item property name (String)
* Aggregator function (optional Function)

It can be useful when we have to transform server response data in order to display it based on some key.

Example 1
```javascript
import arrayProp from 'array-prop-aggregator';
let sourceArray = [
            {k: 1, v: 'a'},
            {k: 1, v: 'b'},
            {k: 2, v: 'c'},
            {k: 3, v: 'd'}
        ];
let res = arrayProp(sourceArray, 'k');
/*
[
    [{k: 1, v: 'a'}, {k: 1, v: 'b'}],
    [{k: 2, v: 'c'}],
    [{k: 3, v: 'd'}]
]
*/
```
Example 2
```javascript
import arrayProp from 'array-prop-aggregator';
let weekNumber = require('current-week-number');
let sourceArray = [
            {k: "2016-04-01T21:38:29.625Z", v: 'a'},
            {k: "2016-04-02T21:40:02.459Z", v: 'b'},
            {k: "2016-04-04T20:43:16.821Z", v: 'c'},
            {k: "2016-04-12T21:20:32.293Z", v: 'd'}
        ];
let res = arrayProp(sourceArray, 'k', weekNumber);
/* elements, arrgegated by week number
[
    [{k: "2016-04-01T21:38:29.625Z", v: 'a'}, {k: "2016-04-02T21:40:02.459Z", v: 'b'}],
    [{k: "2016-04-04T20:43:16.821Z", v: 'c'}],
    [{k: "2016-04-12T21:20:32.293Z", v: 'd'}]
]
*/
```
