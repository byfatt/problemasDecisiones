function calcular() {
    let money = parseFloat(document.getElementById("money").value);
    const priceKm = 3;

    let mexico = 750 * 2 * priceKm;
    let pv = 800 * 2 * priceKm;
    let acapulco = 1200 * 2 * priceKm;
    let cancun = 1800 * 2 * priceKm;
    let destination;

    if (money >= cancun) {
        destination = "Cancun";
    } else if (money >= acapulco) {
        destination = "Acapulco";
    } else if (money >= pv) {
        destination = "Puerto Vallarta";
    } else if (money >= mexico) {
        destination = "Mexico";
    } else {
        destination = "Quedate en casa";
    }

    document.getElementById("result").textContent = "Destino: " + destination;
}