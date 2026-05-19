function calcular(){
    let age = parseFloat(document.getElementById("age").value);

    if (age>=18) {
        document.getElementById("result").textContent = "Puede votar";

    } else {
        document.getElementById("result").textContent = "No puede votar";

    }
    
}