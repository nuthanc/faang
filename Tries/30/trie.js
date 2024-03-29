class Node {
  constructor() {
    this.isEnd = false;
    this.keys = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!cur.keys[ch]) {
        cur.keys[ch] = new Node();
      }
      cur = cur.keys[ch];
      if (i === word.length - 1) { // I think I could have taken this outside the for loop as cur would be pointing to last element anyway and no condition would be required
        cur.isEnd = true;
      }
    }
  }
  search(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!cur.keys[ch]) {
        return false;
      }
      cur = cur.keys[ch];
      if (i === word.length - 1) { // Outside for loop without if
        return cur.isEnd;
      }
    }
  }
  startsWith(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const ch = prefix[i];
      if (!cur.keys[ch]) {
        return false;
      }
      cur = cur.keys[ch];
      if (i === prefix.length - 1) { // Outside for loop without if
        return true;
      }
    }
  }
}

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple'));
console.log(trie.startsWith('app'));

