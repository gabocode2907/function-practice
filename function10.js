function d(a,b) {
    var c = a + b;
    console.log('c es', c);
    return c;
}
var x = d(2,3) + d(3,d(2,1)) + d(d(2,1),d(2,3));
console.log('x es', x);
//console result: c es 5, c es 3, c es 6, c es 3, c es 5, c es 8, x es 19