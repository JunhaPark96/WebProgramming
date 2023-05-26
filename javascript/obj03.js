// const test = {
//     // 선언적 익명 함수
//     foo : function() {
//         console.log("foo 메소드의 this");
//         // 자신의 메소드를 가지고 있는 상위 객체(test)를 가리킴
//         console.log(this);
//     },

//     // 함수도 객체이다? -> 자바스크립트만의 특징
//     // 화살표 함수 - 화살표는 test의 this를 가리키지 않음 -> 자기 자신의 함수의 객체를 가리킴
//     bar: () => {
//         console.log("bar 메소드의 this");
//         console.log(this);
//     }
// }
// test.foo(); // test의 객체 this가 출력
// test.bar(); // 함수의 this 출력

// --------------------------객체 인스턴스

// let today = new Date();
// console.log(today);
// console.log(today.toLocaleDateString());

// --------------------------Math 객체
// console.log(Math.floor(Math.random() * 100 + 1));
// console.log(Math.random() * 100 );
// console.log(Math.random() * 100 + 1);

// --------------------------얕은 복사
const product = ['우유', '식빵'];
const goods = product;
goods.push('고구마');
goods.push('토마토');

console.log(product);
console.log(goods);

// 깊은 복사
const food = [...product];
console.log(food);

food.push('토마토');
console.log(food);
console.log(product);