function datePlusRecente(date1, date2) {

  if (date1 > date2) {
    return date1;
  } 
  
  if (date2 > date1) {
    return date2;
  }
}



console.log(datePlusRecente(date1, date2)); 
console.log(datePlusRecente(date2, date1)); 
