var f01 = document.getElementById("form01");
var div01 = document.getElementById("showGrand");
var inputName = document.getElementById("input01");
var inputScore1 = document.getElementById("input02");
var inputScore2 = document.getElementById("input03");
var inputScore3 = document.getElementById("input04");
// let score01 : number = 0
// let score02 : number = 0
// let score03 : number = 0
f01 === null || f01 === void 0 ? void 0 : f01.addEventListener("submit", function (event) {
    event.preventDefault();
    var score01 = Number(inputScore1.value);
    var score02 = Number(inputScore2.value);
    var score03 = Number(inputScore3.value);
    var score0 = score01 + score02 + score03;
    var yourGrand = "";
    if (score0 >= 80 && score0 <= 100) {
        yourGrand = "You got A";
    }
    else if (score0 >= 70) {
        yourGrand = "You got B";
    }
    else if (score0 >= 60) {
        yourGrand = "You got C";
    }
    else if (score0 >= 50) {
        yourGrand = "You got D";
    }
    else if (score0 <= 49 && score0 >= 0) {
        yourGrand = "You got F";
    }
    else {
        yourGrand = "Error";
    }
    console.log("คลิก");
    div01.innerHTML = "Hallo ".concat(inputName.value, "<br>Your 1st is ").concat(inputScore1.value, "\n    <br>Your 2nd is ").concat(inputScore2.value, "<br>Your 3rt is ").concat(inputScore3.value, "\n    <br>Your Sum Score is ").concat(score01, "<br>Your Grand is ").concat(yourGrand);
});
