//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Becareful, there shouldn't be a space at the beginning or the end of the sentence.

//create a function that takes the array and combines them together

//create an empty array

let sentenceString = "";
function smash(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    sentenceString += sentence[i];
    if (i != sentence.length - 1) {
      sentenceString += " ";
    }
  }
  return sentenceString;
}
//test case
let string1 = ["hello", "world", "this", "is", "great"];
// console.log(string[0] + string[1]);

console.log(smash(string1));
//test case to see how many indexs were in the array to account for if there is a space after the last index
console.log(sentenceString.length);
