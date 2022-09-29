const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
          console.log("Word is in the search")
          return true;
        }
    }
    for (l of verticalJoin) {
      if (l.includes(word)) {
        console.log("Word is in the search")
        return true;
      }
  }
    return false;
}

//Transpose Function for converting array of word from horizontal to vertical.
const transpose = function (matrix) {
  const finalArray = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const tempArray = [];
    for (let j = 0; j < matrix.length; j++) {
      tempArray.push(matrix[j][i]);
    }
    finalArray.push(tempArray)
  }
  return finalArray;
};

module.exports = wordSearch