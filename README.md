
# findLongestWord Function

The `findLongestWord` function is a TypeScript utility that finds and returns the longest word in a given sentence, considering English letters and spaces. If there are multiple words with the same maximum length, it chooses the one with the highest number of vowels.

## Function Signature

```typescript
function findLongestWord(sentence: string): string
```

### Input

- `sentence` (string): The input sentence containing words separated by spaces.

### Output

- Returns the longest word in the sentence based on the defined criteria.

## Usage

1. Import the `findLongestWord` function in your TypeScript file:

```typescript
import { findLongestWord } from './yourFile'; // Import your function
```

2. Call the `findLongestWord` function with a sample input sentence:

```typescript
const input = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
const longestWord = findLongestWord(input);
console.log(longestWord); // Output: "experience"
```

## Example

Consider the following example:

```typescript
const input = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
const longestWord = findLongestWord(input);
console.log(longestWord); // Output: "experience"
```

In this example, the function finds the longest word in the input sentence, which is "experience," and returns it as the output.


## License

This code is provided under the [MIT License](LICENSE).

---

In your actual project, make sure to replace `'./yourFile'` with the correct path to your TypeScript file containing the `findLongestWord` function. Additionally, you may want to include installation instructions for any dependencies or testing frameworks you use, and customize the README to suit your project's needs.
