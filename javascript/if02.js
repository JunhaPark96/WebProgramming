function calcAge(){
    const currentYear = 2023;
    let birthYear;
    let age;
    
    let windo = prompt("태어난 년도는?")
    if (windo != null){
        birth = parseInt(windo);
        age = currentYear - birth + 1;
        if (age < 20){
            alert("성인이 아닙니다");
        } else{
            alert(`${currentYear} 년 현재, ${age} 살 입니다`)
        }
    } else{
        alert(`다시 입력하세요`)
    }
}
