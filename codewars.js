'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group();
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.groupEnd();
    console.trace();
  }
}

// function anArgument(...str) {
//     //Your code goes here
//     const strs = [...str];
//     const strsLength = strs.length;
//     const allStr = [];
//     let lastStr = "";
//     if (strsLength === 0) {
//         return "You didn't give me any arguments.";
//     }
//     if (strsLength === 1) {
//         let oneStr = strs.join();
//         return `You gave me 1 argument and it is "${oneStr}".`;
//     }
//     for (let i = 0; i < strsLength; i++) {
//         if(i === strsLength - 1) {
//             lastStr = `"${strs[i]}"`;
//         } else {
//             allStr.push(`"${strs[i]}"`);
//         }
//     }
//     const allStrs = allStr.join(", ");
//     return `You gave me ${strsLength} arguments and they are ${allStrs} and ${lastStr}.`;
// }

// console.log(anArgument("chairs","table","lamp","sideboard"));
// console.log(anArgument("chairs"));
// console.log(anArgument());

// function formatMoney(amount) {
//     // your formatting code here
//     let int = String(Math.floor(amount));
//     let flot = String(amount).split(".")[1];
//     if (flot === undefined) {
//         flot = "00";
//     }else if (flot.length === 1) {
//         flot = flot + "0";
//     }
//     return `$${int}.${flot}`;
// }

// console.log(formatMoney(39));

// function calculator(a,b,sign){
// const signs = ["+", "-", "*", "/"];
// if(!signs.includes(sign)) {
//   return "unknown value";
// }else if (typeof a !== "number" || typeof b !== "number") {
//     return "unknown value";
// } else if(isNaN(a) || isNaN(b)) {
//   return "unknown value";
// } else {
//   switch(sign) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//   }
// }

// }

// console.log(calculator(3, 4, "%"));

// function sumMul(n,m){
//   let sum = 0;
//   if (m <= 0) {
//     return "INVALID";
//   }
//   for (let i = n; i <m; i+=n) {
//     sum += i;
//   }
//   return sum;
//   }

//   console.log(sumMul(4, 123));

function findDifference(a, b) {
  return Math.abs(a.reduce((acc, val) => acc * val) - b.reduce((acc, val) => acc * val));
}

// const findDifference = (a , b) => Math.abs(a.reduce((acc, val) => acc * val) - b.reduce((acc, val) => acc * val));

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// console.log(Kata.getVolumeOfCuboid(1,2,2));

function findMultiples(integer, limit) {
  const result = [];
  // const loopLimit = Math.floor(limit / integer);
  // for (let i = 1; i <= loopLimit; i++) {
  //   result.push(integer * i);
  // }
  // console.log(Array(Math.floor(limit / integer)).fill(1).map((x,i)=>integer*(i+1)));
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}

// console.log(findMultiples(5, 25));
// console.log(findMultiples(5, 7));

function divisibleBy(numbers, divisor) {
  return numbers.filter(num => num % divisor === 0);
}

// console.log(divisibleBy([1,2,3,4,5,6], 2));

function generateRange(min, max, step) {
  const result = [];
  // for の処理が一つだけなら｛｝書かなくてもいい
  for (let i = min; i <= max; i += step) result.push(i);

  return result;
}
// function generateRange(min, max, step) {
// for の ループ用の変数を書くところに 空の配列を書くこともできる
//   for (var res = []; min <= max; min += step){
//     res.push(min);
//   }
//   return res
// }

// console.log(generateRange(2, 10, 2));

function cookie(x) {
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number") {
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}

function toNumberArray(stringarray) {
  // const result = [];
  // for (const elem of stringarray) {
  //   result.push(Number(elem));
  // }
  // return result;
  return stringarray.map(elem => Number(elem));
}

// console.log(toNumberArray(["1.1","2.2","3.3"]));// [1.1,2.2,3.3]

