// récupéreration les données JSON
fetch("https://digicode.cleverapps.io/json/pays/pollution")
  .then(response => response.json())
  .then(data => {

    // Recuperation des titres et modification de celui-ci 
    let titre1 = document.querySelector("h1");
    titre1.innerHTML = `Polluant : ${data.polluant} en ${data.unite}`;

    let titre2 = document.querySelector("h2");
    titre2.innerHTML = `Année : ${data.annee}`;

    // Recuperation de l'id #listePays et modification de son contenu
    let paysListe = document.querySelector("#listePays");
    let contenu = "";
    for (let i = 0; i < data.pays.length; i++) {
      let x = data.pays[i];
      contenu += `${x.nom} : ${x.valeur} ${data.unite} (${x.pourcentage}%) 
        <img src="https://flagsapi.com/${x.code}/flat/32.png"><br>`;
    }
    paysListe.innerHTML = contenu;
  })
  .catch(error => {
    document.getElementById("resultat").textContent = "Erreur : " + error;
  });