'use strict';

// function sheepCount(count){ 
//   if(count ===0){ 
//     return;
//   } 
//   console.log(`${count} - Another sheep jumps over the fence`);
//   sheepCount(count-1);
// }

// sheepCount(3);

// function arrayDouble(array){
//   if(!array.length){
//     return [];
//   }
// //   const newValue = array[0] * 2;
// //   return newValue + arrayDouble(array.slice(1));
//   return [(array[0] *2), ...arrayDouble(array.slice(1))];
// }

// console.log(arrayDouble([2,3,4]));

// function reverseString(string){
//   if(string === ''){
//     return ''
//   }
//   let newStr = string[string.length-1]
//   return newStr + reverseString(string.slice(0,-1))
// }

// console.log(reverseString('hello'))

// function nthTriangleNum(num){
//   if(num === 0){
//     return 0;
//   }

//   return num + nthTriangleNum(num -1);
// }

// console.log(nthTriangleNum(4));

function stringSplitter(string,seperator,start){
  if(start > 4){
    return '';
  }
    const seperatorIndex = string.indexOf(seperator,start) 
    return [seperatorIndex,...stringSplitter(string,seperator,seperatorIndex+1)]

  }

const string ='the brown fox bal1 bal2 bal3'

console.log(string.slice(stringSplitter(string,' ',0)[0],stringSplitter(string,' ',0)[1]))