let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let arrayCopy = [];

for (let x = array.length - 1; x >= 0; x--) {
    arrayCopy.push(array[x]);
}

console.log("Tableau original : " + array);
console.log("Tableau inversé : " + arrayCopy);