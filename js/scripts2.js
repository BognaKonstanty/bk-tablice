var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);
var newName = 'Ewa';

if (allNames.includes(newName)){
  console.log('Imię znajduje się w tablicy')
} else {
  console.log('Imię zostało dodane do tablicy')
  var x = allNames.push(newName);
}
console.log(allNames);


