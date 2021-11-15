let surname = prompt('Назовите вашу фамилию', '');
if(surname !== '') {
  console.log('surname');
}
else{
  alert(prompt('Назовите вашу фамилию', ''));
}
let name = prompt('Назовите ваше имя', '');
if(name !== '') {
  console.log(name);
}
else{
  alert(prompt('Назовите ваше имя', ''));
}
let patronymic = prompt('Назовите ваше отчество', '');
if(patronymic !== '') {
  console.log(patronymic);
}
else{
  alert(prompt('Назовите ваше имя', ''));
}
let age = prompt('Сколько вам лет', '20');
const reg = new RegExp('^\\d+$');
if (reg.test(age)) {
alert(age);
}
if (!reg.test(age)) {
alert(prompt('Сколько вам лет', '20'));
}
let ageInDays = age * 365;
let ageAfterFiveYears = +age + 5;
let sex = confirm('Ваш пол мужской?');
sex = true;
sex = String(sex);
sex = 'мужской';
let retiree = confirm('Вы на пенсии?');
retiree = false;
retiree = String(false);
retiree = 'нет'
alert(`Ваши Ф.И.О.: ${surname} ${name} ${patronymic}, 
Ваш возраст в годах: ${age}, 
Ваш возраст в днях: ${ageInDays}, 
Через пять лет вам будет: ${ageAfterFiveYears}, 
Ваш пол: ${sex}, 
Вы на пенсии: ${retiree}, 
P.S.: (пенсионный возраст: Ж-55 / М-65)`);

//Task2
let word = prompt('Введите любое русское слово', '');
let numberVowels = word.match(/[аоэиуыеёюя]/gi).length;
alert(numberVowels);