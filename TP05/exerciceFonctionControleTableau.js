let tab = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

function controleTableau(tab) {

    if (tab.length === 0) {
        return false;
    }

    for (let i = 0; i < tab.length; i++) {
        if (typeof tab[i] !== "number") {
            return false
        }
    }

    for (let i = 0; i < tab.length; i++) {
        if (typeof tab[i] === "number") {
            return true
        }
    }

}
console.log(controleTableau(tab))
