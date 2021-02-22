// CHANGE COLOR
let colorBlue = localStorage.getItem('colorBlue');

const color_Orange = document.querySelector('#colorOrange');
const color_Bleu = document.querySelector('#colorBleu');
const monLogo = document.querySelectorAll('#mon_logo');

/*Fonction pour desactiver le mode sombre
	et mettre à null notre laclstorage */
const Orange = ()=>{
	document.body.classList.remove('changeColor');
	// Changer l'image du logo
	for(let i=0; i<monLogo.length; i++){
		monLogo[i].setAttribute('src', 'images/logo2.png');
	}
	localStorage.setItem('colorBlue', null);
}
/*Fonction pour activer le changement de 
	couleur et mettre ajouter la valeur
	colorBleu à notre localstorage */
const Bleu = ()=>{
	document.body.classList.add('changeColor');
	// Changer l'image du logo
	for(let i=0; i<monLogo.length; i++){
		monLogo[i].setAttribute('src', 'images/logo.png');
	}
	localStorage.setItem('colorBlue', 'blue');
}

/* Quand je re*/
if (colorBlue === 'blue') {
  Bleu()
}
/*Si la colorBlue est blue alors on change d'image
	de logo sinon elle l'image de depaet reste */

/*Quand j'aappuie sur l'element bleu, alors la 
	fonction Bleu s'execute */
color_Bleu.addEventListener('click', ()=>{
	Bleu()
});
/*Quand j'appuie sur l'element orange, alors la 
	fonction Orange s'execute */
color_Orange.addEventListener('click', ()=>{
	Orange()
});
