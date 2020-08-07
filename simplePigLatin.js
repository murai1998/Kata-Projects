//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  return str
    .split(" ")
    .map(x => x.replace(/(\b)$/, x[0] + "ay"))
    .map(x => x.replace(/^(\w)/, ""))
    .join(" ");
}
