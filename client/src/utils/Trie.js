// Trie autosuggestion for the search bar

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode[char]) {
        currentNode[char] = {};
      }

      currentNode = currentNode[char];
    }

    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode[char]) {
        return false;
      }

      currentNode = currentNode[char];
    }

    return currentNode && currentNode.isEndOfWord;
  }

  suggest(word) {
    let currentNode = this.root;
    const suggestions = [];

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode[char]) {
        return suggestions;
      }

      currentNode = currentNode[char];
    }

    this.suggestions(currentNode, suggestions, word);

    return suggestions;
  }

  suggestions(currentNode, suggestions, word) {
    if (currentNode.isEndOfWord) {
      suggestions.push(word);
    }

    Object.keys(currentNode).forEach((char) => {
      if (char === "isEndOfWord") {
        return;
      }

      this.suggestions(currentNode[char], suggestions, word + char);
    });
  }
}

let trie = new Trie();
const words = [
  "hello",
  "dog",
  "hell",
  "cat",
  "a",
  "hel",
  "help",
  "helps",
  "helping",
];

words.forEach((word) => trie.insert(word));
console.log(trie.suggest("hel"));

export default Trie;