function explode(x) {
  const result = [];
  if (typeof x[0] !== "number" && typeof x[1] !== "number") return "Void!";
  let score = typeof x[0] !== "number" ? x[1] : typeof x[1] !== "number" ? x[0] : x.filter(elem => typeof elem === "number").reduce((a, b) => a + b);
  while (score > 0) {
    result.push(x);
    score--;
  }
  return result;
}

// console.log(explode([9, 3]));

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(elem => elem === true).length;
}

let array1 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];

// console.log(countSheeps(array1))

function capital(capitals) {
  const result = [];
  for (const elem of capitals) {
    let [a, b] = Object.values(elem);
    result.push(`The capital of ${a} is ${b}`);
  }
  return result;
}
const state_capitals = [{ state: 'Maine', capital: 'Augusta' }];
// console.log(capital(state_capitals)[0]); // => "The capital of Maine is Augusta"

let mixed_capitals = [{ "state": 'Maine', capital: 'Augusta' }, { country: 'Spain', "capital": "Madrid" }];
// console.log(capital(mixed_capitals)[1])

// const result = [];
// function per(n) {
//   const toString = String(n);
//   let sum = 1;
//   if (toString.length === 1) {
//     return result;
//   }
//   for (let i = 0; i < toString.length; i++) {
//     sum = sum * Number(toString[i]);
//   }
//   result.push(sum);
//   return per(sum);
// }

function per(n) {
  let res = []
  while (n.toString().length > 1) {
    n = n.toString().split('').reduce(
      (p, c) => p * c
    )
    res.push(n)
  }
  return res
}

// console.log(per(277777788888899));

function find(a, e) {
  let i = a.indexOf(e);
  return i >= 0 ? i : "Not found";
}


function tea42(input) {
  const result = [];
  const str = String(input);
  for (let i = 0; i < str.length; i++) {
    str[i] === "2" ? result.push("t") : result.push(str[i]);
  }
  return result.join("");
}
// function tea42(input) {
//   return input.toString().replace (/2/g, 't');
//  };
// console.log(tea42(102));
// console.log(tea42('pre2ty'));

function distinct(a) {
  // Setは重複を削除した新しいオブジェクトを作成する newとセットで使用する
  // 配列にしたい場合は、別の処理をする必要がある
  console.log(Array.from(new Set(a)));
  return a.filter((elem, index) => a.indexOf(elem) === index);
}

// function distinct(a) {
//   return [...new Set(a)];
// }

// console.log(distinct([1,1,2])); // => [1,2]

function squareSum(numbers) {
  // reduceには initialValue という引数がある。これはアキュームレーターの初期値を設定するための引数
  // これを指定しない場合、初期値は配列の1番目の要素になる
  // currentValueの初期値にも関わってくる。設定しないと配列の２番目の要素が初期値になる
  // 気を付けないと処理結果が変わってくる可能性がある

  // return numbers.length > 0 ? numbers.reduce((pre, val) => pre + val**2,0) : 0;
  return numbers.reduce((pre, val) => pre + val ** 2, 0);
}

// console.log(squareSum([0, 3, 4, 5]));
// console.log(squareSum([3,7,12]));

// var isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n));
// }

// console.log(isSquare(26));

function reverseWords(str) {
  // return str.split(" ").sort((a,b) => a - b ? 1 : -1).join(" ");
  return str.split(" ").reverse().join(" ");
}

// console.log(reverseWords("yoda doesn't speak like this"));

function removeChar(str) {
  return str.slice(1, -1);
};

// console.log(removeChar('el'));

function orderFood(list) {
  const result = {};
  list.forEach(elem => !(elem.meal in result) ? result[elem.meal] = 1 : result[elem.meal] += 1);
  return result;
}

let list1 = [
  {
    firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
    meal: 'vegetarian'
  },
  {
    firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
    meal: 'standard'
  },
  {
    firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
    meal: 'vegan'
  },
  {
    firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
    meal: 'vegetarian'
  },
];

// console.log(orderFood(list1));

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
  // return numbers.sort((a,b) => a - b)
  // .filter((elem,index) => index <=1)
  // .reduce((acc, cur) => acc + cur);
}

// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));

