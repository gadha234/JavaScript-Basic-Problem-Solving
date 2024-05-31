// 1st question

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  console.log(celsiusToFahrenheit(0)); 
  console.log(celsiusToFahrenheit(25)); 

  
// 2nd question

function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(4)); 
  console.log(isEven(7)); 
  

// 3rd question

function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4)); 
  console.log(sum(10, 20)); 
  

// 4th question

function findSmallestNum(arr) {
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
  
    let smallest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    
    return smallest;
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); 
  console.log(findSmallestNum([-1, -5, 0, 10])); 
  

// 5th question

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countVowels("hello world")); 
  console.log(countVowels("Javascript")); 
  

// 6th question

function getFirstElement(arr) {
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
  
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); 
  console.log(getFirstElement(["a", "b", "c"]));


// 7th question 

function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false

  
// 8th question

function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    
    let result = 1;
    for (let i = num; i > 1; i--) {
      result *= i;
    }
    
    return result;
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040

  
//   9th question

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  
// 10th question

function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"



// 11th question

function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5


// 12th Question

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

  
// 13th question

function getLastElement(arr) {
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
  
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"

  
// 14th question

function getFirstCharacter(str) {
    if (str.length === 0) {
      throw new Error("String is empty");
    }
  
    return str[0];
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"

  
//   15th question

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  