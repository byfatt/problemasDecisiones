function calcular() {
    let students = parseInt(document.getElementById("students").value);

    let ticket;
    let total;

    if (students > 100) {
        ticket = 20;
    } else if (students >= 50) {
        ticket = 35;
    } else if (students >= 20) {
        ticket = 40;
    } else {
        ticket = 70;
    }

    total = students * ticket;

    document.getElementById("result").textContent = "Cada alumno pagará: " + ticket + " pesos" + " Total del viaje: " + total + " pesos";
}