const form = document.querySelector(".wrapper-user-information__personal-date"),
  label = form.querySelectorAll("label"),
  input = form.querySelectorAll("input").values,
  btnSubmit = form.querySelector(".wrapper-user-information__button"),
  arrLabel = label.forEach(item => console.log(item)),
  arrInput = input.forEach(item => console.log(item)),
  arrNode = [];
  console.log(arrNode);

console.log(form);
console.log(label);
console.log(input);
console.log(btnSubmit);

arrNode.push(form, label, input, btnSubmit);

console.log(arrNode);
