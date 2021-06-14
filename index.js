//create a way to check if the number the user enters is even or odd.

const num = document.getElementById("numberBox");
const goButton = document.getElementById("go-btn");
const parentDiv = document.getElementById("resultDiv");
const renderPhrase = document.createElement('p');

function checkNum(num) {
    if (num % 2 === 0 ) {
        renderPhrase.innerText = '';
        renderPhrase.innerText = `The number is even.`;
        parentDiv.append(renderPhrase);
    } else {
        renderPhrase.innerText = '';
        renderPhrase.innerText = `The number is odd.`;
        parentDiv.append(renderPhrase);
    }
}

//create an event listener that checks the number entered when the user clicks on the 'go' button.
goButton.addEventListener("click", function() {
    return checkNum(num.value);
});


