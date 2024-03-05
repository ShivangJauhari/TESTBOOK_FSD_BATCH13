// Write a Program to get the successor of a string.Note:The successor is calculated by incrementing characters starting from the right most alphanumeric(or the right most character if there are no alphanumerics) in the string.Incrementing a digit always results in another digit,and incrementing a letter results in another letter of thes amecase.If the increment generates a carry,the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.Example: Input: "abcd "Output: "abce"

function successor(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz",
    length = alphabet.length,
    result = str,
    i = str.length;
  while (i >= 0) {
    var last = str.charAt(--i),
      next = "",
      carry = false;
    if (isNaN(last)) {
      index = alphabet.indexOf(last.toLowerCase());
      if (index === -1) {
        next = last;
        carry = true;
      } else {
        var isUpperCase = last === last.toUpperCase();
        next = alphabet.charAt((index + 1) % length);
        if (isUpperCase) {
          next = next.toUpperCase();
        }
        carry = index + 1 >= length;
        if (carry && i === 0) {
          var added = isUpperCase ? "A" : "a";
          result = added + next + result.slice(1);
          break;
        }
      }
    } else {
      next = +last + 1;
      if (next > 9) {
        next = 0;
        carry = true;
      }
      if (carry && i === 0) {
        result = "1" + next + result.slice(1);
        break;
      }
    }
    result = result.slice(0, i) + next + result.slice(i + 1);
    if (!carry) {
      break;
    }
  }
  return result;
}
console.log(successor("abcd"));
console.log(successor("3456"));
