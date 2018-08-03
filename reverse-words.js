let reverseWords = (phrase) => {
  let words = phrase.split(' ')
  let reversedPhrase = ''
  words.forEach((word, idx) => {
    let reversedWord = word.split('').reverse().join('')
    if(idx === words.length) reversedPhrase += reversedWord
    reversedPhrase += reversedWord + ' '
  })
  return reversedPhrase
}

console.log(
  reverseWords(process.argv[2])
)