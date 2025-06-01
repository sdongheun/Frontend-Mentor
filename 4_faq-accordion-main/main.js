let select = document.querySelectorAll(`.select`);
let hidden = document.querySelectorAll(`.hidden`);
let img = document.querySelectorAll(`.img`);
for(let i = 0; i < 4; i++){
  select[i].addEventListener('click', function(){
    const isPlus = img[i].src.includes('plus');
    hidden[i].classList.toggle(`hidden`);
    img[i].src = isPlus ? './assets/images/icon-minus.svg'
    : "./assets/images/icon-plus.svg" ;
    
  })
}
