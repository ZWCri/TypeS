let number: number = 10
console.log(number)
{
    let myname: string = "John"
    console.log(`My name is ${myname}`)
}
let myname: string = "David"
console.log(`My name is ${myname}`)

//  Expression
// let w: number = 20
// let h: number = 30
// console.log(`W x H = ${w*h}`)

let colors: string[] = ["Red","Green","Blue"]
console.log(colors[1])

let student = {
    stdid: "631540003005-8",
    stdName: "Jetdamrong Chaiyarod",
    major: "Computer Engineering",
    grade: 2.80
}
console.log(`StudentID ${student.stdid}`)

let check: boolean = true;
let score1: number = 0;
let msg: string = "Error";
let cars: string[] = ["Toyota","Honda","BMW"]
let x: number;

console.log(x)

let showMsg: Function = function (msg) {
    console.log(`show ms ${msg}`)
}
showMsg("TypeScript")

const faculty = "Engineering"
// faculty = "Accounting"
// {
// let myN : string = process.argv[2]
// console.log(`My name is ${myN}`)
// }
{
    let salary = process.argv.slice(2)
    console.log(salary)
}
let sc : string = "20";
let sc2 : number = +sc;

let n1: number = 10
let n2: number = 15
let message: string;
if (n1 > n2){
    message="n1 > n2"
}else if (n2 > n1){
    message="n2 > n1"
}else {
    message="n1 = n2"
}
console.log(message)

for (let i:number=0;i<=10;i++){
    console.log(i)
}
for (let index in cars){
    console.log(cars[index])
}