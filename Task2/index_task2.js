/*const divLesson = document.getElementById("lesson");
console.log(divLesson.textContent); //выводит текст
const closestExample = document.querySelector(".closestExample"); //обращение к переменной.
console.log(closestExample.closest(".lesson3")); 
//показыв.родит.

*/

const drawList = (dataType) => {
  const todoSection = document.querySelector("#todo");
  todoSection.innerHTML = "";

  dataType.forEach((item) => {
    console.log(item);
    todoSection.innerHTML += `<div class="card">
    <span>Title:</span>
    <span class="title">${item.title}</span>
    <br/>
    <span>Description:</span>
    <span class="description">${item.description}</span>
    <br/>
     <button class="editButton">EDIT</button>
    <button class="deleteButton">DELETE</button>
  </div>`;
  });
};

const init = () => {
  const todoList = document.querySelector(".todoList");
  const form = document.querySelector("#form");
  const inputTitle = document.querySelector("#inputTitle");
  const inputDescription = document.querySelector("#inputDescription");
  const addCardButton = document.querySelector("#addCardButton");

  const data = {
    todo: [],
    inProgress: [],
    done: [],
  };
  addCardButton.addEventListener("click", (event) => {
    event.preventDefault(); //для отмены перезагрузки и обнуления.

    data.todo.push({
      title: inputTitle.value,
      description: inputDescription.value,
    });

    form.reset();
    drawList(data.todo);
  });

  todoList.addEventListener("click", (event) => {
    console.log(event.target);
    switch (event.target.classList.value) {
      case "deleteButton":
        const card = event.target.closest(".card");
        const title = card.querySelector(".title").textContent;
        const description = card.querySelector(".description").textContent;
        console.log(title, description);

        data.todo.forEach((item, index) => {
          if(item.title === title && item.description === description){
            data.todo.splice(index, 1);
            // drawList(data.todo);
            card.remove;
          };
        });
        break;
      case "editButton":
        console.log(event.target);
      break;
      default:
      break;
    }
  });
};

init();

//card.addEventListener("click", (event) => {
//   if (event.target.id === "deleteBtn") {
//     innerExample.innerHTML += "DELETE";
//     console.log("click delete");
//   }
//   if (event.target.id === "editBtn") {
//     innerExample.innerHTML += "EDIT";
//     console.log("click edit");
//     innerExample.innerHTML = input.value;
//   }
// });

// card.addEventListener("click", (event) => {
//   if (event.target.id === "deleteBtn") {
//     innerExample.innerHTML += "DELETE";
//     console.log("click delete");
//   }
//   if (event.target.id === "editBtn") {
//     innerExample.innerHTML += "EDIT";
//     console.log("click edit");
//     innerExample.innerHTML = input.value;
//   }
// });
// console.log(container.innerHTML);
