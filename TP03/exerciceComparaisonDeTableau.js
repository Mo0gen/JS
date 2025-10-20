let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];

let communs = array1.filter(val => array2.includes(val));

console.log("Éléments en commun :", communs);
console.log("Nombre d'éléments en commun :", communs.length);