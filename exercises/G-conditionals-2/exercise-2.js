/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the grade is less than 50 then return "failed"
  - if 50 or higher then return "passed"

*/

function studentPassed(grade1) {
  if (grade1 < 50) {
    return "failed";
  } else if ( grade1 >= 50) {
    return"passed"
  }
}
function studentPassed(grade2) {
  if (grade2 < 50) {
    return "failed";
  } else if ( grade2 >= 50) {
    return"passed"
  }
}

function studentPassed(grade3) {
  if (grade3 < 50) {
    return "failed";
  } else if ( grade3 >= 50) {
    return"passed";
  }
}

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 50;
var grade3 = 100;

console.log("'" + grade1 + "': " + studentPassed(grade1));
console.log("'" + grade2 + "': " + studentPassed(grade2));
console.log("'" + grade3 + "': " + studentPassed(grade3));

/* 
EXPECTED RESULT
---------------
'49': failed
'50': passed
'100': passed
*/
