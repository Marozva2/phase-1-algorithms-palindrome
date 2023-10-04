function reverseString(word){
  // create an array of word by the split method, reverse it and then return the joined string
  return word.split('').reverse('').join('')
}

function isPalindrome(word) {
  // algorithm here
  const reverseWord = reverseString(word);
  return word === reverseWord
   
}

/* 
  Add your pseudocode here
*/

/*
  We are supposed to creat a function that takes in a string and return it reversed
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
