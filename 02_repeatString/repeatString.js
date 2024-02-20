const repeatString = function(string, num) {
  let count=0;
  let repeatedString="";
    while (count < num) {
      repeatedString += string;
      count++;
  }
  return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
