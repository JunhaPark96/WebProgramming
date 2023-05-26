// const pet ={
//     name: '구름',
//     // 프로퍼티에 익명함수를 할당 -> 자바스크립트의 객체 메소드 선언방법
//     eat: function(food){
//         console.log(this.name + "이 " + food + '를 냠냠');
//     }
// }
// pet.eat('닭');

// const student = {}; // 빈 객체
// student.name = "박태현";
// student.hobby = "술먹기";
// student.dream = "일부다처제";

// console.log(student);

// // 객체 속성 삭제
// delete student.hobby;
// console.log(student);

const student = {};
const poly = [
    ['박태현', '꿈의 개발자'],
    ['박준하', '최고 연봉자'],
    ['정수영', '노벨 개발자']
];
let columns = ["name", "dream", 'score', 'aaa'];
// poly에 있는 2차원 배열을 객체로 변환하는 코드 작성
// item: poly의 key 값
for (let item of poly){
    let col = {};
    for (let i = 0; i < columns.length; i++){
        // col 객체에 column에 맞는 데이터 삽입
        col[columns[i]] = item[i];
        if (item[i] == undefined) {
            delete col[columns[i]];
            // col[columns[i]] = "";
        }
    }
    // student의 key 지정
    let key = item[0];
    student[key] = col;
}

console.log(student);