// Binary search while loop
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

key = 3;

function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (start <= end)
    {
        // To check if the mid is the element
        if (arr[mid] === key) {
            return ("Element found at index " + mid + " and value is " + arr[mid]);
        }
        // To shift the end to the left of the mid
        else if (arr[mid] > key) {
            end = mid - 1;
        }
        // To shift the start to the right of the mid
        else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    // To return -1 if the element is not found
    return -1;
}

console.log(binarySearch(arr, key)); // 9
