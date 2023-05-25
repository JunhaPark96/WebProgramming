let fruits = ['사과', "배", '오렌지'];

let result = fruits.splice(2, 0);

console.log(result);
console.log(fruits);
fruits.push(result[0]);
console.log(fruits);