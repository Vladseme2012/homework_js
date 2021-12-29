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
const btnSortYearBootom = table.querySelector('#btn-sort-year-bottom');
const thDateOfEmployment = table.querySelector('#th-dateOfEmployment');
const btnSortDateTop = table.querySelector('#btn-sort-year-top');
const btnSortDateBottom = table.querySelector('#btn-sort-date-bottom');
const thSum = table.querySelector('#th-sum');

const btnDismiss = document.querySelector('#btn-dismiss');
const btnSum = document.querySelector('#btn-sum');
const selectedEmployeesCollection = []; // Массив выбранных сотрудников
let sumSalary = 0;

/* const employeesCollection = [
{
id: 0,  id нужен будет для идентификации сотрудника.  
name:'Ivan',
birthYear: 1978,
hiringDate: "15.04.2010",
salary: 1200,
},
]; */

let employeesCollection = [];
const dataFromLocalStorage = localStorage.getItem('employeesCollection');  //коллекция всех сотрудников

if (dataFromLocalStorage) {
  employeesCollection = JSON.parse(dataFromLocalStorage);  // Преобразуем строку в массив
  drawUI(); // И отрисовываем этот массив
}

function saveData() {
	localStorage.setItem('employeesCollection', JSON.stringify(employeesCollection)); 
}

//console.log("employeesCollection - ", employeesCollection);

function drawUI() {  //Фукнкция, которая обновляет данные в таблице
  tableTbody.innerHTML = '';
  employeesCollection.forEach((item, index) => {
  	const newRow = tableTbody.insertRow(tableTbody.rows.length);    
    newRow.innerHTML = `<tr>
    <td><input type="checkbox" class="select-employee-checkbox" data-id="${item.id}"></td>
    <td>${item.name}</td>
    <td>${item.birthYear}</td>
    <td>${item.hiringDate}</td>
    <td>${item.salary}</td>
  </tr>`;
  })
  
   subtitleStaff.innerHTML = `Количество сотрудников: ${employeesCollection.length}`;
   subtitleSum.innerHTML = `Сумма $: ${sumSalary}`; 
}

addEmloyeeBtn.addEventListener('click', (event) => { // Добавление сотрудника
  const newEmployee = {
    id: employeesCollection.length,
    name: inputName.value,
    birthYear: inputYear.value,
    hiringDate: inputDate.value,
    salary: inputSalary.value,
  };  
  
  employeesCollection.push(newEmployee);
 
	saveData();
  inputName.value = '';
  inputYear.value = '';
  inputDate.value = '';
  inputSalary.value = '';

  drawUI();
});
  
table.addEventListener('click', (event) => {
  if (event.target.className == "select-employee-checkbox"){
    if (event.target.checked) {
      selectedEmployeesCollection.push(event.target.dataset.id);
    }
    
    if (event.target.checked === false) {
			selectedEmployeesCollection.splice(selectedEmployeesCollection.indexOf(event.target.dataset.id), 1);
		}
  }
});

btnDismiss.addEventListener('click', (event) => {
  const lostEmployees = employeesCollection.filter(item => {                // {id: 0, name: 'Вася'
  
  	const result = String(selectedEmployeesCollection.find(element => {  	 // 2
    	return String(item.id) === element;
    }));

    if (result === 'undefined') return true;
    
    return false;
    
  });
  employeesCollection = [...lostEmployees];
  saveData();
  sumSalary = 0;
  drawUI();   
}); 

btnSum.addEventListener('click', (event) => {
//selectedEmployeesCollection = ["0", "2", "4"];
sumSalary = employeesCollection.reduce((acc, current) => {  // current - {id: 0, name: 'Вася', salary: 1200,}
 
  if (selectedEmployeesCollection.find(element => element === String(current.id) )) {
    return acc + Number(current.salary);
  } 
  
  return acc;
}, 0);

drawUI();
});

btnSortYearTop.addEventListener('click', (event) => {
	employeesCollection.sort((a, b) => a.birthYear - b.birthYear);
  drawUI();
});

 
btnSortYearBootom.addEventListener('click', (event) => {
	employeesCollection.sort((a, b) => a.birthYear - b.birthYear).reverse();
   drawUI();
});

btnSortDateTop.addEventListener('click', (event) => {
  employeesCollection.sort((a, b) => new Date(a.hiringDate) - new Date(b.hiringDate));
  drawUI();
}); 


btnSortDateBottom.addEventListener('click', (event) => {
  console.log(event);
	employeesCollection.sort((a, b) => new Date(a.hiringDate) - new Date(b.hiringDate)).reverse();
  drawUI();
});