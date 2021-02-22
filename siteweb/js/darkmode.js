// Dark mode
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#theme_switch');
const darkModeSwitch = document.querySelector('.switch');

/*Fonction pour activer le mode sombre
	et mettre en active le localstorage */
const enableDarkMode = () =>{
	document.body.classList.add('darkmode');
	darkModeSwitch.style.transform = 'translateX(20px)';
	localStorage.setItem('darkMode', 'enabled');
}

/*Fonction pour desactiver le mode sombre
	et mettre à null notre laclstorage */
const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  darkModeSwitch.style.transform = 'translateX(0px)';
  localStorage.setItem('darkMode', null);
}
/*Si la page à déja été visité, et que l'utilisateur
	avait activer le mode sombre alors quand il reload 
	la page, le mode active reste activer */
if (darkMode === 'enabled') {
  enableDarkMode();
}

/*Quand j'appui sur l'element #theme_switch, je regarde
  d'abord si mon localstorage n'est pas activer pour lancer
  la fonction enableDarkMode sinon je lance la fonction
  disableDarkMode */
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});