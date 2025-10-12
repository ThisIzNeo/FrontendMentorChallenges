fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const marksSection = document.getElementById("marks");
    const result = document.getElementById("result");
    let total = 0;
    data.forEach((element) => {
      total += element.score;
      marksSection.innerHTML += `<div class="mark"><div class="mark-title"><img src="${element.icon}" alt="icon"> ${element.category}</div> <div class="score">${element.score}/<span>100</span></div></div>`;
      const average = total / data.length;
      result.innerHTML = `${Math.round(average)}`;
    });
  })
  .catch((error) => console.log(error));
