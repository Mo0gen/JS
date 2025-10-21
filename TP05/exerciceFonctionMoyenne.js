let tab = [1, 15, -3, 0, 8, "opijvcz", 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let somme = 0;

function moyenneTab(tab, somme) {
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i];
    }
    return somme / tab.length;
}

    if (tab.length === 0){
        console.log(0)
    }else{console.log(moyenneTab(tab, somme))}; 
    