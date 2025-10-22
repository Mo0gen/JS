let nombre1 = document.querySelector("#nombre1");
let nombre2 = document.querySelector("#nombre2");
let result = document.querySelector("#resultat");
console.log(nombre1)

function additionner() {
    const n1 = Number(nombre1.value);
    const n2 = Number(nombre2.value);

    console.log(nombre1 + nombre2);

    console.log(nombre2);
    if (!isNaN(nombre1) && !isNaN(nombre2)) {
        const resultat = nombre1 + nombre2;
        result.innerHTML = "Le résultat de l'addition est" + resultat
    } else {
        result.innerHTML = "Vous devez saisir un nombre";
    }
}