let student = { name: "abc", major: "bdc", grade: 2 }
document.write(student.major);
document.write(typeof (student));
let json = JSON.stringify(student)
document.write(json);
document.write(typeof (json));

let obj = JSON.parse(json);
document.write(obj);
document.write(typeof (obj));


