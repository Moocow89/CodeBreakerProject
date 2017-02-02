let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value === "" || attempt.value === ""){
        setHiddenFields();
    }
    
    let valid  = validateInput(input.value);
    
    function getResults(){
        let correct = 0;
        if(!valid){
            return false;
        }else{
            attempt.value++;
            console.log(attempt.value);
            if(Number(answer.value) === Number(input.value)){
                correct++;
                return true;
            }else{
                return false;
            }
        }
    }  
    
    let result = getResults();
        
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
}
        
        
    
    


//implement new functions
function setHiddenFields(){
    answer.value = Math.floor(Math.random()* (9999 - 0));
    console.log(answer.value);
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




