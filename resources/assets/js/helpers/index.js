/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - guesssed word which enter by user
 * @param {string} secretWord - secret word generate by api
 * @returns {number} - number of letters matched between gussed and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
