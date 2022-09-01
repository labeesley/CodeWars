//hopefully this will work
//let's practice code wars problems here

////////\\\\\\\\
/////Aug 31\\\\\
////////\\\\\\\\
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
//Viv's and My solution
function arrayDiff(newArray1, array2) {
  // const newArray1 = array1.filter((ele, index, array) => array.indexOf(ele) === index);
  for (let i = 0; i < array2.length; i++) {
			use while loop to keep looping through the array if there are duplicates
    while (newArray1.includes(array2[i])) {
      newArray1.splice(newArray1.indexOf(array2[i]), 1);
    }
  }
  return newArray1;
}


//no dum solution >:( notafan
//someone else's soln on Codewars
// function arrayDiff(array1, array2) {
//     return array1.filter(ele =>{
//       if (!array2.includes(ele)) {
//         console.log('current array1 ele', ele)
//         console.log('array2', array2)
//         return true;
//       } else {
//         return false;
//       }
//     });
//   }
  
  // console.log(arrayDiff([1, 2], [1])) //-> [2]
  // console.log(arrayDiff([1, 2, 2, 2, 3] , [2])) //-> [1, 3]
  // console.log(arrayDiff([1, 2, 3], [1, 2])) //-> [3]
  // console.log(arrayDiff([1, 2, 2], [1])) //-> [2, 2]
  