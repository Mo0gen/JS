const id1 = document.querySelector("#Nom");
const id2 = document.querySelector("#Prenom");
const DDN = document.querySelector("#DDN");
const errorElement = document.querySelector("#error");

function validation() {
    errorElement.innerHTML = "";

    const nom = id1.value;
    const prenom = id2.value;
    const dateNaissance = DDN.value;

    if (nom === "" || prenom === "" || dateNaissance === "") {
        errorElement.innerHTML = "Veuillez remplir tous les champs : nom, prénom et date de naissance.";
    }
}