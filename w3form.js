var f1 = document.getElementById("form1");
var div1 = document.getElementById("showText");
var inputText = document.getElementById("input1");
var inputAge = document.getElementById("input2");
f1 === null || f1 === void 0 ? void 0 : f1.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("คลิก");
    div1.innerHTML = "Hallo ".concat(inputText.value, "<br>Your age is ").concat(inputAge.value);
});
