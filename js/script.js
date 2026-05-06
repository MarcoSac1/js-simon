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

setTimeout(async function(){
    containerEl.innerHTML = '';
    let requestedNumb = [];
    
    requestedNumb = await retrieveGuesses(5);
    console.log(generatedNumber, requestedNumb);
    prindedNumber(containerEl, generatedNumber);
    prindedNumber(containerEl, rightAnswers(generatedNumber, requestedNumb));
}, 20000);

function retrieveGuesses(numberOfGuesses) {
    return new Promise((resolve) => {
        const requestedNumb = [];
        let count = 1;
        
        const modalPrompt = document.querySelector('#modalPrompt');
        const numberInput = document.querySelector('#numberInput');
        const submitBtn = document.querySelector('#submitBtn');
        const countText = document.querySelector('#countText');
        
        function showNextInput() {
            if (count <= 5) {
                countText.textContent = `Number ${count} of 5`;
                numberInput.value = '';
                numberInput.focus();
                modalPrompt.classList.add('active');
            } else {
                modalPrompt.classList.remove('active');
                resolve(requestedNumb);
            }
        }
        
        submitBtn.onclick = () => {
            const num = parseInt(numberInput.value, 10);
            if (!isNaN(num)) {
                requestedNumb.push(num);
                count++;
                showNextInput();
            } else {
                alert('Please enter a valid number');
            }
        };
        
        numberInput.onkeypress = (e) => {
            if (e.key === 'Enter') {
                submitBtn.click();
            }
        };
        
        showNextInput();
    });
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