let clr = () => document.getElementById("result").value = "";
let display = (val) => document.getElementById("result").value+=val;
let equate = () => {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}