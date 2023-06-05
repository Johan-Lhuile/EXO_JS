const price = parseInt(Math.floor(Math.random() * 100));

console.log(price);

const message = document.createElement("h3");

const essai = document.querySelector("#essaiInput");

function createNewH3(text) {
        
    message.textContent = text;
    document.querySelector("#messageh3").appendChild(message);
}

function decompte(text) {
    message.textContent = i;
        document.querySelector("#messageh3").appendChild(message);
    }


function action(input) {

    for (let i = 0; i <= 7; i++) {
    
    
    if (parseInt(essai.value) < price && i < 7) 
        
    {
        console.log("grand");

        createNewH3("le juste prix est plus grand")
    }
    else if (parseInt(essai.value) > price && i < 7) {
        console.log("petit");
        
        createNewH3("le juste prix est plus petit");

    } else if (parseInt(essai.value) === price && i < 7) {
        console.log("gagner");
        
        createNewH3("GAGNER!!!");
    } else {
        console.log("perdu");
        
        createNewH3("PERDU, Allez recommencez");
    }
console.log(input.value);
}}

essai.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log(event);
    action(this);
    // action(event.target);
  }
});


    





