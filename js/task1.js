let surname = prompt("Назовите вашу фамилию", "");
if (surname !== "") {
  console.log("surname");
} else {
  alert(prompt("Назовите вашу фамилию", ""));
}
let name = prompt("Назовите ваше имя", "");
if (name !== "") {
  console.log(name);
} else {
  alert(prompt("Назовите ваше имя", ""));
}
let patronymic = prompt("Назовите ваше отчество", "");
if (patronymic !== "") {
  console.log(patronymic);
} else {
  alert(prompt("Назовите ваше имя", ""));
}
let age = prompt("Сколько вам лет", "20");
const reg = new RegExp("^\\d+$");
if (reg.test(age)) {
  alert(age);
}
if (!reg.test(age)) {
  alert(prompt("Сколько вам лет", "20"));
}
let ageInDays = age * 365;
let ageAfterFiveYears = +age + 5;
let sex = confirm("Ваш пол мужской?");
sex = true;
sex = String(sex);
sex = "мужской";
let retiree = confirm("Вы на пенсии?");
retiree = false;
retiree = String(false);
retiree = "нет";
alert(`Ваши Ф.И.О.: ${surname} ${name} ${patronymic}, 
Ваш возраст в годах: ${age}, 
Ваш возраст в днях: ${ageInDays}, 
Через пять лет вам будет: ${ageAfterFiveYears}, 
Ваш пол: ${sex}, 
Вы на пенсии: ${retiree}, 
P.S.: (пенсионный возраст: Ж-55 / М-65)`);

//Task2
let word = prompt("Введите любое русское слово", "");
let numberVowels = word.match(/[аоэиуыеёюя]/gi).length;
alert(numberVowels);

//Анкета без функции!!!
const name = prompt("Enter your name");
while(!name) {
  name = prompt("Enter your name again!!!");
}
const surname = C;
const patronimic = prompt("Enter your patronimic");
const age = +prompt("Your age");
const genderBolean = confirm("Your gender is male"); 
const gender = genderBolean ? "male" : "female";
let pension;
if ((genderBolean && age >= 65) || (!genderBolean && age >= 55)) {
  pension = "yes";
} else {
  pension = "no";
}
alert(`Ваши Ф.И.О.: ${surname} ${name} ${patronymic}, 
Ваш возраст в годах: ${age}, 
Ваш возраст в днях: ${365 * age}, 
Через пять лет вам будет: ${age + 5}, 
Ваш пол: ${gender}, 
Вы на пенсии: ${retiree}, 
P.S.: (пенсионный возраст: Ж-55 / М-65)`);

//Анкета с функцией!!!

const validation = (text, numberField) => {
  if (!numberField) {
  while(!value) {
    const result = prompt(`Try again: ${text} !!!`);
  }
  return result;
}
  else {
let result = +prompt(text);
while (!result || !Number.isNaN(result)) {
  result = +prompt(`Try again: ${text} !!!`)
}
return result;
}
};

const getInfo = (text, numberField = false) => {
  const result = validation(text, numberField);

  return result;
};

const name = getInfo("Enter your name");

const getGenderBolean = () => {
  const result = confirm("Your gender is male");

  return result;
};

const ShowInfo = (name, surname, patronimic, age, gender, pension ) =>{
  alert(`Ваши Ф.И.О.: ${surname} ${name} ${patronymic}, 
  Ваш возраст в годах: ${age}, 
  Ваш возраст в днях: ${365 * age}, 
  Через пять лет вам будет: ${age + 5}, 
  Ваш пол: ${gender}, 
  Вы на пенсии: ${retiree}, 
  `);
}

const init = () => {
  const name = getInfo("Enter your name");
  const surname = getInfo("Enter your surname");
const patronimic = getInfo("Enter your surname");
const age = getInfo("Your age?");
const genderBolean = getGenderBolean();
const gender = genderBolean ? "male" : "female";
const pension = getPension(age, genderBolean);
showInfo(name, surname);
};

const getPension = (age, gender) => {
  if ((gender && age >= 65) || (!gender && age >= 55)) {
    pension = "yes";
  } else {
    pension = "no";
  }
};

init();

const user = {
  firstName: 'Jon',
  lastName: 'Doe',
  age: 19,
  pet: {
    type: 'Rabbit',
  },
  array: [],
};

console.log(user);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.pet);
console.log(user.pet.type);

const numbers = [1, 'qwer', 3];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers.lenth);

const str = 'qwerwers';
const numbers = [1, 2, 3];
numbers.push(str);
numbers.unshift(0);

console.log(numbers);

const numbers = [1, 2, 3];
numbers.pop();
numbers.shift();

console.log(numbers);

const numbers = [1, 2, 3];

for (let index =0; index < numbers.length; index++) {
  console.log('index', index);
  console.log(numbers[index]);
}


// Массив взять из примера!!!
const askAge = +promt('Your age');
for (let index =0; index < data.length; index++) {
  if(askAge === data[index].age) {
  alert(`${data[index].firstName} ${data[index].lastName} ${data[index].age}`);
  console.log(data[index]);
}
}


















