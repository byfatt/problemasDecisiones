function calcular(){
    let years = parseFloat(document.getElementById("years").value);
    
   
    let bonus;

    if (years >= 1 && years <= 5) {
        bonus = years * 100;
    } else if (years > 5) {
        bonus = 1000;
    } else {
        bonus = 0;
    }

    document.getElementById("result").textContent = "Bono: " + bonus + " pesos";
    

}
