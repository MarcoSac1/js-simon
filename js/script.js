


// while (generatedNumber.length < 5) {
    //     num = randomNumber (1 ,100);
    //     if (generatedNumber.includes(num) == 0) {
        //         generatedNumber.push(num);
        
        //     }
        //     console.log(generatedNumber)
        // }
        
        // const pageEL = document.querySelector('ul');
        // const visualEl = document.querySelector('h1');
        
        // for (let index = 0; index < generatedNumber.length; index++) {
            //     const pEl = document.createElement('li');
            //     pEl.innerHTML = generatedNumber[index];
            //     pageEL.appendChild(pEl);
            // }
            
            
            // setTimeout(function () {
                //     pageEL.innerHTML ='';
                //     visualEl.innerHTML= '';
                
                //     setTimeout(function() {
                    //         let addedNum =[];
                    
                    //         for (let index = 0; index < generatedNumber.length; index++) {
                        //             let userNumber = Number.parseInt(promt('write the numbers you remember'));
                        //             if(generatedNumber.includes(userNumber) && (addedNum.includes(userNumber)==0)){
                            //                 addedNum.push(userNumber);
                            //             }
                            //         }
                            
                            //         let resoult = 'nice you find out numbers';
                            
                            //         if (addedNum.length == 0) {
                                //             resoult ='Too bad you didn t remember any numbers';
                                //             for (let index = 0; index < generatedNumber.length; index++) {
                                    //                 resoult+= ' ' + generatedNumber[index];
                                    //                 if(index != generatedNumber.length - 1)
                                        //                     resoult +=' ';
                                    
                                    //             }
                                    //         }
                                    //         for (let index = 0; index < addedNum.length; index++) {
                                        //             resoult+= ' ' + addedNum[index];
                                        //             }if(index != addedNum.length - 1){
//                 resoult +=' ';
//         }

//         visualEl.append(resoult);
//     }, 1);
// }, 30000,)


const generatedNumber = [];
const containerEl = document.querySelector('#container');

for (let index = 0; index < 5; index++) {
    generatedNumber.push(getUniqueRandomInt(generatedNumber, 0, 100))
    // console.log(generatedNumber);
    const newNumberEl = document.createElement('article');
    newNumberEl.append(generatedNumber[index]);
    containerEl.appendChild(newNumberEl);
}

setTimeout(function(){
    containerEl.innerHTML = '';
    setTimeout(function(){
        console.log(retrieveGuesses (5));

    }, 0);
    
}, 30000);

function retrieveGuesses(numberOfGuesses) {
    const requestedNumb = [];
    for (let index = 0; index < 5; index++) {
        requestedNumb.push(Number.parseInt(prompt('write the numbers you remember'), 10));
        
    }
    return requestedNumb;
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