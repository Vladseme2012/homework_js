const form = document.querySelector(".wrapper-user-information__personal-date");
const label = form.querySelector(".label");
const input = form.querySelector(".input");
const btnSubmit = form.querySelector(".wrapper-user-information__button");
const descriptionUser = document.querySelector('.wrapper-user-information__description-user');
const modalWindow = document.querySelector('.wrapper-user-information__modal-window');
const modalForm = modalWindow.querySelector(".wrapper-user-information__modal-form");
const modalInput = modalWindow.querySelector('#modal-input');
const modalButton = modalWindow.querySelector(".wrapper-user-information__modal-button");
const arrNode = [];

console.log(form);
console.log(label);
console.log(input);
console.log(btnSubmit);

arrNode.push(form, label, input, btnSubmit);
console.log(arrNode);


btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(input.value);
  descriptionUser.innerHTML += `<p>USERNAME: ${input.value}</p>`;
  modalWindow.style.display = 'block';
  modalInput.value = input.value;
  form.reset();
});

modalButton.addEventListener('click', (event) => {
  event.preventDefault();
  descriptionUser.innerHTML = '';
  modalWindow.style.display = 'none';
});





