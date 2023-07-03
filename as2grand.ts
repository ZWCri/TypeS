let score = process.argv.slice(2);
console.log(score);
let sumsc1 : number = 0;
for(let index in score){
    let sumsc2 : number = +score[index];
    sumsc1 = sumsc1 + sumsc2
}
let grade : number = sumsc1;
if(grade>=80&&grade<=100){
    console.log("You got A")
}
else if(grade>=70&&grade<=79){
    console.log("You got B")
}
else if(grade>=60&&grade<=69){
    console.log("You got C")
}
else if(grade>=50&&grade<=59){
    console.log("You got D")
}
else if(grade<=49&&grade>=1){
    console.log("You got F")
}
else{
    console.log("Error")
}