function printerError(s) {
  // matchメソッドは該当する値が無かった時、nullを返す
  // そのままではlengthを呼び出したときにエラーが出る nullはlengthが無いため
  //そこで、 || [] を記述することで matchの返り値がnullの場合は空の配列を返すようにする
  // 空の配列ならlengthを呼び出してもエラーが出ない 0が返るため
  if (typeof s === "string") {
    let length = s.length;
    let errorLength = s.match(/[n-z]/g || []).length;
    let result = `${errorLength}/${length}`;
    return result;
  }
}
// let s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
// console.log(printerError());

// console.log(s.match(/[n-z]/g).length);
// console.log(s.length);
// console.log(printerError(s));

function highAndLow(numbers) {
  const arr = numbers.split(" ");
  arr.forEach((e, index) => arr[index] = Number(e));
  const newArray = arr.filter(e => e === Math.max(...arr) || e === Math.min(...arr))
    .sort((a, b) => b - a);
  return Array.from(new Set(newArray)).join(" ");
}

// function highAndLow(numbers){
//   const numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// console.log(highAndLow("8 3 -5 42 -1 -9 0 -9 4 7 4 -4"));

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  return classPoints.reduce((a, b) => a + b) / classPoints.length < yourPoints ? true : false;
}

// console.log((betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)));

function cutIt(arr) {
  const arrLength = [];
  const result = [];
  for (const elem of arr) {
    arrLength.push(elem.length);
  }
  const miniLength = Math.min(...arrLength);
  for (const elem of arr) {
    result.push(elem.slice(0, miniLength));
  }
  return result;
}

// function cutIt(arr){
//   const minLength = Math.min(...arr.map(x => x.length));
//   return arr.map(x => x.slice(0, minLength));
// }

// console.log(cutIt(["ab", "cde", "fgh"])); // ["ab","cd","fg"]

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const textJoin = text.split(" ").join("").toLowerCase();
  const result = []
  for (let i = 0; i < textJoin.length; i++) {
    let str = textJoin[i].replace(/[Ａ-Ｚａ-ｚ]/, x => String.fromCharCode(x.charCodeAt(0) - 0xFEE0));
    if (alphabet.indexOf(str) !== -1) {
      result.push(alphabet.indexOf(str) + 1);
    }
  }
  return result.join(" ");
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function solve(n) {
  let result = 0;
  if (n % 10) return -1;
  while (Math.sign(n - 500) === 1 || Math.sign(n - 500) === 0) {
    result++;
    n -= 500;
  }
  while (Math.sign(n - 200) === 1 || Math.sign(n - 200) === 0) {
    result++;
    n -= 200;
  }
  while (Math.sign(n - 100) === 1 || Math.sign(n - 100) === 0) {
    result++;
    n -= 100;
  }
  while (Math.sign(n - 50) === 1 || Math.sign(n - 50) === 0) {
    result++;
    n -= 50;
  }
  while (Math.sign(n - 20) === 1 || Math.sign(n - 20) === 0) {
    result++;
    n -= 20;
  }
  while (Math.sign(n - 10) === 1 || Math.sign(n - 10) === 0) {
    result++;
    n -= 10;
  }
  return result;
}

// console.log(solve(1250));
// console.log(solve(42));


function areYouPlayingBanjo(name) {
  return name.match(/^[rR]/) ? `${name} plays banjo` : `${name} does not play banjo`;
}

// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("ringo"));

const stringToNumber = str => Number(str);


function XO(str) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") xCount++;
    if (str[i].toLowerCase() === "o") oCount++;
  }
  return xCount === oCount ? true : false;
}

// console.log(XO("xxOo"));

var Calculator = {
  average: function (...numbers) {
    const numArray = [...numbers];
    return numArray.length === 0 ? 0 : numArray.reduce((acc, val) => acc + val) / numArray.length;
  }
};

// console.log(Calculator.average());

function simpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8;
}

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

// console.log(reverse("this at expert an am I"));

function countPositivesSumNegatives(input) {
  const result = [0, 0];
  if (input !== null && input.length !== 0) {
    input.forEach(val => val > 0 ? result[0]++ : result[1] += val);
    return result;
  } else {
    return [];
  }
}

