
// let a = 1;
// let b = 2;
// let c = ' белых медведей';
// console.log(a + (b + c));

// let str = 'мои занятия закончились в семь часов вечера';
// function capitalize(str) {
//   return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
// }
// document.writeln(capitalize(str));

//Задача № 7
// let arr;
// let arr1;
// function getObj(arr, arr){
// arr= ['a', 'b', 'c'];
// arr1 = [1, 2, 3];
// let newObj = {};
// for (let i = 0; i < arr.length; i++) {
//     newObj[arr[i]] = arr1[i];
//   }
//   console.log(newObj);
// }

// getObj(arr, arr1);

//Задача №8
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getSubArr(arr, size) {
// let newArr = [];
// for (let i = 0; i < Math.ceil(arr.length/size); i++) {
//   newArr.push(arr.slice((i * size), (i * size) + size));
//   }
//   return newArr;
// }
// console.log(getSubArr(arr, 3));

// Задача №9
// let numbers = [10, 25, 100];

// function sumArray(arr) {
//   let total = 0;
//   arr.forEach(function(element){
//   		console.log(typeof element);
//       if(typeof element === "number"){
//       	total += element;
//       }
//   })
//  return total;
// }
// let sum = sumArray(numbers);
// console.log(sum);

//Задача №10
// let arr = [{name: 'Klaus', age: 15,}, {name: 'Vitas', age: 20,}, {name: 'Gans', age: 18,}, {name: 'Klaus', age: 17,}];
// let subArr = arr.filter((element)=>{
//   return element.age >= 18; 
// });
// console.log(subArr);
// let subArr1 = arr.filter((element)=>{
//   return element.age < 18; 
// });
// console.log(subArr1);

// Задача №11

// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';

// console.log(typeof str); //string
// console.log(typeof num); //number
// console.log(typeof flag); //boolean
// console.log(typeof txt); //string

//Задача №12
// let sumCredit;
// let percentCredit;
// let termCredit;
// let overpayment = (sumCredit, percentCredit, termCredit) => {
//   sumCredit = 1000;
//   percentCredit = 10;
//   termCredit = 5;
//   return (sumCredit / 100 * 10) * 5;
// };
// console.log(`Cумма переплаты по кредиту за 5 лет составит ${overpayment()} белорусских рублей`);

//Задача №13
// let minute;
// let hour;
// let day;
// let secondsInWeek = (sumCredit, percentCredit, termCredit) => {
//   minute = 60;
//   hour = 60;
//   day = 24;
//   return (minute * hour * day) * 7;
// };
// alert(`Сегодня суббота и я узнал, что количество секунд в одной неделе составляет ${secondsInWeek()}`);

// Задача №14
// let a = 10;
// let b = 2;
// let c = 5;

// function getSum(num, num, num){
//   return a + b + c;
// }
// console.log(getSum((a, b, c)));

//Задача №15
