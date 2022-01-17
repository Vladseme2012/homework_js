const buttons = document.querySelector(".buttons");
const data = document.querySelector(".data");
let result;
let buttonClick;


function drawButtons(result){
  let numbersButton = result.length / 10;
  for (i = 1; i <= numbersButton; i++) {
    buttons.innerHTML += `<button id="${i}">GET ${i}</button>`;
  }  
}

const getData = async () => {
  const buttons = document.querySelector(".buttons");
  const data = document.querySelector(".data");
  result = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  drawButtons(result); 
};

  buttons.addEventListener("click", (event) => {
    buttonClick = event.target.id;
   
    let drawData = result.filter((element, index) => {
      if (index >= buttonClick * 10 - 10 && index <= buttonClick * 10 - 1) {
        return element;
      }
    });
      
    data.innerHTML = "";
      drawData.forEach((element, index) => {
      data.innerHTML += `<p><span>${element.id}</span> - <span>${element.title}</span></p>`;
      });
});

getData();