function calcular(){
    let workHours = parseFloat(document.getElementById("workHours").value);
    let hourlyPay = parseFloat(document.getElementById("hourlyPay").value);
    let sueldo;

    if (workHours <= 40) {
        sueldo = workHours * hourlyPay;
    } else {
        sueldo = (40 * hourlyPay) + ((workHours - 40) * hourlyPay * 2);
    }

    document.getElementById("result").textContent = "El sueldo semanal es: " + sueldo + " pesos";
    

}
