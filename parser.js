console.log('Happy developing ✨')
let rawDomains, filteredDomainsString, filteredDomainsArray;
const regBracket = /(\s?\W\s?\.\s?\W\s?)?(\s?\W\s?)dot(\s?\W\s?)?/ig;
const regTld = /(\w{2,}\.\w{2,})(\.\w{1,2})?/g;

function getDomains(id) {
  rawDomains = document.getElementById(id).value;
}

function uniq(a) {
  const seen = {};
  return a.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

function removeBrackets(el){
  return el.replace(regBracket, ".");
}

function getDomainsArray(el){
  filteredDomainsArray = uniq(el.match(regTld))
  return filteredDomainsArray;
}

function createListFromArray(el){
  let domainList = "";
  el.forEach((el) => {
    domainList+= `${el}\n`;
  })
  return domainList;
}

function cleanDomains(){
  getDomains("parserInput");
  filteredDomainsString = createListFromArray(getDomainsArray(removeBrackets(rawDomains)));
  document.getElementById("parserOutput").value = filteredDomainsString;
}

function openDomains(){
  filteredDomainsArray.forEach((el) => {
    window.open(`https://${el}`);
  })
}
