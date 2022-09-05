function hasTargetSum(array, target) {
  // Write your algorithm here
  
  for( let i = 0; i < array.length ; i++){
    
    const difference = target - array[i];
    for( let j = i + 1 ; j < array.length; j++){
      if (array[j] === difference) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  create a loop to iterate over the item create a variable -> store the difference btn target and array item
  iterate each item so each number is compared to each other.
  return true for num maching the difference variable
  else return false
*/

/*
  Add written explanation of your solution here
  create nested loop to compare each array item with each of the other items in the array.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
