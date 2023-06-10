// Jeu du pendu.


//! ---- Variables -----

// let tableauDeMotsATrouver;
// Créer une constante qui va sélectionner un mot du tableauDeMots; -> index (7)
// Créer une nouvelle constante (LeMotADeviner) qui va récupérer la valeur de l'index choisi auparavant dans tableauDeMots; en tant que mot. -> index.value (voiture)
// 7 tentatives possible pour l'utilisateur. remainingAttempts = 7; Ré-utilisable pour l'affichage -> On peut selection un element HTML et l'afficher dessus. 
// Constante affichageDesAttempts -> document.querySelector(.resultScoreAttempts).textContent;
// Variable LeMotEnVersionCachée.split(''); voiture => *O***** 
// Variable de stockage du mot 
// Variable messageDeFin 
// const buttonRestart (c'est un bouton HTML) .querySelector


//? KISS : Keep it simple stupid. 



//! ---- Fonctions -----

//? function COMPARE(reçoit la valeur du bouton){} remplacer par la lettre "cliquée" si elle figure bien dans le mot

    // .includes() SI la valeur du bouton est égale à UNE des lettres du mot défini aléatoirement ALORS
        // On remplace la lettre de LeMotEnVersionCachée par la valeur du bouton. .replace()
    // SINON si ça correspond pas
        // On retire un remainingAttempts ( -- );
    //}

//? }


//? function startTheGame(){ permet de réinitialiser le remainingAttempts et de générer un nouveau LeMotEnVersionCachée
    // remainingAttempts = 7;
    // affichageDesAttempts = remainingAttempts;
    //  Créer une nouvelle constante (LeMotADeviner) qui va récupérer la valeur de l'index choisi auparavant dans tableauDeMots; en tant que mot. -> index.value (maison)
    // Variable LeMotEnVersionCachée.split(''); maison => ******
//? }

//! ---- Conditions -----
    // Si remainingAttempts === 0 => loose 
        // Afficher messageDeFin "Defaite"
        // Jouer une musique de défaite déclarer une variable de son, new Audio('fichier.mp3') puis son.play();
        //! Cas exceptionnel ou attempts passe a 0, MAIS LA condition en dessous est bonne.
    // SI LeMotEnVersionCachée.join('') === LeMotADeviner 
        // Afficher messageDeFin "Victoire"
        // Jouer une musique de victoire


//! ---- Events -----


//? key.AddEventListener("click") => récupérer la valeur du button. // Button en HTML // - Ce sera avec un querySelectorAll
//? AddEventListener("keydown") => récupérer la valeur du button. // Button en HTML //
//! Ces deux events vont déclencher la fonction ↑

//? buttonRestart.AddEventListener("click") => startTheGame();

