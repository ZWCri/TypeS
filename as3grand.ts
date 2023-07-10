const f01 = document.getElementById("form01")
const div01 = document.getElementById("showGrand") as HTMLInputElement
const inputName = document.getElementById("input01") as HTMLInputElement
const inputScore1 = document.getElementById("input02") as HTMLInputElement
const inputScore2 = document.getElementById("input03") as HTMLInputElement
const inputScore3 = document.getElementById("input04") as HTMLInputElement
// let score01 : number = 0
// let score02 : number = 0
// let score03 : number = 0
f01?.addEventListener("submit",(event)=>{
    event.preventDefault();
    const score01 = Number(inputScore1.value)
    const score02 = Number(inputScore2.value)
    const score03 = Number(inputScore3.value)
    let score0 : number = score01+score02+score03;
    let yourGrand : string = ""
if(score0>=80&&score0<=100){
    yourGrand="You got A"
}
else if(score0>=70){
    yourGrand="You got B"
}
else if(score0>=60){
    yourGrand="You got C"
}
else if(score0>=50){
    yourGrand="You got D"
}
else if(score0<=49&&score0>=0){
    yourGrand="You got F"
}
else{
    yourGrand="Error"
}
    console.log("คลิก")
    div01.innerHTML = `Hallo ${inputName.value}<br>Your 1st is ${inputScore1.value}
    <br>Your 2nd is ${inputScore2.value}<br>Your 3rt is ${inputScore3.value}
    <br>Your Sum Score is ${score01}<br>Your Grand is ${yourGrand}`
})