function randomNumber(min, max) {

    return Math.floor(Math.random()* (max - min) + min);
    
}

let generatedNumber = [];
while (generatedNumber.length < 5) {
    num = randomNumber (1 ,500);
    if (generatedNumber.includes(num) === 0) {
        generatedNumber.push(num);
        
    }
    
}

const pageEL = document.getElementsByClassName('.list');
const ùù


for (let index = 0; index < generatedNumber.length; index++) {
    const pEl = document.createElement('p');
    pEl.innerHTML = generatedNumber[index];
    pageEL.appendchild(pEl);
}