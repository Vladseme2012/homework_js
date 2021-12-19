const form = document.querySelector('#form');
const inputName = form.querySelector('#input-name');
const inputYear = form.querySelector('#input-year');
const inputDate = form.querySelector('#input-date');
const inputSalary = form.querySelector('#input-salary');
const addEmloyeeBtn = form.querySelector('#btn');

const subtitleStaff = document.querySelector('#staff');
const subtitleSum = document.querySelector('#sum');

const table = document.querySelector('#table');
const tableTbody = table.getElementsByTagName('tbody')[0];
const tr = table.querySelector('#table');
const checkBox = table.querySelector('#check-box');
const thName = table.querySelector('#th-name');
const thYearOfBirth = table.querySelector('#th-yearOfBirth');
const btnSortYearTop = table.querySelector('#btn-sort-year-top');
const btnSortYearBottom = table.querySelector('#btn-sort-year-bottom');
const thDateOfEmployment = table.querySelector('#th-dateOfEmployment');
const btnSortDateTop = table.querySelector('#btn-sort-date-top');
const btnSortDateBottom = table.querySelector('#btn-sort-date-bottom');
const thSum = table.querySelector('#th-sum');

const btnDismiss = document.querySelector('#btn-dismiss');
const btnSum = document.querySelector('#btn-sum');


let employeesCollection = [];
const dataFromLocalStorage = localStorage.getItem('employeesCollection');  //коллекция всех сотрудников
  
if (dataFromLocalStorage) {
  employeesCollection = JSON.parse(dataFromLocalStorage); // Преобразуем строку в массив
  drawUI(); // И отрисовываем этот массив
}

  
function drawUI() {  //Фукнкция, которая обновляет данные в таблице
  tableTbody.innerHTML = '';
  employeesCollection.forEach((item, index) => {
  const newRow = tableTbody.insertRow(tableTbody.rows.length);    
    newRow.innerHTML = `<tr>
    <td><input type='checkbox' data-id="${item.id}"></td>
    <td>${item.name}</td>
    <td>${item.birthYear}</td>
    <td>${item.hiringDate}</td>
    <td>${item.salary}</td>
  </tr>`;
  });
  
   subtitleStaff.innerHTML = `Количество сотрудников: ${employeesCollection.length}`;
}
  

addEmloyeeBtn.addEventListener('click', (event) => {
  const newEmployee = {
    id: employeesCollection.length,
    name: inputName.value,
    birthYear: inputYear.value,
    hiringDate: inputDate.value,
    salary: inputSalary.value,
  };  
  
  employeesCollection.push(newEmployee);
 
	localStorage.setItem('employeesCollection', JSON.stringify(employeesCollection));  
  drawUI();
});
  
  
  
  
 let selectedEmploees = [];  // Массив с ИДЕНТИФИКАТОРАМИ выбранных сотрудников
  
// checkBox.addEventListener('change', (event) => {
// 	console.log(event.target.dataset.id);
//   // selectedEmploees.push(dataset.id);
// });
  

// fireBtn.addEventListener('change', (event) => {
// 	employeesCollection.forEach((item, index) => {
//   	  if (selectedEmploees.find(item.id)) {
//       	employeesCollection.splice(index, 1);
//       }
//   })
  
//   // тут сохранить в стор
// }); 



