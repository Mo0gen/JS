function bonjour(prenom) {
  if (typeof prenom !== "number") {
    return console.log("le paramètre doit être un nombre.");
  }else{  
    return console.log(prenom)};
}

console.log(bonjour("Alice"));      
console.log(bonjour(1));               