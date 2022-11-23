const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    return "Error. Please enter valid data.";
  }

  let upperCaseWord = word.toUpperCase();

  const horizontalString = letters.map(ls => ls.join(''));
  for (let line of horizontalString) {
    if (line.includes(upperCaseWord)) {
      return true;
    }
  }

  let arrayOfColumns = [];
  for (let i = 0; i < letters.length; i++) {
    let columns = [];
    for (let j = 0; j < letters.length; j++) {
      columns.push(letters[j][i]);
    }
    arrayOfColumns.push(columns);
  }

  let columnString = [];
  for (let element of arrayOfColumns) {
    columnString.push(element.join(''));
  }

  for (let line of columnString) {
    if (line.includes(upperCaseWord)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;