const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M ', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const mots = ["vrai", "carpe", "poisson", "alpha", "soleil", "nature"];



let random_mots = mots[Math.floor(Math.random() * mots.length)];
let indexDuMot
let mot_eclater = random_mots.split("");
let wordcrypter = "";
let essai_lettre = "";
let verif = ""
let worddecrypter = "";
let keyLowerCase = "";
let wordHtml = [];
let indexDuMot2 = indexDuMot + 1;
console.log(random_mots);
// console.log(mot_eclater);   



wordNb = random_mots.length;
    console.log(wordNb);
    for (let i = 0; i < wordNb; i++) {
        wordHtml.push("*");
         // console.log(wordHtml);
}

// const touch = document.querySelectorAll(".touche");
// console.log(touch);
// let touchValue = touch.value;
// console.log(touchValue);                      //! faire une boucle et dedans le queryselectorall

// touch.addEventListener("clic", function () {
//     console.log(touchValue);
// });

const mot_cacher = document.querySelector(".mot-cacher");
    mot_cacher.textContent = wordHtml.join("")



//? -----------------------------------------------------------------------------
                    //?------function de cryptage------------
//? -----------------------------------------------------------------------------
function crypter() {
    wordcrypter= random_mots.replace(/[a-z]/g, "*")
    // console.log(wordcrypter);
}


//? -------------------------------fin----------------------------------------------
                    //?------function de Décryptage------------
//? --------------------------------------------------------------------------------
function decrypter(i) {
    worddecrypter = wordcrypter.replace(/[*]/, keyLowerCase);
    console.log(worddecrypter);
}
//? -----------------------------------------------------------------------------
                //?------function de tableau mot crypterhtml------------
//? -----------------------------------------------------------------------------
function WordDisable() {
    for ( i = 0; i < wordNb; i++ ) {
        indexDuMot = mot_eclater.indexOf(keyLowerCase, i)      
        console.log(indexDuMot);
    wordHtml.splice(indexDuMot, 1,keyLowerCase);                        //! probleme avec les mots avec 2 fois la meme lettre
    const mot_cacher = document.querySelector(".mot-cacher");           //! boucle avec 2eme verif option de indexOf a partir de
    mot_cacher.textContent = wordHtml.join("");
}}
//? --------------------------------fin---------------------------------------------
                    //?------function de comparaison------------
//? -------------------------------------------------------------------------------- 


document.addEventListener("keydown", function (e) {
    // console.log(e.key);
    keyLowerCase = e.key.toLowerCase();                                     //! a faire: generer le clavier virtuel 
        // console.log(keyLowerCase);
    
    mot_eclater.forEach(function(verif) {
        // console.log(verif);
        // if (keyLowerCase != verif) {
        //     console.log("nop");
        // }
        if (keyLowerCase == verif) {             
            console.log("ok");    
            
            WordDisable();
        } 
    });                                                                 //! a faire: -1 chance et afficher la lettre essayer
});
//? --------------------------------fin--------------------------------------------
                //?------function de comparaison------------
//? -------------------------------------------------------------------------------

crypter();



