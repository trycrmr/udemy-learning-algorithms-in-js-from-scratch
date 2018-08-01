let harmlessRansomNote = (noteText, magazineText) => {
  let noteArray = noteText.split(' ')
  let magazineArray = magazineText.split(' ')
  let magazineObj = {}

  magazineArray.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0
    magazineObj[word]++
  });

  let noteIsPossible = true
  noteArray.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--
      if (magazineObj[word] < 0) noteIsPossible = false
    }
    else noteIsPossible = false
  })

  return noteIsPossible
}

console.log(
  harmlessRansomNote('this is a secret note for you from a secret admirer', 'this is a secret note for you from a secret person')
)