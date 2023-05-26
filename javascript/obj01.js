// 객체의 선언은 중괄호로
const obj = {
    product: '7D 건조 망고',
    type: '당절임',
    ingredient: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    source: '필리핀'
};

// console.log(obj);

// // 프로퍼티 접근1 - 기본 사용법
// console.log(obj.product);
// console.log(obj.type);
// console.log(obj.ingredient);
// console.log(obj.source);

// console.log('===========================================');
// // 프로퍼티 접근2 - 동적 프로그래밍에 유리
// console.log(obj['product']);
// console.log(obj['type']);
// console.log(obj['ingredient']);
// console.log(obj['source']);

// // 무엇이 유리한가?
// let name = 'product';
// // 키 접근을 할 때 쿠션을 통하여 간접적으로 프로퍼티에 접근할 수 있음
// console.log(obj[name]);

// name = "type";
// console.log(obj[name]);

// 배열의 인덱스 값을 가져오는 for in
for (let key in obj){
    console.log(key);
    // 모든 프로퍼티의 키 값에 '===' 추가
    obj[key] += "===";
}
console.log(obj);
