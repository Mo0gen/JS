
function bonjour(prenom) {
  if (typeof prenom !== "string") {
    return console.log("le paramètre doit être une chaîne de caractères.");
  }else{  
    return console.log("Bonjour " + prenom )};
}

console.log(bonjour("Alice"));       
console.log(bonjour(1));               