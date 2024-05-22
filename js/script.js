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
const visualEl = document.querySelector('h1');

for (let index = 0; index < generatedNumber.length; index++) {
    const pEl = document.createElement('p');
    pEl.innerHTML = generatedNumber[index];
    pageEL.appendchild(pEl);
}


setTimeout(function() {
    let addedNum =[];
    
    for (let index = 0; index < generatedNumber.length; index++) {
        let userNumber = Number.parseInt(promt('write the numbers you remember'));
        if(generatedNumber.includes(userNumber) && (addedNum.includes(userNumber)==0)){
            addedNum.push(userNumber);
        }
    }
})