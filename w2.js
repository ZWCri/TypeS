var number = 10;
console.log(number);
{
    var myname_1 = "John";
    console.log("My name is ".concat(myname_1));
}
var myname = "David";
console.log("My name is ".concat(myname));
//  Expression
// let w: number = 20
// let h: number = 30
// console.log(`W x H = ${w*h}`)
var colors = ["Red", "Green", "Blue"];
console.log(colors[1]);
var student = {
    stdid: "631540003005-8",
    stdName: "Jetdamrong Chaiyarod",
    major: "Computer Engineering",
    grade: 2.80
};
console.log("StudentID ".concat(student.stdid));
var check = true;
var score1 = 0;
var msg = "Error";
var cars = ["Toyota", "Honda", "BMW"];
var x;
console.log(x);
var showMsg = function (msg) {
    console.log("show ms ".concat(msg));
};
showMsg("TypeScript");
var faculty = "Engineering";
// faculty = "Accounting"
// {
// let myN : string = process.argv[2]
// console.log(`My name is ${myN}`)
// }
{
    var salary = process.argv.slice(2);
    console.log(salary);
}
var sc = "20";
var sc2 = +sc;
var n1 = 10;
var n2 = 15;
var message;
if (n1 > n2) {
    message = "n1 > n2";
}
else if (n2 > n1) {
    message = "n2 > n1";
}
else {
    message = "n1 = n2";
}
console.log(message);
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
for (var index in cars) {
    console.log(cars[index]);
}
