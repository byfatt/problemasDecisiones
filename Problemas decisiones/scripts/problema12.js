function calcular(){
    let hours = parseFloat(document.getElementById("hours").value);
    let rate = parseFloat(document.getElementById("rate").value);

    let salary = 0;

    if (hours <= 40) {
        salary = hours * rate;

    } else if (hours <= 45) {
        salary = (40 * rate) + ((hours - 40) * rate * 2);

    } else if (hours <= 50) {
        salary = (40 * rate) + (5 * rate * 2) + ((hours - 45) * rate * 3);

    } else {
        salary = "No permitido trabajar más de 50 horas";
    }
        
       

    document.getElementById("result").textContent = "Sueldo semanal: " + salary;
    

}
