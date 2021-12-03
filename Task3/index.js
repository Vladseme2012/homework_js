'use strict';
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
  const modalWrapper = document.querySelector(".wrapper");
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

    todoList.addEventListener("click", (event) => {
      switch (event.target.classList.value) {
        case "deleteButton":
          const card = event.target.closest(".card");
          const title = card.querySelector(".title").textContent;
          const description = card.querySelector(".description").textContent;
          console.log(title, description);

          data.todo.forEach((item, index) => {
            if (item.title === title && item.description === description) {
              data.todo.splice(index, 1);
              drawList(data.todo);
            }
          });

          break;
        case "editButton":
          console.log(modalWrapper);
          modalWrapper.style.display = "block";
          const closeButton = document.querySelector("#closeButton");
          closeButton.addEventListener("click", () => {
            modalWrapper.style.display = "none";
          });

          const card2 = event.target.closest(".card");
          const title2 = card2.querySelector(".title").textContent;
          const description2 = card2.querySelector(".description").textContent;    
          
          const input1 = document.querySelector(".input1");
          const input2 = document.querySelector(".input2");

          input1.value = title2;
          input2.value = description2;

          const submitButton = document.querySelector('.submitButton');

          submitButton.addEventListener('click', () =>{
            data.todo.forEach((item, index) => {
              if (item.title === title2 && item.description === description2) {
                data.todo.splice(index, 1, {title: input1.value, description: input2.value},);
                drawList(data.todo);
                modalWrapper.style.display = "none";
              }
            });
          });

          console.log(event.target);
          break;
        default:
          break;
      }
    });
  });
};

init();


