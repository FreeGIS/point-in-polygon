const point_in_polygon = require('../dist/point-in-polygon-cjs');
const pgFeature = require('./test.json');


//区间内随机生成1万个点
let pts = [];
for (let i = 0; i < 10000; i++) {
    const lon = 117.5 + (120.5 - 117.5) * Math.random();
    const lat = 31.5 + (33.5 - 31.5) * Math.random();
    pts.push({
        'type': 'Feature',
        'properties': {
            'id': i
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [ lon, lat ]
        }
    })
}

//isPointInPolygonWithIndexs, isPointInPolygonWithOutIndexs
console.time('基于索引查询');
const result1 = point_in_polygon.isPointInPolygonWithIndexs(pts, pgFeature);
console.timeEnd('基于索引查询');
console.log('选择的要素数量:'+result1.length);


console.time('不基于索引查询');
const result2 = point_in_polygon.isPointInPolygonWithOutIndexs(pts, pgFeature);
console.timeEnd('不基于索引查询');
console.log('选择的要素数量:'+result2.length);