// console.log(countPositivesSumNegatives([]))

function starSign(date) {
  switch (date.getMonth()) {
    case 1:
      return date.getDate() >= 21 ? "Aquarius" : "Capricorn";
    case 2:
      return date.getDate() >= 20 ? "Pisces" : "Aquarius";
    case 3:
      return date.getDate() >= 21 ? "Aries" : "Pisces";
    case 4:
      return date.getDate() >= 21 ? "Taurus" : "Aries";
    case 5:
      return date.getDate() >= 22 ? "Gemini" : "Taurus";
    case 6:
      return date.getDate() >= 22 ? "Cancer" : "Gemini";
    case 7:
      return date.getDate() >= 23 ? "Leo" : "Cancer";
    case 8:
      return date.getDate() >= 24 ? "Virgo" : "Leo";
    case 9:
      return date.getDate() >= 24 ? "Libra" : "Virgo";
    case 10:
      return date.getDate() >= 24 ? "Scorpio" : "Libra";
    case 11:
      return date.getDate() >= 23 ? "Sagittarius" : "Scorpio";
    case 12:
      return date.getDate() >= 22 ? "Capricorn" : "Sagittarius";
  }
}

// console.log(starSign(new Date(1970, 1, 21)));
// console.log(starSign(new Date(1987, 3, 21)));
// console.log(starSign(new Date(1992, 7, 9)));

function fakeBin(x){
  return Array.from(x).map(s => s >= 5 ? 1 : 0).join("");
}

// console.log(fakeBin('45385593107843568'));

function doubleChar(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i].repeat(2));
  }
  return result.join("");
}


// console.log(doubleChar("abcd"));

function stringy(size) {
  let result = "";
  for (i = 1; i <= size; i++) {
    i % 2 ? result += 1 : result += 0;
  }
  return result;
}

// console.log(stringy(3));

// squareDigits

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.
Happy Coding!
*/

function squareDigits(num) {
  return Number(Array.from(String(num)).map(n => n**2).join(""));
}

// test(squareDigits(3212), 9414);
// test(squareDigits(2112), 4114);
// test(squareDigits(0), 0);

/*
Given an integral number, determine if it's a square number:
"In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. "
*/

function isSquare(num) {
  return Number.isInteger(Math.sqrt(num));
}

// test(isSquare(-1), false);
// test(isSquare(0), true);
// test(isSquare(3), false);
// test(isSquare(4), true);
// test(isSquare(25), true);
// test(isSquare(26), false);

function rentalCarCost(d) {
  return d >= 7 ? 40 * d - 50 : d >= 3 ? 40* d -20 : 40 * d;
}

function consecutiveOnes(nums) {
  let maxLength = 0;
  let tmp = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      tmp++;
      if(maxLength < tmp) {
        maxLength = tmp;
      }
    } else {
      tmp = 0;
    }
  }
  return maxLength;
};


// test(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]),3)// => 3

function boredom(staff){
  let score = 0;
  for (const depart in staff) {
    switch(staff[depart]) {
      case "accounts":
        score += 1;
        break;
      case "finance":
        score += 2;
        break;
      case "canteen":
        score += 10;
        break;
      case "regulation":
        score += 3;
        break;
      case "trading":
        score += 6;
        break;
      case "change":
        score += 6;
        break;
      case "IS":
        score += 8;
        break;
      case "retail":
        score += 5;
        break;
      case "cleaning":
        score += 4;
        break;
      case "pissing about":
        score += 25;
        break;
    }
  }
  return score <= 80 ? 'kill me now' : score >= 100 ?  'party time!!' : 'i can handle this';
}

// test(boredom({ tim: 'cleaning',
// jim: 'regulation',
// randy: 'IS',
// sandy: 'retail',
// andy: 'IS',
// katie: 'change',
// laura: 'pissing about',
// saajid: 'IS',
// alex: 'regulation',
// john: 'pissing about',
// mr: 'retail' }), 'party time!!');