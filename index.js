function calc() {
    let a = document.getElementById("billAmount").value;
    let b = document.getElementById("percentageTip").value;
    console.log(a);
    if (a === "" || b === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
    } else {
        a = parseInt(a);


        b = parseInt(b);
        let c = a * b / 100;
        console.log(c);
        let d = document.getElementById("tipAmount");
        d.value = c;
        document.getElementById("totalAmount").value = a + c;
        document.getElementById("errorMessage").textContent = "";
    }
}
