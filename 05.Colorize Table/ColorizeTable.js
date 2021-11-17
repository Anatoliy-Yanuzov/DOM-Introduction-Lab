function colorize() {

    let tableElements = document.querySelectorAll('tbody tr');

    for (const elem in tableElements) {
        
        if (Number(elem) % 2 === 1) {
            tableElements[elem].style.backgroundColor = 'teal'
        }
    }
}