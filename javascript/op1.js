let x = 10;
let y = 4;
let result;

y += x;
console.log(y);

y -= x;
console.log(y);

y *= x;
console.log(y);

y /= x;
console.log(y);

const currentYear = 2023;
let birthYear;
let age;
age = currentYear - birthYear + 1;

birth = parseInt(prompt("태어난 년도는?"));

if (age < 20){
    alert("성인이 아닙니다");
}

alert(`${currentYear} 년 현재, ${age} 살 입니다`)