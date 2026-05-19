function calcular(){
    let name1 = document.getElementById("name1").value;
    let age1 = parseFloat(document.getElementById("age1").value);

    let name2 = document.getElementById("name2").value;
    let age2 = parseFloat(document.getElementById("age2").value);

    let name3 = document.getElementById("name3").value;
    let age3 = parseFloat(document.getElementById("age3").value);
    
    let name = name1;
    let age = age1;

    if (age2 < age) {
        name= name2;
        age= age2;
    } 
    
    if (age3 < age) {
        name= name3;
        age= age3;
    }

    document.getElementById("result").textContent = "Menor de edad: " + name +  " de " + age + " años";
    
}
