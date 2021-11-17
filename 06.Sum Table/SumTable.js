function sumTable() {

    let productsAndPriceElements = document.querySelectorAll('tr td');
    let totalSumProductElement = document.querySelector('#sum');
    let elemArr = Array.from(productsAndPriceElements);
    let sum = 0;

    for (let i = 1; i < elemArr.length; i += 2) {
        let result = (elemArr[i].textContent);
        sum += Number(result);
    }

   totalSumProductElement.textContent = sum;
}