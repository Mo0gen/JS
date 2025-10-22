function fonctionControleTableau(tableau) {
    if (!Array.isArray(tableau)) {
        return console.log("Le paramètre doit être un tableau");
    }


    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== "number") {
            return console.log("l'élément n'est pas un nombre");
        }
    }

    return console.log("Tous les éléments du tableau sont des nombres :", tableau);
}

fonctionControleTableau([1, 2, 3]);
fonctionControleTableau([10, "20", 30]);
fonctionControleTableau("");   