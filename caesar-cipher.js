let caesarCipher = (str, num) => {
  num = num % 26 // handles nums greater than 26
  let lowerCaseString = str.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let newString = ''

  for (var i = 0 ; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i]
    if (currentLetter == ' ') {
      newString += currentLetter
      continue
    }
    let currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + num
    if (newIndex > 25) newIndex = newIndex - 26 // handles index greater than alphabet length
    if (newIndex < 0) newIndex = 26 + newIndex // handles negative num
    if (str[i] === str[i].toUpperCase()) { // handles uppercase letters in original string
      newString += alphabet[newIndex].toUpperCase()
    }
    else newString += alphabet[newIndex] // newly shifted letter
  }

  return newString
}
console.log(
  caesarCipher(process.argv[2], process.argv[3])
)