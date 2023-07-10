const f1 = document.getElementById("form1")
const div1 = document.getElementById("showText") as HTMLInputElement
const inputText = document.getElementById("input1") as HTMLInputElement
const inputAge = document.getElementById("input2") as HTMLInputElement
f1?.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("คลิก")
    div1.innerHTML = `Hallo ${inputText.value}<br>Your age is ${inputAge.value}`
})