// function to find search pattern in a string all the occurences of the pattern

// test cases
// findPattern("ababababab", "abab") => [0, 2, 4]
// findPattern("geeksforgeeks", "geeks") => [0, 8]
// findPattern("birthday","birth") => [1]

// function findPattern(str, pattern) {
//     let result = [];
//     let i = 0;
//     while (i < str.length) {
//         let index = str.indexOf(pattern, i);
//         if (index === -1) {
//         break;
//         }
//         result.push(index);
//         i = index + 1;
//     }
//     return result;
//     }

function findPattern(str, pattern) {
    let result = str.match(pattern);
    if (result === null) {
        return -1;
    }
    return result.index;
    
}

console.log(findPattern("ababababab", "k"));