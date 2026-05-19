function calcular(){
    let hours = parseFloat(document.getElementById("hours").value);
    let pay;

    if (hours <= 2) {
        pay = hours * 5;
    } else if (hours <= 5) {
        pay = (2 * 5) + ((hours - 2) * 4);
    } else if (hours <= 10) {
        pay= (2 * 5) + (3 * 4) + ((hours - 5) * 3);
    } else {
        pay= (2 * 5) + (3 * 4) + (5 * 3) + ((hours - 10) * 2);
    }

    document.getElementById("result").textContent = "Total a pagar: " + pay + " pesos";
    

}
