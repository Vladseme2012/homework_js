
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
// let age = 41;
// alert(`Мне ${age} лет`);

// Задача №16
// let a = 2;
// let b = 6;
// let c = 12;
// let d = 24;
// let e = 48;

// if (a>b && a>c && a>d && a>e)
// {
//     console.log(a);
// }
// else if (b>a && b>c && b>d && b>e)
// {
//     console.log(b);
// }
// else if (c>a && c>b && c>d && c>e)
// {
//     console.log(c);
// }
// else if (d>a && d>c && d>b && d>e)
// {
//     console.log(d);
// }
// else
// {
//     console.log(e);
// }

//Задача №17

// let onlineStoreUser = {
//   name: 'Vlad',
//   email: 'www@yandex.ru',
//   likeFruit: 'yes',
//   indicatorIq: 120,
//   }
  
  // console.log(onlineStoreUser);

  // Задача №18

  // for(let i = 0; i <= 15; i++){
  //   if(i % 2 === 0 && i !==0){
  //   console.log(`${i} это четное число`);
  //   } else{
  //   console.log(`${i} это нечетное число`);
  //   }
    
  //   } 

  // Задача №19

  let users = {
    user1: {
      name: 'Вася',
      test: 80,
    },
    user2: {
     name: 'Зина',
     test: 77,
   },
 
   user3: {
     name: 'Катя',
     test: 88,
   },
 
   user4: {
     name: 'Петя',
     test: 95,
   },
 
   user5: {
     name: 'Вова',
     test: 57,
   },
 }
 
 for(let user in users){
 subUser = users[user];
 
 for(let key in subUser){
 if(subUser[key].test > 90){
 subUser.test = 5;
 } else if(subUser[key].test > 80){
 subUser.test = 4;
 } else if(subUser[key].test > 70){
 subUser.test = 3;
 } else if(subUser[key].test > 60){
 subUser.test = 2;
 } else{
 subUser.test = 1;
 }
 console.log(subUser[key]);
 }
 };

// Задача №20

// for(let i = 1; i < 100; i++){
//   if(i % 3 === 0){
//   console.log(`${i} Fizz`);
//   } else if(i % 5 === 0){
//   console.log(`${i} Buzz`);
//   } else if(i % 3 === 0 && i % 5 === 0){
//   console.log(`${i} FizzBuzz`);
//   } else{
//   console.log(`${i} Zero`);
//   }
// }

// Задача №21
// let arr = [1, 2, 3, 4, 55];
// let newArr = [];

// for(let i of arr){
// newArr.push(i);
// }

// console.log(newArr);

// Задача №22
// function filterNum(arr){

  // let result = arr.filter(function(elem) {
  //   return elem % 2 !== 0;
  // });
  // return result;
  // }
  
  // filterNum([1, 2, 3, 4]);

  // function  squareNum(arr){

  //   let result = arr.map(function(elem) {
  //     return elem * elem;
  //   });
  //   return result;
  //   }
    
  //   squareNum([1, 2, 3, 4]);

  // function testString(arr){ 

  //   let result = arr.some(function(elem) {
  //     if (typeof elem == 'string') {
  //       return true;
  //     } else {
  //       return false;
  //     }
    
  //   });
  //   return result;
  //   }
        
  //   testString([1, 2, 3, 4, 'test']);

  // function getAges(arr){
// let result;
// for(let element of arr){
// let obj = arr[element];
// for(let key in obj){
// if(typeof obj[key] === 'number'){
// result = (obj[key]);
// } else {
// console.log('Ключей с такими значениями не обнаружено');
// }
// }
// }
// return console.log(result);
// }

// getAges([
// {name: 'Ivan', age: 23,},
// {name: 'Victor', age: 33,},
// ]);

// Задача №23

// function getAges(arr){
//   for (let elem of arr) {
//     let subObj = elem;
    
//     for (let subKey in subObj) {
//   if(typeof subObj[subKey] === 'number'){
//     console.log(subObj[subKey]);
//       }
//         }
//               }
//   }
  
//   let arr = [
//   {name: 'Ivan', age: 12,}, 
//   {name: 'Petr', age: 30,}, 
//   {name: 'Victor', age: 40,}
//   ];
  
//   getAges(arr);

// Задача №24
function keysReverse(obj){
  return Object.entries(obj).reduce((acc, [value,key]) => {
      acc[key] = value;
      return acc;
  }, {})};
  
  
  
  keysReverse({
    "1": "first",
    "2": "second",
    "3": "third"
  });  

  const myObj = {
    1: 1,
    2: 2,
    3: 3,
    }
    
    Object.values(myObj).forEach(value =>{
    console.log(value * 2);
    });
