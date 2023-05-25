// let i; // undefined
// ---------------------------------1
// i = 10;
// console.log(i);
// for (i = 0; i < 5; i++){ // i = 0이 할당되는 순간 참조변수에 리터럴이 할당
//     console.log("loop " + i);
// }
// console.log(i);

// ---------------------------------2
// let i; // undefined

// i = 0;
// for (; i < 5; i++){
//     console.log("loop " + i);
// }

// ---------------------------------3
// for (let i = 0, j = 1; i < 5;) {
//     console.log("i= " + i);
//     // console.log("j= " + j);
//     i++;
// }

// ---------------------------------4
// for (let i = 0, j = 1; i < 5; i++, j+=5){
//     console.log("i= " + i + ", j= " + j);
// }

// ---------------------------------5
// let students = ["Park", "Kim", "Lee"];

// students.forEach( function(student){
//     console.log(`${student}`);
// });

// students.forEach(student => console.log(student));

// ---------------------------------6
// const students = ["Park", "Kim", "Lee", "Kim"];
// for (let student of students){
//     console.log(student);
// }

// ---------------------------------7 인덱스 가져오기
// const students = ["Park", "Kim", "Lee", "Kim"];
// for (let idx in students){
//     console.log(`${idx} 번째 학생은 ${students[idx]} 입니다`);
// }

// ---------------------------------8 for of
// const students = ["Park", "Kim", "Lee", "Kim"];
// for (let student of students) {
    //     student = "화이팅";
//     console.log(student);
// }
// console.log(students);

// ---------------------------------9 for each
// const students = ["Park", "Kim", "Lee", "Kim"];
// students.forEach( function(student){
//     student = "좋아요"
//     console.log(`${student}`);
// });
// console.log(students);


// ---------------------------------10 for in
const students = ["Park", "Kim", "Lee", "Kim"];
for (let idx in students){
    students[idx] += "화이팅";
    console.log(`${idx} 번째 학생은 ${students[idx]} 입니다`);
}
console.log(students);

// ---------------------------------11 while




// ---------------------------------12