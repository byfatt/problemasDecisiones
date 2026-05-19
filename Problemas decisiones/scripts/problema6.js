function calcular(){
    let item = parseFloat(document.getElementById("item").value);

    let discount;
    let total;

    if (item >= 200) {
        discount = item * 0.15;
    } else if (item > 100) {
        discount = item * 0.12;
    } else {
          discount = item * 0.10;
    }

    total = item - discount;

    document.getElementById("result").textContent = "Descuento: " + discount.toFixed(2) + " pesos." + " Total a pagar: " + total.toFixed(2) +  " pesos";
    

}
