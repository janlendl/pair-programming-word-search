const wordSearch = (letters, word) => {
  let resultHorizontal = false;
  let resultVertical = false;

  resultHorizontal = search(letters, word);
  resultVertical = search(convertVertical(letters), word);
  
  if (resultVertical || resultHorizontal) {
    return true;
  }
  return false;
};

// Convert array matrix to grab the vertical letters
const convertVertical = (letters) => {
  const verticalArray = [];
  
  for (let x = 0; x < letters.length - 1; x++) {
    const tempArray = [];
    for (let y = 0; y < letters[x].length + 1; y++) {
      tempArray.push(letters[y][x]);
    }
    verticalArray.push(tempArray);
  }
  return verticalArray;
};

const search = (letters, word) => {
  const result = letters.map(ls => ls.join(''));
  for (l of result) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;