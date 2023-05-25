// ---------------------------------1 while
// let i = 0;
// while (i < 5){
//     console.log(i);
//     i++;
// }

// ---------------------------------2
// let i = 0;
// while (i < 5){
//     console.log(i);
//     if (i == 3){
//         break; // 자기를 감싸고 있는 최상위 블럭 탈출
//     }
//     i++;
// }

// ---------------------------------3 do while
// let i = 5;
// let status = false;
// do{
    //     console.log(i);
    //     i--;
    // } while(status){
        //     console.log(i);
        //     i--;
        // }
        
// ---------------------------------4
// for (let i = 0; i < 10; i++){
    //     if (i % 2 == 0){
        //         continue
        //     } else{
            //         console.log(i);
            //     }
            // }
            
// ---------------------------------5
let star = "*";
let result = "";
let blank = " ";
let stars = [];

for (let i = 1; i <= 5; i++){
    stars[i] = "";
}

for (let i = 1; i <= 5; i++){
    for (let j = 0; j < i; j++){
        stars[i] += "*";
    }
}

for (line of stars){
    console.log(line);
}

// for (let i = 0; i < 11; i++){
//     for (let j = 0; j < i; j++){
//         result += star;
//         if (j == 6){
//             result += "?";
//         }

//     }
//     console.log(result);
// }

        

