function calcular(){
    let years = parseFloat(document.getElementById("years").value);
    let salary = parseFloat(document.getElementById("salary").value);


    let bonusYears = 0;
    let bonusSalary = 0;
    let bonus;

    if (years > 2 && years < 5)  {
        bonusYears = salary * 0.20;
    } else if (years >= 5) {
        bonusYears = salary * 0.30;

    }

    if (salary < 1000) {
        bonusSalary = salary * 0.25;
    } else if (salary <= 3500) {
        bonusSalary = salary * 0.15;
    } else {
        bonusSalary = salary * 0.10;
    }

    if (bonusYears > bonusSalary) {
        bonus = bonusYears;
    } else {
        bonus = bonusSalary;
    }

    document.getElementById("result").textContent = "Bono: " + bonus + " pesos";
    

}
