'use strict';

// function sheepCount(count){ 
//   if(count ===0){ 
//     return;
//   } 
//   console.log(`${count} - Another sheep jumps over the fence`);
//   sheepCount(count-1);
// }

// sheepCount(3);

function arrayDouble(array){
  if(!array.length){
    return [];
  }
//   const newValue = array[0] * 2;
//   return newValue + arrayDouble(array.slice(1));
  return [(array[0] *2), ...arrayDouble(array.slice(1))];
}

console.log(arrayDouble([2,3,4]));