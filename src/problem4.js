function problem4(word) {
  var answer;
  isRightString(word);
  answer = reverseWord(word);
  return answer;
}

function isRightString(word) {
  if(word.length < 1 || word.length > 1000 ) throw '문자열 길이 오류';
}
function reverseWord(word) {
  let reverse ='';
  for(let i = 0; i <word.length; i++) { 
    if('A' <= word[i] && word[i] <= 'Z') {
      reverse +=  String.fromCodePoint(155 - word.charCodeAt(i));
    }
    else if('a' <= word[i] && word[i] <= 'z') {
      reverse +=  String.fromCodePoint(219 - word.charCodeAt(i));
    }
    else reverse += word[i];
  }
  return reverse;
}
problem4('I love you');
module.exports = problem4;