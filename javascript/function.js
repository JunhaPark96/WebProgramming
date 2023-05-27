// --1
// function hello(){
//     console.log("안녕하세요");
// }

// hello();

// --2 greeting(); 함수를 선언 보다 먼저 쓸 수 없음
// greeting();
// let greeting = function(){
//     console.log("반갑습니다");
// }


// --3 객체의 생성으로 함수를 생성하는 것이 원칙이지만
// let add = new Function("x, y", "return x+y");
// console.log(add(1, 2));

// // function 키워드를 제공
// function plus(x, y){
//     return x + y;
// }
// console.log(plus(1, 2));

// --4
// let greeting = function() {
//     console.log("반갑습니다");
// }
// console.log(typeof(greeting)); // function도 담을 수 있다

// --5
// 함수는 이름과 동시에 값을 전달 받음 -> 전달받는 변수를 매개변수(parameter)라 부름
// function minus(a, b){
//     return a - b;
// }
// // 값을 전달 -> 인수(argument)
// console.log(minus(1, 2));

// parameter와 argument의 연결고리를 확인하자

// --6
// function sum(){
//     let sum = arguments[0] + arguments[1] + arguments[2]; 
//     console.log(sum);
// }
// sum(10, 20, 30);

// --7
// function addNum(...numbers){
//     let sum = 0;
//     for (let num of numbers){
//         sum += num;
//     }
//     return sum;
// }

// console.log(addNum(1, 2));
// console.log(addNum(1, 3, 5, 7, 8));

// --8 콜백함수
// function print(i){
//     console.log(i + "번째 함수 호출");
// }

// function callThreeTimes(callback){
//     for (let i = 0; i < 3; i++){
//         // 함수를 매개변수로 받는 경우는 매개변수명 뒤에 ()로 호출 사용
//         callback(i);
//     }
// }


// callThreeTimes(print);

// --9 
// callThreeTimes(function(i){
//     console.log(i + ' 번째 함수 호출');
// });


let i = 1994;
let now = new Date();
while (i < now.getFullYear()) {
    console.log(i);
    i += 1;
}


