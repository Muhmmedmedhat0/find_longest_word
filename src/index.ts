function findLongestWord(sentence: string): string {
  // split sentence into words & remove npn-English letters and apacess
  const words = sentence.split(' ').filter((word) => /^[a-zA-Z]+$/.test(word));

  if (words.length === 0) {
    return ''; // no valid words found
  }

  let longestWord = '';
  let maxLength = 0;
  let maxVowelCount = 0;

  for (const word of words) {
    const length = word.length;
    const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;

    if (
      length > maxLength ||
      (length === maxLength && vowelCount > maxVowelCount)
    ) {
      longestWord = word;
      maxLength = length;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

// some test inputs
const input1 =
  'Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)';
const input2 = 'This is a test with $pecial char';
const input3 = 'NoValidWordsInThisSentence$%^&*';
const input4 = '';

// cal the function

const longestWord = findLongestWord(input1);

console.log(longestWord);
