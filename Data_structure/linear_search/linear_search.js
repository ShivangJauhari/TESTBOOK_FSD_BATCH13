// Linear search for loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let key = 33;

function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    // If the element is present in the array
    if (arr[i] === key) 
    return i;
  }
  return -1;
}

console.log("Element is present at index: " +linearSearch(arr, key)); // 4

