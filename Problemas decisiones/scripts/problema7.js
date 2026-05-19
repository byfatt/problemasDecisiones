function calcular(){
    let age = parseFloat(document.getElementById("age").value);
    let average = parseFloat(document.getElementById("average").value);

    let scholarship;

    if (age > 18) {
        
        if (average >= 9){
            scholarship = "Beca de 2000 pesos";
        } else if (average >=7.5) {
            scholarship = "Beca de 1000 pesos";
        } else if (average >= 6) {
            scholarship = "Beca de 500 pesos";
        } else {
            scholarship = "Te invitamos a mejorar tu desempeño para obtener una beca";
        }

    } else  {

        if (average >= 9) {
            scholarship = "Beca de 3000 pesos";  
        } else if (average >= 8) {
            scholarship = "Beca de 2000 pesos";
        } else if (average >= 6) {
            scholarship = "Beca de 100 pesos";
        } else {
            scholarship = "Te invitamos a mejorar tu desempeño para obtener una beca";
        }
    }

    document.getElementById("result").textContent = "Resultado: " + scholarship;
    

}
