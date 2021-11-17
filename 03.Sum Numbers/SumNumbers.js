function calc() {

    let numFirstElement = document.querySelector('#num1');
    let numSecondElement = document.querySelector('#num2');

    firstNum = Number(numFirstElement.value);
    secondNum = Number(numSecondElement.value);
    let sum = firstNum + secondNum;
    
    document.querySelector('#sum').value = sum;

}
