console.log("Programma Iniziato");
let d = new Date();
console.log("Data e Ora di Esecuzione: " + d.toLocaleString());
function elabora() {
    let a = document.getElementById("inNumber").value;
    console.log(a);
    let arrayColori = a.split(",");
    if (arrayColori.some(c => c.includes("."))) {
            alert("Valore Inserito Non Valido (usa solo le virgole) !!")
            annulla();
            return;
        }
    for (let i = 0; i < arrayColori.length; i++) {
        if (isNaN(arrayColori[i])) {    
            document.getElementById("error").style.color = "red";
            document.getElementById("error").innerHTML = ("Solo numeri!!");
            annulla();
            return;
        }
        else if (arrayColori[i] < 0) {
            document.getElementById("error").innerHTML = ("Valore Inserito Non Valido (numero negativo) !!")
            annulla();
            return;
        }
        else if (arrayColori[i] > 255) {
            document.getElementById("error").innerHTML = ("Valore Inserito Non Valido (numero maggiore di 255) !!")
            annulla();
            return;
        } 
        else if(arrayColori.length !== 3) {
            document.getElementById("error").innerHTML = ("Valore Inserito Non Valido (inserisci esattamente 3 numeri) !!")
            annulla();
            return;
        }
        else {
            document.getElementById("outText").innerHTML = arrayColori;
            document.getElementById("error").innerHTML = "Nessun errore rilevato";
            console.log("l'utente ha inserito un valore valido");
        }
    }
}


function annulla() {
    document.getElementById("inNumber").value = "";
}

function scrivi() {
    let testo = document.getElementById("inputText").innerHTML;


}
