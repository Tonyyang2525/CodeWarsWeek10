//find the smallest integer in an array

let num;
//create a function
function smallestInteger(arr) {
  //create for loop to iterate through an array
  for (let i = 0; i < arr.length; i++) {
    if (!num) {
      num = arr[i];
    }
    if (arr[i] < num) {
      num = arr[i];
    }
    //test line of code to show the changes after each itteration
    //console.log(num);
  }

  return num;
}
//create for loop to iterate through an array
let x = [23, 32, 15, 34, 22, 3, 1, 9];
console.log(smallestInteger(x));
