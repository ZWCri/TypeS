function PrintTitle(){
    console.log("Hello World")
}
PrintTitle()
function getText(txt:string){
    console.log(`show ${txt}`)
}
getText("hallo")

function sumNumber(n1:number,n2:number){
    return n1+n2
}
let res = sumNumber(20,10)
console.log(`ผลรวม : ${res}`)

function BMI(w1:number,t1:number){
    return w1/(t1*t1)
}
let bmi1 = BMI(50,1.82)
console.log(`${bmi1}`)

let sumNumber2 = (nn1:number,nn2:number) => nn1+nn2
let res2 = sumNumber2(50,40)
console.log(`sum = ${res2}`)

class resTangle{
    w:number
    h:number
    calArea():number{
        return this.w*this.h
    }
}
let resTan:resTangle=new resTangle()
resTan.w = 10
resTan.h = 20
console.log(`tangle is = ${resTan.calArea()} `)