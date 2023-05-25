
const r = 10;

console.log(typeof(r));
console.log(`넓이 = ${3.14 * r * r}`);
console.log(`둘레 = ${2 * 3.14 * r}`);

let name = "백두산"
classroom = 205
console.log(`${name}님, ${classroom}호 강의실로 입장하세요`)
console.log(name + "님," + classroom + "호 강의실로 입장하세요")

let age = 21;
if (age < 52){
    alert(age + "는 52보다 작습니다")
}

let id = Symbol()
const member = {
    name : "Kim",
    [id] : 12345
}
