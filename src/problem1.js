function problem1(pobi, crong) {
  if(isWrongPage(pobi[0],pobi[1]) || isWrongPage(crong[0],crong[1]))
    return -1;
  if(whichMoreBig(pobi[0],pobi[1]) > whichMoreBig(crong[0], crong[1])) 
    return 1;
  else if(whichMoreBig(pobi[0],pobi[1]) > whichMoreBig(crong[0], crong[1]))
    return 2;
  else return 0;
}

function isWrongPage(left, right) {
  if(left + 1 != right) return 1;
  if(left == 1 || right == 400) return 1;
}
function whichMoreBig(left, right) {
  const leftBig = plusAll(left) > multAll(left) ? plusAll(left) : multAll(left);
  const rightBig = plusAll(right) > multAll(right) ? plusAll(right) : multAll(right);
  return leftBig > rightBig ? leftBig : rightBig
}

function plusAll(num) {
  let plus = 0;
  while(num != 0) {
    plus += parseInt(num % 10);
    num = parseInt(num/10);
  }
  return plus;
}

function multAll(num) {
  let mult = 1;
  while(num != 0) {
    mult *= parseInt(num % 10);
    num = parseInt(num/10);
  }
  return mult;
}
module.exports = problem1;

/* 1번문제: 약 15분 걸림 */