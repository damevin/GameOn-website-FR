// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById('modal');
const $registrationForm = document.querySelector('.registration-form');


// Functions
//  -> dédié à l'affichage
// Fonction pour ouvrir et fermer la modal
// Nommage fonctions :
//  -> toggleModal
//  -> displayModal
//  -> hideModal
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle 
}

//  -> dédié aux vérifications
function checkFirstName() {
  const firstNameInput = document.getElementById('first').value;
  const $firstErrorMsg = document.querySelector("#firstErrorMsg");
  const isFirstNameValid = firstNameInput.length < 2

  if (isFirstNameValid) {
    $firstErrorMsg.style.display = "block";
  } else {
    $firstErrorMsg.style.display = "none";
  }

  return isFirstNameValid
}

function isFormValid() {
  return checkFirstName()
}


// Event Listeners
$registrationForm.addEventListener('submit', function(event) {
  event.preventDefault()

  if (isFormValid()) {
    console.log("=====")
    console.log("tu peux passer à l'étape d'après")
    console.log("=====")
  } else {
    console.log("=====")
    console.log("C'est pété, il y a un truc pas clair dans le formulaire")
    console.log("=====")
  }

})

/**
 * querySelector -> ça retourne un élément de type noeud
 * querySelectorAll -> ça retourne un tableau (de noeuds ?)
 */


// À l'événement submit, déclenche la fonction à sa droite


// // Fonction pour que lorsque l'utilisateur clique sur le 
// // background la modal se ferme

// window.onclick = function(event) {
//   if (event.target == modal) {
//      modal.style.display = 'none';
//    }
//  }

// // Alerte lorsque l'utilisateur envoie les informations
// function validate() {
//   let errorFund = this.getErrors()
//   if(errorFund) {
//     return false
//   }
//   else {
//     alert('Merci ! Votre réservation a été reçue.')
//     return true
//   }
// }

// // Fonction pour les champs de la modal

function getErrors() {
  let errorFund = false;
  let first = document.getElementById('first').value;
  let last = document.getElementById('last').value;
  let email = document.getElementById('email').value;
  let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (first.length < 2 ) {
    errorFund = true
    document.getElementById("firstErrorMsg").textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
  } 
  if (last.length < 2 ) {
    errorFund = true
    document.getElementById("lastErrorMsg").textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
  }
  if (email.value.match(mailFormat)) {
    errorFund = true
    document.getElementById("emailErrorMsg").textContent = 'Veuillez entrer un email valide';
  }
  return errorFund
}
