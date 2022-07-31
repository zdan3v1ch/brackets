// module.exports = function check(str, bracketsConfig) {


// }

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

function check(str, bracketsConfig) {

  let openBrack = [];
  let brackPair = {}
  for (i=0; i < bracketsConfig.length; i++){
    openBrack.push(bracketsConfig[i][0])
    brackPair[bracketsConfig[i][1]] = bracketsConfig[i][0]

  }
console.log(openBrack)
console.log(brackPair)
// console.log(str)


  let stack = [];


  for (i=0; i < str.length; i++) {
    let curSym = str[i];

    console.log(curSym)
    if (openBrack.includes(curSym)) {
console.log(brackPair[curSym])
      if (brackPair[curSym] === stack[stack.length -1]){
        stack.pop()
      } else {
      stack.push(curSym)
      console.log(stack)}
    } else {
      if (stack.length === 0) {
        console.log("false mid")
        return false;
      }


      let topElem = stack[stack.length -1];

      if(brackPair[curSym] === topElem) {
        stack.pop();
      } else {
        console.log("false dno")
        return false;
      }


    }
  }
  if (stack.length === 0) {
    console.log("true - last")
  } else {
    console.log("false - last")
  }
 return stack.length === 0;
}

check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config7)
