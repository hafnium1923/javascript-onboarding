const CONTAINER = [0,0,0,1,0,0,1,0,0,1];

function problem3(number) {
  var answer;
  isRightNum(number);
  answer = countClap(number);
  return answer;
}

function isRightNum(number) {
  if(number < 1 || number > 10000) throw '숫자 범위 오류';
}

function countClap(num) {
  let count = 0;
  for(let i = num; i > 0; i--) {
    let number = i;
    while(number > 0) {
      count += CONTAINER[number%10];
      number = parseInt(number/10);
    }
  }
  return count;
}
module.exports = problem3;