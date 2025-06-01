let sum = 0;
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      // HTML에 넣을 div 생성
      const container = document.querySelector(".container");

      const box = document.createElement("div");
      box.classList.add("box", item.category);

      box.innerHTML = `
    <div class="space-between">
    <img src="${item.icon}" alt="${item.category}" />
    <span class="color">${item.category}</span>
    </div>
    <span><strong>${item.score}</strong> / 100</span>
    `;
      container.appendChild(box);
      sum += item.score;
    });
    // let sum = data.reduce((acc, item) => acc + item.score, 0);
    let avg = (sum / 4).toFixed(0);

    let continueBtn = document.querySelector(".continue");
    let result = document.querySelector(".result");
    continueBtn.addEventListener("click", function () {
      result.textContent = avg;
    });
  });
