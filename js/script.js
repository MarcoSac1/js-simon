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