// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const addr = "LES GENESTIERES 27 CHEMIN DE L ORGE 83860 NANS LES PINS";


var stringToArray = addr.split(' ');

var ville = "";
var adress = "";
var postalCode = "";

const lengthArray = stringToArray.length;

var i = 0

while (i < lengthArray) {
    const elm = stringToArray[i];

    if (!isNaN(elm) && elm.length == 5) {
        postalCode = elm;
        var j = 0;
        var k = i + 1;
        // adresse
        while (j < i) {
            const elm1 = stringToArray[j];
            adress += ' ' + elm1;
            j++;
        }
        // ville
        while (k < lengthArray) {
            const elm2 = stringToArray[k];
            ville += ' ' + elm2;
            k++;
        }

        break;

    }
    i++;
}
console.log('Adresse orginale =', addr)
console.log("Adresse => " + adress);
console.log("Code postal => " + postalCode);
console.log("Ville => " + ville);