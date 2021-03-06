/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------



function max(n1, n2) {
if (n1 < n2) {
  return n2;
  }
  else 
  {
    return n1;
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(n1, n2, n3){
  if(n1 > n2 && n1 > n3) {
    return n1;
  }
  else if(n2 > n1 && n2 > n3) {
    return n2;
  }
  else {
    return n3;
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){

  var vowels;
  vowels = "aeiou".split("");
  var vowelarray = vowels.filter(function(item) {
    return item === char;
    });
    return !!(vowelarray.length);
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


function sum(nums) {
  var totNums = nums.reduce(function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  });

  return totNums;
}


function multiply(nums){
  var totNums = nums.reduce(function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  });

  return totNums;
}
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  var splitString = string.split("");
  var reverseString = splitString.reverse();
  var joinString = reverseString.join("");
  return joinString;

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function findLongestWord(words){
var maxLength = 0;
 words.forEach(function(item) {
    if (item.length > maxLength) {
        maxLength = item.length;
    } 
  });

 return maxLength;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var frequency = {};
    for (var index=0; index < string.length; index++) {
        var letter = string.letterAt(index);
    if (frequency[letter]) {
        frequency[letter]++;
        
        } else {
        
        frequency[letter] = 1;
        }
    }

    return frequency;
};