const price = parseInt(Math.floor(Math.random() * 100));

console.log(price);

const message = document.createElement("h3");
const decomptenb = document.querySelector("#decompte");
const essai = document.querySelector("#essaiInput");
const reload = document.querySelector("#reload");
const submit = document.querySelector("#valider");
let i = 7;
function createNewH3(text) {
        
    message.textContent = text;
    document.querySelector("#messageh3").appendChild(message);
}

function decompte(i) {
    decomptenb.textContent = i;
        document.querySelector("#decompte").appendChild(message);
    }

function gagner() {

    if (parseInt(essai.value) === price && 0 < i ) {
        console.log("gagner");
        console.log(i);
        createNewH3("GAGNER!!!");
        essai.disabled = true; 
        submit.disabled = true; 
        essai.value = "";
    }
}



function perdu() { 
    
    console.log("perdu");
    console.log(i);
    createNewH3("PERDU, Allez recommencez");
    essai.disabled = true; 
    submit.disabled = true;
    essai.value = "";
}


function propose(input) {

    
    
    if (parseInt(essai.value) < price) 
        
    {
        console.log("grand");
        console.log(i);
        createNewH3("le juste prix est plus grand");
        essai.value = "";

    }
    else if (parseInt(essai.value) > price) {
        console.log("petit");
        console.log(i);
        createNewH3("le juste prix est plus petit");
        essai.value = "";
    } else {
        gagner()
        
    } if (i === 0) {
        perdu ()
    }

decompte("il te reste " + i + " essaie(s)")
}

essai.addEventListener("keydown", function (event) {
if (event.key === "Enter" && i > 0) {
    console.log(event);
    i--
    propose(this);
    // essai.value = "";
} 

})


submit.addEventListener("click", function () {
    if ( i > 0) {
        i--
        propose(this);
        essai.value = "";
    }
})