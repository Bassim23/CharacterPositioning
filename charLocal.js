
function countLetters(letters) {
  var output = {};

  for (var i = 0; i < letters.length; i++) {
    var character = letters[i];

    if (character in output) {
      output[character].push(i);
    } else if(character != ' ') {
      output[character] = [i];
    }
  }
    return output;
}
console.log(countLetters("loopy lighthouse"));