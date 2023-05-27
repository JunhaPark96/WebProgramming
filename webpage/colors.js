let links = {
    setColor: function linksSetColor(color) {
        // let alist = document.querySelectorAll("a");
        // let i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i += 1;
        // }
        // 이 파일의 a 모든 태그를 jquery에서 관리한다
        $('a').css('color', color)
    }
}
let Body = {
    setColor: function (color) {
        // document.querySelector("body").style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        // document.querySelector("body").style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self) {
    let target = document.querySelector("body");
    if (self.value == "day") {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = "night";

        // 모든 a 태그에 대해
        links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = "day";

        links.setColor('blue');
    }
}