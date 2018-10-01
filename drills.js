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

// function stringSplitter(string,seperator,start){
//   if(start > 4){
//     return '';
//   }
//     const seperatorIndex = string.indexOf(seperator,start) 
//     return [seperatorIndex,...stringSplitter(string,seperator,seperatorIndex+1)]

//   }

// const string ='the brown fox bal1 bal2 bal3'

// console.log(string.slice(stringSplitter(string,' ',0)[0],stringSplitter(string,' ',0)[1]))

// function factorial(num){
//   if(num === 0){
//     return 1;
//   }

//   return num * factorial(num -1);
// }

// console.log(factorial(5));

// function fibonacci(length){
//   if(length === 1){
//     return [1];
//   }

//   let arr = fibonacci(length -1);
//   console.log(arr);
//   arr.push(arr[arr.length -1] + arr[arr.length -2] || 1);
//   return arr;
// }

// console.log(fibonacci(7));

// function allAnagrams (word) {
//   if (word.length < 2) {
//     return [word];
//   } else {
//       var allAnswers = [];
//       for (var i = 0; i < word.length; i++) {
//         var letter = word[i];
//         var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
//         var shortwordArray = allAnagrams(shorterWord);
//         for (var j = 0; j < shortwordArray.length; j++) {
//           allAnswers.push(letter + shortwordArray[j]);
//         }
//       }
//       return allAnswers;
//   }
// }


// console.log(allAnagrams('word'))

const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
]

// ==============================
// function traverse(animalHierarchy, parent) {
//   let node = {};
//   animalHierarchy.filter(item => item.parent === parent)
//                 .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
//   return node;  
// }
// console.log(traverse(animalHierarchy, null));






const employees =[
  {id:'Zuckerberg',boss:null},
  {id:'Schroepfer',boss:'Zuckerberg'},
  {id:'Schrage',boss:'Zuckerberg'},
  {id:'Sandberg',boss:'Zuckerberg'},
  {id:'Bosworth',boss:'Schroepfer'},
  {id:'Zhao',boss:'Schroepfer'},
  {id:'VanDyck',boss:'Schrage'},
  {id:'Swain',boss:'Schrage'},
  {id:'Goler',boss:'Sandberg'},
  {id:'Hernandez',boss:'Sandberg'},
  {id:'Moissinac',boss:'Sandberg'},
  {id:'Kelley',boss:'Sandberg'},
  {id:'Steve',boss:'Bosworth'},
  {id:'Kyle',boss:'Bosworth'},
  {id:'Andra',boss:'Bosworth'},
  {id:'Richie',boss:'Zhao'},
  {id:'Sofia',boss:'Zhao'},
  {id:'Jen',boss:'Zhao'},
  {id:'Sabrina',boss:'VanDyck'},
  {id:'Michelle',boss:'VanDyck'},
  {id:'Josh',boss:'VanDyck'},
  {id:'Blanch',boss:'Swain'},
  {id:'Tom',boss:'Swain'},
  {id:'Joe',boss:'Swain'},
  {id:'Eddie',boss:'Goler'},
  {id:'Julie',boss:'Goler'},
  {id:'Annie',boss:'Goler'},
  {id:'Rowi',boss:'Hernandez'},
  {id:'Inga',boss:'Hernandez'},
  {id:'Morgan',boss:'Hernandez'},
  {id:'Amy',boss:'Moissinac'},
  {id:'Chuck',boss:'Moissinac'},
  {id:'Vinni',boss:'Moissinac'},
  {id:'Eric',boss:'Kelley'},
  {id:'Ana',boss:'Kelley'},
  {id:'Wes',boss:'Kelley'},
]

// function traversal(hierarchy, boss) {
//   let node = {};
//   hierarchy.filter(item => item.boss === boss)
//                 .forEach(item => node[item.id] = traversal(hierarchy, item.id));
//   return node;  
// }

// console.log(traversal(employees,null))


// function sheepCoutIt(sheep){
//   for(let i=sheep; i>0; i--){
//     console.log(`${i} - Another sheep jumps over the fence`);
//   }
// }

// sheepCoutIt(3);


const array2 = [1,2,3]
function doubleArray(array){
  array.forEach(number => {
    console.log(number*2)
  });
}

doubleArray(array2)





