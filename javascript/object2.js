// 상수 객체
const kim = {
    age : 20,
    firstName : "John",
    latName : "kim",
    address : "Seoul"
};


console.log(typeof(kim.address));
console.log(kim.age);

// 상수 객체 변경 불가
kim = {
    age : 20,
    firstName : "namhoon",
    latName : "kim",
    address : "Seoul"
};

let f = parseFloat(prompt("변환할 화씨 온도"));
let c;

c = (f - 32) / 1.8;
alert(`화씨 ${f}도는 섭씨 ${c}도 입니다.`)