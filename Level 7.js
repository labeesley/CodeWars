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
  console.log('noDoubles', noDoubles)
  console.log('duplicates', duplicates)
  if (duplicates.length === 0) {
    return true;
  }
  else {
    return false;
  }
}


console.log(isIsogram('euna')); //true
console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('aba')); //false
console.log(isIsogram('moOse')); //false