function fonctionMoyenne(tableau) {
  if (Array !== isArray(tableau)) {
    throw "Le paramètre doit être un tableau";
  }

  for (let i = 0; i < tableau.length; i++) {
    if (typeof tableau[i] !== "number") {
      throw "Tous les éléments du tableau doivent être des nombres";
    }
  }

  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme / tableau.length;
}

try {
  console.log("Moyenne :", fonctionMoyenne([10, 20, 30]));
} catch (erreur) {
  console.log(erreur);
}

try {
  console.log("Moyenne :", fonctionMoyenne([10, "20", 30]));
} catch (erreur) {
  console.log(erreur);
}

try {
  console.log("Moyenne :", fonctionMoyenne([]));
} catch (erreur) {
  console.log(erreur);
}