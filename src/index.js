module.exports = function check(str, bracketsConfig) {
  let openBrack = [];
  let brackPair = {}
  for (i = 0; i < bracketsConfig.length; i++) {
    openBrack.push(bracketsConfig[i][0])
    brackPair[bracketsConfig[i][1]] = bracketsConfig[i][0]

  }
  // console.log(openBrack)
  // console.log(brackPair)
  // console.log(str)


  let stack = [];


  for (i = 0; i < str.length; i++) {
    let curSym = str[i];

    // console.log(curSym, "curSym")
    if (openBrack.includes(curSym)) {

      if (brackPair[stack[stack.length - 1]] === curSym) {
        stack.pop()
      } else {
        stack.push(curSym)
        // console.log(stack, "this stack")
      }
    } else {
      if (stack.length === 0) {
        // console.log("false mid")
        return false;
      }


      let topElem = stack[stack.length - 1];

      if (brackPair[curSym] === topElem) {
        stack.pop();
      }


    }
  }
  // if (stack.length === 0) {
  //   console.log("true - last")
  // } else {
  //   console.log("false - last")
  // }
  return stack.length === 0;


}

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// function check(str, bracketsConfig) {

//   let openBrack = [];
//   let brackPair = {}
//   for (i = 0; i < bracketsConfig.length; i++) {
//     openBrack.push(bracketsConfig[i][0])
//     brackPair[bracketsConfig[i][1]] = bracketsConfig[i][0]

//   }
//   // console.log(openBrack)
//   // console.log(brackPair)
//   // console.log(str)


//   let stack = [];


//   for (i = 0; i < str.length; i++) {
//     let curSym = str[i];

//     // console.log(curSym, "curSym")
//     if (openBrack.includes(curSym)) {

//       if (brackPair[stack[stack.length - 1]] === curSym) {
//         stack.pop()
//       } else {
//         stack.push(curSym)
//         // console.log(stack, "this stack")
//       }
//     } else {
//       if (stack.length === 0) {
//         // console.log("false mid")
//         return false;
//       }


//       let topElem = stack[stack.length - 1];

//       if (brackPair[curSym] === topElem) {
//         stack.pop();
//       }


//     }
//   }
//   // if (stack.length === 0) {
//   //   console.log("true - last")
//   // } else {
//   //   console.log("false - last")
//   // }
//   return stack.length === 0;
// }



// check('()', config1) // true
// check('((()))()', config1)// true
// check('())(', config1)// false
// check('([{}])', config3)// true
// check('[(])', config2)// false
// check('[]()', config2)// true
// check('[]()(', config2)// false
// check('||', config4)// true
// check('|()|', config5)// true
// check('|(|)', config5)// false
// check('|()|(||)||', config5)// true !!!!!!!
// check('111115611111111222288888822225577877778775555666677777777776622222', config6)// true
// check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6)// false
// check('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6)// false
// check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6)// true
// check('[]][[]', config3)// false
// check('[]][[]', config2)//false
// check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7)// false
// check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config7) //true
// check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', config7)// true