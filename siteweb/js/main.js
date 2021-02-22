// SLIDER
$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev')
});

// bOUTON ACCESSSIBILITE
const access = document.querySelector('#access');
access.addEventListener('click', ()=>{
  let menuAccess = document.querySelector('#menu_access');
  let active = menuAccess.classList.toggle('active');

  // button accessibilité
  const icon = document.querySelector('.icon_access');
  if (active) {
    icon.classList.remove('fa-universal-access');
    icon.classList.add('fa-times');
  }else{
    icon.classList.remove('fa-times');
    icon.classList.add('fa-universal-access');
  }
});
