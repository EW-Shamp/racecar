//get phrase
//controller function
function getPhrase() {
    let phrase = document.getElementById("phrase").value;
    document.getElementById("alert").classList.add("invisible");
     
    //call render fucntion and passes phrase
    //then stores returned string in revPhrase
    let returnObj = renderPhrase(phrase);
    displayPhrase(returnObj);
}

//render and compare phrase
//logic function(s)
function renderPhrase(phrase) {
    let newPhrase = "";
    let returnObj = {}

    //convert case for comparision in logic function
    phrase = phrase.toLowerCase();

    //removes spaces and special characters
    let regex = /[^a-z0-9]/gi;
    phrase = phrase.replace(regex,"");

    //iterates through phrase and adds characters to
    //newPhrase from last chacter to first
    for (let i = phrase.length - 1; i >= 0; i--) {
        newPhrase += phrase[i];
    }
    
    //checks if phrase is identical to newPhrase
    if (newPhrase === phrase) {
        returnObj.message = "Congrats your phrase is a palindrome";
    } else {
        returnObj.message = "Sorry, your phrase is not a palindrome";
    }

    returnObj.phrase = newPhrase;
    return returnObj;
}

//display phrase
//view function
function displayPhrase(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.message;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.phrase}`;
    document.getElementById("alert").classList.remove("invisible");
}