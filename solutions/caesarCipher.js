function toCaesar(shift, char){
  var charcode = char.charCodeAt(0);
  if(charcode >= 65 && charcode <= 90) { //A-Z
    var modchar = ((charcode-65)+shift)%26;
    return String.fromCharCode(modchar+65);
  }else if(charcode >= 97 && charcode <= 122) { //a-z
    var modchar = ((charcode-97)+shift)%26;
    return String.fromCharCode(modchar+97);
  }else{
    return char
  }
};
 
function caesarCipher(str, shift) {
  return str.split('').map(toCaesar.bind(null, shift)).join('');
}

console.log(caesarCipher("what the heck", 2));
console.log(unCaesarCipher(caesarCipher("what the heck", 2),2));


function fromCaesar(shift, char){
  var charcode = char.charCodeAt(0);
  if(charcode >= 65 && charcode <= 90) {
    var modchar = ((charcode-65)+(26-shift))%26;
    return String.fromCharCode(modchar+65);
  }else if(charcode >= 97 && charcode <= 122) {
    var modchar = ((charcode-97)+(26-shift))%26;
    return String.fromCharCode(modchar+97);
  }else{
   return char
  }
};

function unCaesarCipher(str, shift) {
  return str.split('').map(fromCaesar.bind(null, shift)).join('');
}
 
