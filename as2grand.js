var score = process.argv.slice(2);
console.log(score);
var sumsc1 = 0;
for (var index in score) {
    var sumsc2 = +score[index];
    sumsc1 = sumsc1 + sumsc2;
}
var grade = sumsc1 / 3;
if (grade >= 80 && grade <= 100) {
    console.log("You got A");
}
else if (grade >= 70 && grade <= 79) {
    console.log("You got B");
}
else if (grade >= 60 && grade <= 69) {
    console.log("You got C");
}
else if (grade >= 50 && grade <= 59) {
    console.log("You got D");
}
else if (grade <= 49 && grade >= 1) {
    console.log("You got F");
}
else {
    console.log("Error");
}
