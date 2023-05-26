// 객체의 선언은 중괄호로
const obj = {
    product: '7D 건조 망고',
    type: '당절임',
    ingredient: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    source: '필리핀'
};

console.log(obj);

// 프로퍼티 접근1 - 기본 사용법
console.log(obj.product);
console.log(obj.type);
console.log(obj.ingredient);
console.log(obj.source);


// 프로퍼티 접근2 - 동적 프로그래밍에 유리
console.log(obj['product']);
console.log(obj['type']);
console.log(obj['ingredient']);
console.log(obj['source']);

let 