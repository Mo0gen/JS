const n1 = document.querySelector("#nombre1");
const n2 = document.querySelector("#nombre2");
const resultatElement = document.querySelector("#resultat");
const errorElement = document.querySelector("#error");


function additionner() {
    // On remet les éléments HTML resultat et error à vide
    // pour éviter de laisser les messages affichés
    // entre plusieurs utilisation
    resultatElement.innerHTML = "";
    errorElement.innerHTML = "";
    
    const nombre1 = Number(n1.value);
    const nombre2 = Number(n2.value);

    console.log(nombre2);
    if (!isNaN(nombre1) && !isNaN(nombre2)) {
        const resultat = nombre1 + nombre2;
        resultatElement.innerHTML = `Le résultat de l'addition est : ${resultat}`;
    } else {
        errorElement.innerHTML = "Vous devez saisir un nombre";
    }

}