console.log('Happy developing ✨')
let rawDomains, filteredDomains;
//import {getDomain} from './tld.js';
const regBracket = /(\s?\W\s?\.\s?\W\s?)/ig;
const regTld = /(\w{2,}\.\w{2,})(\.\w{1,2})?/g;

function getDomains() {
  return rawDomains = document.getElementById('parserDomainsInput').value;
}

function removeBrackets(el){
  return el.replace(regBracket, ".");
}
function separateDomains(el){
  return el.replace(regTld, "$&\n");
}


function processDomains(){
  getDomains();
  //console.log(getDomain(rawDomains));
  filteredDomains = separateDomains(removeBrackets(rawDomains));
  console.log(filteredDomains);
  document.getElementById('parserDomainsOutput').value = filteredDomains;
}
