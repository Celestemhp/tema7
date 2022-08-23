document.querySelector("button").addEventListener("click", tjekTal);
let forsoeg = 0;
const ranNum = Math.floor(Math.random() * 11);
console.log(ranNum);

function tjekTal() {
    forsoeg++;
    const brugerTal = document.querySelector("#tal").value;
    if ( ranNum > brugerTal) {
        alert("Øv " + brugerTal + " var alt for lavt. Prøv igen)");
            console.log(ranNum, brugerTal);
    }
    else if (ranNum < brugerTal) {
        alert ("øv " + brugerTal + " var for højt. prøv igen");
            console.log(ranNum, brugerTal);
    }
    else {
        alert(brugerTal + " er rigtigt" + " du brugte " + forsoeg + " forsøg. prøv igen");
            console.log ("du gættede rigtigt");
            location.reload();
    }
}


// alerts bruger vi helst ikke. hellere console.log.
// men vi bruger dem 