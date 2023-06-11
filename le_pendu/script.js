
let random_tableau_mots = tableau_mots[Math.floor(Math.random() * tableau_mots.length)];
let clean_word = random_tableau_mots.replace(/[é;è;ê;ë]/g,'e');(/[à]/,'a');(/[ï]/,'i'); 
let indexDuMot
let wordHtml = [];
let essais_restant = 7;
let restart;
let touchepresser;
let space = ' ';


console.log("mot a trouver = " + random_tableau_mots);   
console.log("nb de mot total = "+ tableau_mots.length );
console.log(clean_word);
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
for (let i = 0; i < wordNb; i++ ) {                                                 //* la boucle for me permet d'afficher les 2 lettres (ex: les 2 "s" de poisson)
    indexDuMot = clean_word.split("").indexOf(space, i)
    if ( indexDuMot >= 0){
    wordHtml.splice(indexDuMot, 1,space);
}const mot_cacher = document.querySelector(".mot-cacher");
    mot_cacher.textContent = wordHtml.join("")

}};
//* -----------------------------fin------------------------------------------------
                //*------function de Décryptage------------
//* --------------------------------------------------------------------------------

function decrypter(letters) {
    for (let i = 0; i < wordNb; i++ ) {                                                 //* la boucle for me permet d'afficher les 2 lettres (ex: les 2 "s" de poisson)
    indexDuMot = clean_word.split("").indexOf(letters, i)      
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
        
        for (letters of clean_word.split("")){
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
                Looser();
            }
            if (clean_word === wordHtml.join("") ) {
                Winner();
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
        document.querySelector("#image").style.transform="translateX(-183px)";
        document.querySelector("#image").style.transition=" all 2s" 
        console.log("il te reste " + essais_restant + " essais");                            //* animation du pendu
    }                                                                                       //! ne fonctione qu'une fois
    //* changement de couleur des lettre deja essayer
    
//* --------------------------------fin--------------------------------------------
                    //*------function Winner ------------
//* -------------------------------------------------------------------------------
        //* animations you Win + restart  + (++score total)
        function Winner() {

        alert("BRAVO!!! Le mot était " + random_tableau_mots.toUpperCase() + " Vous avez GANGNER, on continue...");
        window.location.reload();
        }
//* --------------------------------fin--------------------------------------------
                        //*------function Looser ------------
//* -------------------------------------------------------------------------------
        function Looser() {
            alert("Le mot était " + random_tableau_mots.toUpperCase() + " Vous avez Perdu, on recomence...");
            window.location.reload();
        }
    
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



