let submit = document.querySelector(".button");
let main_first = document.querySelector(".main-first");
let main_second = document.querySelector(".main-second");
let rating = document.querySelector(".rating");
submit.addEventListener("click", function () {
  if (num == null) {
    alert("숫자를 선택해주세요");
  } else {
    main_first.classList.add("none");
    main_second.classList.remove("none");
    rating.textContent = `You selected ${num + 1} out of 5`;
  }
});

let circle = document.querySelectorAll(".circle");
let select = false;
let num;
for (let i = 0; i < 5; i++) {
  circle[i].addEventListener("click", function () {
    if (select == true) {
      circle[num].classList.remove("selected");
      circle[i].classList.add("selected");
    } else {
      circle[i].classList.add("selected");
    }
    num = i;
    select = true;
  });
}
