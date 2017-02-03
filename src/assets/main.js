let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');


function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value === "" || attempt.value === ""){
        setHiddenFields();
    }
    
    let valid  = validateInput(input.value);
    
    if(!valid){
        return false;
    }else{
        attempt.value++;
    }
    
    let result = getResults(input.value);
        
    if(result){
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
        return;
    }else if(!result && attempt.value >= 10){
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
        return;
    }else if(!result && valid){
        setMessage("Incorrect, try again.");
        return;
    }
    
    
}
        
        


//implement new functions
function setHiddenFields(){
    answer.value = Math.floor(Math.random()* (9999 - 0));
    attempt.value = 0;
    let answerString = answer.value.toString();
    while(answerString.length < 4){
        answerString = "0" + answerString;
    }
    answer.value = answerString;
    console.log(answer.value);
}

function setMessage(input){
    let message = document.getElementById("message");
    message.innerHTML = input;
}

function validateInput(input){
    if(input.length === 4){
        return true;
    }else{
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults(input){
        let results = document.getElementById('results');
        let correct = 0;
        let inputArray = input.split("");
        let finalInput = [];
        let answerArr = answer.value.split("");
        
       for(let num = 0, len = inputArray.length; num < len; num++){
            if(inputArray[num] === answerArr[num] ){
                finalInput.push('<span class="glyphicon glyphicon-ok">' + inputArray[num] +'</span>');
                console.log(finalInput);
                correct++;
            }else if(answerArr.indexOf(inputArray[num]) !== -1){
                console.log(num);
                console.log(inputArray[num]);
                finalInput.push('<span class="glyphicon glyphicon-transfer">' + inputArray[num] +'</span>');
                console.log(finalInput);
            }else{
                finalInput.push('<span class="glyphicon glyphicon-remove">' + inputArray[num] +'</span>');
                console.log(finalInput);
            }
        }
        
        let finalResult = finalInput.join(',');
        console.log(finalResult);
        
        results.innerHTML ='<div class="row"><span class="col-md-6">' + finalResult  + '</span><div class="col-md-6">';
        
 
        if(correct === 4){
            return true;
        }else{
            return false;
        }
        
}  


function showAnswer(input){
        let code = document.getElementById("code");
        code.innerHTML = answer.value;
        if(input){
            code.className = "success";
        }else{
            code.className = "failure";
        } 
    }  
    
    function showReplay(){
        let guessing = document.getElementById("guessing-div");
        let replay = document.getElementById("replay-div");
        guessing.style.display = "none";
        replay.style.display = "block";
    }


