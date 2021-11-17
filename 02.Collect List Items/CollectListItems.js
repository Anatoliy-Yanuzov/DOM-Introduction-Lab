function extractText() {
    
    let elementsItems = document.querySelector('#items').textContent;
    let elementResult = document.getElementById('result')

    elementResult.textContent = elementsItems
}