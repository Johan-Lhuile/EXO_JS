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


    if (parseInt(essai.value) === price && 0 < i < 7) {

    }
}



function perdu() { 
    
    if ( i == 0) {}

}


function propose(input) {

    
    
    if (parseInt(essai.value) < price && 0 < i < 7) 
        
    {
        console.log("grand");
        console.log(i);
        createNewH3("le juste prix est plus grand");

    }
    else if (parseInt(essai.value) > price && 0 < i < 7) {
        console.log("petit");
        console.log(i);
        createNewH3("le juste prix est plus petit");
        
    } else if (parseInt(essai.value) === price && 0 < i < 7) {
        console.log("gagner");
        console.log(i);
        createNewH3("GAGNER!!!");
        
    } else if (i === 0) {

        console.log("perdu");
        console.log(i);
        createNewH3("PERDU, Allez recommencez");
    }
// console.log(input.value);
decompte("il te reste " + i + " essaie(s)")
}

essai.addEventListener("keydown", function (event) {
if (event.key === "Enter" && 0 < i < 7) {
    console.log(event);
    
    propose(this);
    i--
    
} else if (i === 0) {
    console.log("perdu");
    console.log(i);
    createNewH3("PERDU, Allez recommencez");
}  
})

submit.addEventListener("clic", function (propose) {
    
        
        propose(this);
        
    }
    );
    

reload.addEventListener("clic", function () {
    
        window.location.reload()
    }
    );
    


    





