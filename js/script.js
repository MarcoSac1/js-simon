const containerEl = document.querySelector('#container');

const generatedNumber = [];
for (let index = 0; index < 5; index++) {
    generatedNumber.push(getUniqueRandomInt(generatedNumber, 0, 100))
    // console.log(generatedNumber);
    
}

prindedNumber(containerEl, generatedNumber);

function prindedNumber(container, numGenerated) {
    for (let index = 0; index < numGenerated.length; index++){
        const newNumberEl = document.createElement('article');
        newNumberEl.append(numGenerated[index]);
        containerEl.appendChild(newNumberEl);
    };

    }

setTimeout(function(){
    containerEl.innerHTML = '';
    let requestedNumb = [];
    
    setTimeout(function(){
        requestedNumb = retrieveGuesses (5);
        console.log(generatedNumber, requestedNumb);
        prindedNumber(containerEl, generatedNumber);
        prindedNumber(containerEl, rightAnswers(generatedNumber, requestedNumb));
    }, 0);
    console.log(requestedNumb);
}, 30000);

function retrieveGuesses(numberOfGuesses) {
    const requestedNumb = [];
    for (let index = 0; index < 5; index++) {
        requestedNumb.push(Number.parseInt(prompt('write the numbers you remember'), 10));
        
    }
    return requestedNumb;
}

function rightAnswers(numbers, guesses) {
    const answers = [];
    for (let index = 0; index < numbers.length; index++) {
        if(guesses.includes(numbers[index]) === true ){
            answers.push(true);
        }else{
            answers.push(false);
        }
    }
    return answers;
}







function getRandomInt(min, max) {
    return Math.floor(Math.random()* ((max + 1 ) - min)) + min;
    
}

function getUniqueRandomInt(uninvitedNumbers, min, max) {
    if(max - min > uninvitedNumbers.lenght){
        return false;
    }
    
    let randomNumber;
    let isFound = false

    while (!isFound) {
        randomNumber = getRandomInt(min, max);
        if(uninvitedNumbers.includes(randomNumber) === false){
            isFound = true;
        }
    }
    return randomNumber;
}