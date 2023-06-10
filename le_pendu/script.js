
let random_tableau_mots = tableau_mots[Math.floor(Math.random() * tableau_mots.length)];
let indexDuMot
let wordHtml = [];
let essais_restant = 7;
let restart;
let touchepresser;

console.log("mot a trouver = " + random_tableau_mots);   
console.log("nb de mot total = "+ tableau_mots.length );

//* --------------------------------------------------------------------------------
        //*------function de Cryptage et affichage du mot a trouver------------
//* --------------------------------------------------------------------------------
function crypter() {
wordNb = random_tableau_mots.length;
    console.log("nombre de lettre = " + wordNb);
    for (let i = 0; i < wordNb; i++) {                                                  //! A ameliorer... ( voir pour les espaces a exclure et les afficher)
        wordHtml.push("*");
         // console.log(wordHtml);
}
const mot_cacher = document.querySelector(".mot-cacher");
    mot_cacher.textContent = wordHtml.join("")
}

//* -----------------------------fin------------------------------------------------
                //*------function de Décryptage------------
//* --------------------------------------------------------------------------------

function decrypter(letters) {
    for (let i = 0; i < wordNb; i++ ) {                                                 //* la boucle for me permet d'afficher les 2 lettres (ex: les 2 "s" de poisson)
    indexDuMot = random_tableau_mots.split("").indexOf(letters, i)      
    // console.log(indexDuMot);

    if ( indexDuMot >= 0){
       wordHtml.splice(indexDuMot, 1,letters);                                          //! .splice  si -1 recommence par la fin donc if index >= 0
        const mot_cacher = document.querySelector(".mot-cacher");                       //! index of -1 si pas trouver
        mot_cacher.textContent = wordHtml.join("");
                                                                                        
    }
}  
};
//* -----------------------------fin---------------------------------------------
                //*------function de Comparaison------------
//* -----------------------------------------------------------------------------
                                                                        
    crypter();
        document.addEventListener("keydown", function (touchepresser) {
        let essai = false;
        console.log(touchepresser);
        for (letters of random_tableau_mots.split("")){
            if (letters.toLowerCase() === touchepresser.key) {
                console.log("ok");
                
                decrypter(letters);
                good();
                essai = true;
            } 
            }                                                                              
        
            if ( essai === false) {
            mauvaiseLettre();
                
            console.log(touchepresser.key);
            document.querySelector(".touche").style.color = "red"
            }
            if (essais_restant === 0) {
                Looser()
            }    
        });
//* --------------------------------fin--------------------------------------------
                //*------function de bonne lettre  ------------
//* -------------------------------------------------------------------------------
    function good() {    
        document.querySelector(".touche").style.color = "green"
                                                                                            //* changement de couleur des lettre deja essayer
    }
//* --------------------------------fin--------------------------------------------
                //*------function de mauvaise lettre ------------
//* -------------------------------------------------------------------------------
    function mauvaiseLettre() {
        essais_restant --;
        
        console.log("il te reste " + essais_restant + "essais");                            //* animation du pendu
    }
    //* changement de couleur des lettre deja essayer
    
//* --------------------------------fin--------------------------------------------
                    //*------function Winner ------------
//* -------------------------------------------------------------------------------
        //* animations you Win + restart  + (++score total)
        function Winner() {
        alert("BRAVO!!! Vous avez GANGNER, on continue...");
        window.location.reload();
        }
//* --------------------------------fin--------------------------------------------
                        //*------function Looser ------------
//* -------------------------------------------------------------------------------
        function Looser() {
            alert("Vous avez Perdu, on recomence...");
            window.location.reload();
        }
    //* animations you LOOSE + restart
//* --------------------------------fin--------------------------------------------
                        //*------function Restart ------------
//* -------------------------------------------------------------------------------
    restart = document.querySelector('#restart');
    restart.addEventListener('click', function() {
            window.location.reload();
    });
    
//* -------------------------------fin----------------------------------------------
                //*------function pour clic clavier virtuel------------
//* --------------------------------------------------------------------------------



