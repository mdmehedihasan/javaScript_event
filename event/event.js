
//function call
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

//fuction direct
const yellow = document.getElementById('yellowBtn');
yellow.onclick = makeYellow;
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

//annonymus function
const blue = document.getElementById('blueBtn');
blue.onclick = function blueButton() {
    document.body.style.backgroundColor = 'blue';
}

//handle by addeventlistner
const goldenButton = document.getElementById('rodBtn');
goldenButton.addEventListener('click', rodButton)
function rodButton() {
    document.body.style.backgroundColor = 'goldenrod';
}