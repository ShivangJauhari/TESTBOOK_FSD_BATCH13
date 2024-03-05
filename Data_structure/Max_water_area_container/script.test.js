var maxArea = function(H) {
    let ans = 0, i = 0, j = H.length-1;
    while (i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
        H[i] <= H[j] ? i++ : j--
    }
    return ans
};

// Test case 1: H = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log("Maximum Area In The Container Filled With Water Is", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// Expected output: Maximum Area In The Container Filled With Water Is 49

// Test case 2: H = [1, 1, 1, 1, 1]
console.log("Maximum Area In The Container Filled With Water Is", maxArea([1, 1, 1, 1, 1]));
// Expected output: Maximum Area In The Container Filled With Water Is 4

// Test case 3: H = [4, 3, 2, 1, 4]
console.log("Maximum Area In The Container Filled With Water Is", maxArea([4, 3, 2, 1, 4]));
// Expected output: Maximum Area In The Container Filled With Water Is 16

// Test case 4: H = [1, 2, 1]
console.log("Maximum Area In The Container Filled With Water Is", maxArea([1, 2, 1]));
// Expected output: Maximum Area In The Container Filled With Water Is 2

// Test case 5: H = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
console.log("Maximum Area In The Container Filled With Water Is", maxArea([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// Expected output: Maximum Area In The Container Filled With Water Is 9