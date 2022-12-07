function problem2(cryptogram) {
  var answer;
  isisWrongCryptogrm(cryptogram);
  answer = repetitonWord(cryptogram);
  return answer;
}

function isisWrongCryptogrm(cryptogram) {
  if(cryptogram.length < 1 || cryptogram.length > 1000) throw "문자열 길이 에러";
}

function repetitonWord(cryptogram) {
  let i = 0;
  while(1) {
    if(i === cryptogram.length -1) return cryptogram;
    if(cryptogram.length == 0) return "";
    if(cryptogram[i] == cryptogram[i+1]) {
      cryptogram = deletWord(i, cryptogram);
      i = -1;
    }
    i++;
 }
}

function deletWord(index, cryptogram) {
 let newCryptogram = cryptogram.substring(0,index) + cryptogram.substring(index+2);
 return newCryptogram;
}
module.exports = problem2;