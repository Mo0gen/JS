const n1 = document.querySelector("#nombre1");
const n2 = document.querySelector("#nombre2");
const resultatElement = document.querySelector("#resultat");
const errorElement = document.querySelector("#error");

function operation() {
    resultatElement.innerHTML = "";
    errorElement.innerHTML = "";

    const nombre1 = Number(n1.value);
    const nombre2 = Number(n2.value);
    const operateur = document.querySelector("#operateur").value;

    console.log(nombre2);
    if (!isNaN(nombre1) && !isNaN(nombre2) && operateur === "+") {
        let resultat = nombre1 + nombre2;
        resultatElement.innerHTML = `Le résultat de l'addition est : ${resultat}`;
    } else if (operateur === "/") {
        resultat = nombre1 / nombre2;
        resultatElement.innerHTML = `Le résultat de la division est : ${resultat}`;
    } else if (operateur === "-") {
        resultat = nombre1 - nombre2;
        resultatElement.innerHTML = `Le résultat de la soustraction est : ${resultat}`;
    } else if (operateur === "*") {
        resultat = nombre1 * nombre2;
        resultatElement.innerHTML = `Le résultat de la multiplication est : ${resultat}`;
    } else {
        errorElement.innerHTML = "Vous devez saisir un nombre";
    }
}