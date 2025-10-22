let entreprise = {
    "nom": "Google",
    "siegeSocial": "Googleplex, Mountain View, California, United States",
    "fondateurs": [
        {
            "nomPrenom": "Larry Page",
            "dateNaissance": "18/01/01",
            "lieuNaissance": "East Lansing"
        },
        {
            "nomPrenom": "Sergey Brin",
            "dateNaissance": "21/08/1973",
            "lieuNaissance": "Moscou"
        }],
    "chiffreAffaire": [
        { "année": 2008, "montant": 16.49 },
        { "année": 2012, "montant": 37.97 },
        { "année": 2016, "montant": 89.46 },
        { "année": 2018, "montant": 136.2 }]
}

console.log("Informations sur " + entreprise.nom);
console.log("siegeSocial : " + entreprise.siegeSocial);
console.log("fondateurs");

for (let i = 0; i < entreprise.fondateurs.length; i++) {
let fondateur = entreprise.fondateurs[i];
console.log(fondateur.nom + ", né le " + fondateur.dateNaissance + " à " + fondateur.lieuNaissance);
console.log("Chiffres d'affaires (en milliards de $)");
}

for (let i = 0; i < entreprise.chiffreAffaire.length; i++) {
    const ca = entreprise.chiffreAffaire[i];
    console.log(ca.année + " : " + ca.montant + " milliard $")
    }