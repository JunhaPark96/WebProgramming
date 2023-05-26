// ----클래스1
class Book{
    constructor(title, pages, done){
        // 생성자: 동적으로 프로퍼티를 만드는 역할
        this.title = title;
        this.pages = pages;
        this.done = done;
    }
    finish(){
        let str = "";
        this.done === false ? str = "읽는중" : str = "완독";
        return str;
    }
}

let git = new Book("깃교과서", 500, true);
// 생성자의 프로퍼티 실행
console.log(git);
console.log(git.finish());

// -----클래스2
class Book{
    constructor(title, price){
        // 생성자: 매개변수로 받은 값을 동적 프로퍼티로 설정
        this.title = title;
        this.price = price;
    }
    buy() {
        console.log(`${this.title}을 ${this.price}에 판매`);
    }
}
let book = new Book('abcd', 15000);
console.log(book); // 프로퍼티만 출력
book.buy();        // 메소드를 호출

// ----- 클래스3
// TextBook을 상속받는 Book
class TextBook extends Book{
    constructor(title, price, major){
        // 상위 클래스의 생성자 호출
        super(title, price)
        // major 동적 프로퍼티 생성
        this.major = major;
    }

    buyTextBook(){
        console.log(`${this.major} 전공서적, ${this.title} 을 구매`);
    }
}

let bar = new TextBook('park', 10000, 'com');
// console.log(bar);
// bar.buy();
// bar.buyTextBook();

