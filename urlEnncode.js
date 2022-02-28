const urlEncode = function(text) {
  // Put your solution here
  let finalString = "";
  if (text[0] !== " " && text[text.length] !== " ") {
    for (let i = 0; i < text.length; i++) {
      text[i] === " " ? finalString += "%20" : finalString += text[i];
    }
    return finalString;
  }
  else {
  for (let j = 1; j < text.length - 1; j++) {
    text[j] === " " ? finalString += "%20" : finalString += text[j];
  }
  return finalString;
}
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));