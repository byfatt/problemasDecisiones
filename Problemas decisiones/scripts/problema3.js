function calcular(){
    let budget = parseFloat(document.getElementById("budget").value);
    let gift;

    if (budget <= 10) {
        gift = "Tarjeta";
    } else if (budget <= 100) {
        gift = "Chocolates";
    } else if (budget <= 250) {
        gift = "Flores";
    } else {
        gift = "Anillo";
    }

    document.getElementById("result").textContent = "Se recomienda regalar: " + gift;
    

}
