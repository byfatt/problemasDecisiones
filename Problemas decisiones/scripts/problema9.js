function calcular() {
    let policy = document.getElementById("policy").value.toUpperCase();
    let age = parseFloat(document.getElementById("age").value);

    let alcohol = document.getElementById("alcohol").value.toLowerCase();
    let glasses = document.getElementById("glasses").value.toLowerCase();
    let illness = document.getElementById("illness").value.toLowerCase();

    let baseCost;
    let total;

    if (policy === "A") {
        baseCost = 1200;
    } else {
        baseCost = 950;
    }

    total = baseCost;

    if (alcohol === "si") {
        total += baseCost * 0.10;
    }

    if (glasses === "si") {
        total += baseCost * 0.05;
    }

    if (illness === "si") {
        total += baseCost * 0.05;
    }

    if (age > 40) {
        total += baseCost * 0.20;
    } else {
        total += baseCost * 0.10;
    }

    document.getElementById("result").textContent = "Costo total: " + total + " pesos";
}