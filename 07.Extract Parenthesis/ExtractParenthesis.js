function extract(content) {

  let textElement = document.getElementById(content).textContent;

  let arrFromWortInBrackets = textElement.match(/\([A-Za-z ]+\)/g);
  let arrResultText = [];

  for (const i of arrFromWortInBrackets) {
    arrResultText.push(i.substring(1, i.length - 1));
  }

  return arrResultText.join('; ');
}

