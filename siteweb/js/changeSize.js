// CHANGE SIZE TEXTE

let fontSize = localStorage.getItem('fontsize');

const fontSelect = document.querySelector('#fontsize');
const valueSelect = fontSelect.value;
const fontSizeTitle = document.querySelector('.title');

const changeSize = (value)=>{
	if (value == 'moyen'){
		fontSizeTitle.style.fontsize = '4.5rem';
		localStorage.setItem('fontsize', 'moyen');
	}else if (value == 'grand') {
		console.log('Grand')
		localStorage.setItem('fontsize', 'moyen');
	}else{
		console.log('Normal')
		localStorage.setItem('fontsize', 'normal' || null );
	}	
}

const BigSize = ()=>{
	fontSizeTitle.style.fontsize = '4.5rem';
	localStorage.setItem('fontsize', 'moyen');
}

fontSelect.addEventListener('onchange', ()=>{
	if (this.valueSelect == 'Moyen') {
		console.log('moyen')
	}if (this.valueSelect == 'Grand') {
		console.log('grand')
	} else {
		console.log('normal')
	}
});