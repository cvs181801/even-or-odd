//create a way to check if the number the user enters is even or odd.

const num = document.getElementById("numberBox");

function checkNum(num) {
    if (num % 2 === 0 ) {
        console.log(`The number is even.`)
    } else {
        console.log(`The number is odd.`)
    }
}

checkNum(8);