vvar womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);

var newName = 'Asia';
var indexOfnewName = allNames.indexOf(newName);

if (allNames.indexOf(newName) == -1) {
  console.log('Tego imienia nie ma w tablicy, zostanie dodane');
  var x = allNames.push(newName);
} else  {
	console.log(' To imię znajduje się w tablicy na pozycji '+ indexOfnewName );
  }

console.log(allNames);
