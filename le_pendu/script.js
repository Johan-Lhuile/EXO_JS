const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M ', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const mots = ["vrai", "carpe", "poisson", "alpha", "soleil", "nature"];



let random_mots = mots[Math.floor(Math.random() * mots.length)];

let mot_eclater = random_mots.split("");
let wordcrypter = "";
let essai_lettre = "";
let verif = ""
let worddecrypter = "";
let keyLowerCase = "";
let wordHtml = [];
console.log(random_mots);
// console.log(mot_eclater);   




//? -----------------------------------------------------------------------------
                //?------function de cryptage------------
//? -----------------------------------------------------------------------------
function crypter() {

    wordcrypter= random_mots.replace(/[a-z]/g, "*")
        // console.log(wordcrypter);
}
        function afficher() {
            const mot_cacher = document.querySelector(".mot-cacher");
            mot_cacher.textContent = wordcrypter
};
//? -------------------------------fin----------------------------------------------
                //?------function de Décryptage------------
//? -----------------------------------------------------------------------------
function decrypter(i) {

    worddecrypter = wordcrypter.replace(/[*]/, keyLowerCase)
        console.log(worddecrypter);
}

//? --------------------------------fin---------------------------------------------
                //?------function de comparaison------------
//? -----------------------------------------------------------------------------                                                      
document.addEventListener("keydown", function (e) {

    console.log(e.key);

        keyLowerCase = e.key.toLowerCase();                  //! a faire: generer le clavier virtuel 
        console.log(keyLowerCase);

        mot_eclater.forEach(function(verif) {
            // console.log(verif);
            if (keyLowerCase == verif) {             
                console.log("ok");    
                WordDisable();
        
        } 
        });
                                                       //! a faire: -1 chance et afficher la lettre essayer
});

//? -----------------------------------------------------------------------------
                //?------function de tableau mot crypterhtml------------
//? -----------------------------------------------------------------------------
function WordDisable() {

    console.log(mot_eclater.IndexOf(keyLowerCase));

    wordNb = random_mots.length;
    console.log(wordNb);
        for (let i = 0; i < wordNb; i++) {
            wordHtml.push("*");
            console.log(wordHtml);
            }
    
}


//? --------------------------------fin--------------------------------------------
                //?------function de comparaison------------
//? ----------------------------------------------------------------------------

crypter();
afficher();
// decrypter();

