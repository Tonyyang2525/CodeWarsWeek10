// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

// an answer I saw after complete the code was someone used ternary operator
// this is something I could have done as well

// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
//   }

//test cases
console.log(paperwork(3, 2));
console.log(paperwork(5, 0));
console.log(paperwork(-2, 2));
