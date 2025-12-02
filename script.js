function elabora() {
    let a = document.getElementById("inNumber").value;
    if (isNaN(a)){
        alert("Valore Inserito Non Valido (solo numeri)")
        annulla();
    }
    else if (a < 0 ){
        alert("Valore Inserito Non Valido (numero negativo)")
        annulla();
    }
    else {
        alert("Valore Inserito: " + a);
    }
    }
   

function annulla() {
    document.getElementById("inNumber").value = "";
}

function scrivi(){
  let testo = document.getElementById("inputText").innerHTML;
  // da finire.. 

}
