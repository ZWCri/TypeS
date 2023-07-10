function PrintTitle() {
    console.log("Hello World");
}
PrintTitle();
function getText(txt) {
    console.log("show ".concat(txt));
}
getText("hallo");
function sumNumber(n1, n2) {
    return n1 + n2;
}
var res = sumNumber(20, 10);
console.log("\u0E1C\u0E25\u0E23\u0E27\u0E21 : ".concat(res));
function BMI(w1, t1) {
    return w1 / (t1 * t1);
}
var bmi1 = BMI(50, 1.82);
console.log("".concat(bmi1));
var sumNumber2 = function (nn1, nn2) { return nn1 + nn2; };
var res2 = sumNumber2(50, 40);
console.log("sum = ".concat(res2));
var resTangle = /** @class */ (function () {
    function resTangle() {
    }
    resTangle.prototype.calArea = function () {
        return this.w * this.h;
    };
    return resTangle;
}());
var resTan = new resTangle();
resTan.w = 10;
resTan.h = 20;
console.log("tangle is = ".concat(resTan.calArea(), " "));
