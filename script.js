

// find the repeating string in a string which do not overlap
// input: "abcabcabcabc"
// output: "abc"

// input: "abababab"
// output: "ab"

// input = "hehehe"
// output = "heh"

// input = "hehehehe"


// find the repeating substing in the string
// input: "geeksforgeeks"
// output: "geeks"

// input: "abcabcabcabc"
// output: "abc"

// input: "abababab"
// output: "ab"

// input = "hehehe"
// output = "heh"

// input = "hehehehe"
// output = "hehe"


function findRepeatingString(str) {
    let n = str.length;
    for (let i = 1; i <= n / 2; i++) {
        let first = str.substring(0, i);
        let second = str.substring(i, 2 * i);
        if (first === second) {
        return first;
        }
    }
    return str;
    }


console.log(findRepeatingString("abcabcabcabc")); // "abc"
console.log(findRepeatingString("abababab")); // "ab"
console.log(findRepeatingString("heheheh")); // "heh"
console.log(findRepeatingString("hehehehe")); // "he"
console.log(findRepeatingString("geeksforgeeks")); // "geeks"

