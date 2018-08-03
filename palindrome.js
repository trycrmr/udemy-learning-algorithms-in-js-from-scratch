let isPalindrome = (string) => {
  string = string.toLowerCase()
  let charactersArray = string.split('')
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  let lettersArr = []
  charactersArray.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char)
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true
  else return false
}

console.log(
  isPalindrome(`Madam, I'm Adam`)
)