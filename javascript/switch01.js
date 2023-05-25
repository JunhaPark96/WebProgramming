
// switch (name) {
//     case 'helllo':
//         console.log("hello world");
//         break;
//     case 'park':
//         console.log("박태현화이팅");
//         break;
// }

let obj = {
    hello: function () {
        console.log("hello world");
    },
    park: function () {
        console.log("park");
    }
}
// 디자인 패턴 - 상태 패턴
let name = "park";
obj[name]();