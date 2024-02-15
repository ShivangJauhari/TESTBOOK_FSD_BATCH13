// Binary search recursive function

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
n = -15;

function binarySearch(arr, n, start, end) {
    // To check if the start is greater than the end amd it is base case for the recursive function to end
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    // To check if the mid is the element
    if (arr[mid] === n) {
        return mid;
    } 
    //  To shift the end to the left of the mid
    else if (arr[mid] > n) {
        return binarySearch(arr, n, start, mid - 1);
    } 
    // To shift the start to the right of the mid
    else {
        return binarySearch(arr, n, mid + 1, end);
    }
}

console.log(binarySearch(arr, n, 0, arr.length - 1)); // 9

