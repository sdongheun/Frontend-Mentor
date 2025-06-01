let button = [];
for(let i = 0; i < 5; i++){
  button[i] = document.querySelector(`#btn${i+1}`);
  button[i].addEventListener('click', function(){
    let string = button[i].textContent;
    alert(string);
  })
}

