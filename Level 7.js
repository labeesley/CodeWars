//Isograms

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

//declare a function isogram
//input: string
//output: boolean

function isIsogram(str){
  const newString = str.toLowerCase().split('');
  let noDoubles = [];
  let duplicates = [];
  for (let i =0; i < newString.length; i++) {
    if (!noDoubles.includes(newString[i])) {
      noDoubles.push(newString[i]);
    }
    else {
      duplicates.push(newString[i]);
    }
  }
  // console.log('noDoubles', noDoubles)
  // console.log('duplicates', duplicates)
  if (duplicates.length === 0) {
    return true;
  }
  else {
    return false;
  }
}


// console.log(isIsogram('euna')); //true
// console.log(isIsogram('Dermatoglyphics')); //true
// console.log(isIsogram('aba')); //false
// console.log(isIsogram('moOse')); //false

////////////////////////////////////////////////////////////////////////////////////////////////////

////////\\\\\\\\
/////Sept 6\\\\\
////////\\\\\\\\

//Binary Addition
/*
DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) {
  let decimal = a + b;
  let binary = [];
  while (decimal > 0) {
    binary.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  return binary.reverse().join('');
}

// console.log(addBinary(1, 2)); // '11' (1 + 2 = 3 in decimal or 11 in binary)
// console.log(addBinary(1, 1)); // '10' (1 + 1 = 2 in decimal or 10 in binary)
// console.log(addBinary(5, 9)); // "1110" (5 + 9 = 14 in decimal or 1110 in binary)