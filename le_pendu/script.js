const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M ', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const mots = ["vrai", "carpe", "poisson", "alpha", "soleil", "nature"];
let i = 0;
let random_mots = mots[Math.floor(Math.random() * mots.length)];
let mot_à_trouver = random_mots.split("");
let lettre = document.querySelector ("#input");
let essai_lettre = "";


console.log(random_mots);
console.log(mot_à_trouver);                                 //! a faire: generer le clavier virtuel 

lettre.addEventListener("keydown", function (e) {

    console.log(e.key);
    essai_lettre = e.key.toLowerCase();

        // if (essai_lettre != random_mots.forEach) {
        //     return false;                              //! a faire: -1 chance et afficher la lettre essayer
        // }

        if (e.key == random_mots.forEach) {             //! n'arrive pas a comparer le mot et la lettre

            console.log("ok");                           //! a faire: reveler la lettre cacher
        }

    lettre.value = "";

});

