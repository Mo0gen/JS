function initialiserDonnees() {
  let data = {
    "polluant": "CO2",
    "unite": "milliards de tonnes",
    "annee": 2017,
    "pays": [
      {"nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "CN"},
      {"nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "US"},
      {"nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "IN"},
      {"nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "RU"},
      {"nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "JP"},
      {"nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "DE"},
      {"nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "KR"},
      {"nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "IR"},
      {"nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "CA"}
    ]
  };
// Recuperation des titres et modification de celui ci 
  let titre1 = document.querySelector("h1");
  titre1.innerHTML = `Polluant : ${data.polluant} en ${data.unite}`;

  let titre2 = document.querySelector("h2");
  titre2.innerHTML = `Année : ${data.annee}`;

  // Recuperation de l'id # et modification de son contenu
  let paysListe = document.querySelector("#listePays");
  let contenu = "";
  for (let i = 0; i < data.pays.length; i++) {
    let x = data.pays[i];
    contenu += `${x.nom} : ${x.valeur} ${data.unite} (${x.pourcentage}%) 
      <img src="https://flagsapi.com/${x.code}/flat/32.png"><br>`;
  }
  paysListe.innerHTML = contenu;
}