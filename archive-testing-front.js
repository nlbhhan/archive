let img;
let inconsolata;
let estonia;
let pinyon;

//Cau 1
let positionThu = 100;
let speedThu = 1;

//Cau 2
let positionBuc = 100;
let speedBuc = 2;


// let chuoiKiTu = "     .:░▒▓█";
let chuoiKiTu1 = [
    "*",
    "        ",
    "         ",
    "người không thấy lại",,
    ".",
    "Tin gởi đi",
    "          ",
];
let chuoiKiTu2 = [
    "*",
    ".",
    "*",
    "          ",
];
let chuoiKiTu3 = [
    "Hoa Dương tàn",
    ".",
    "*",
    "đã trải rêu xanh"
];

function preload() {
    img = loadImage("images/IMG_1761.jpg");
    inconsolata = loadFont("font/Inconsolata-Light.ttf");
    estonia = loadFont("font/Estonia-Regular.ttf");
    pinyon = loadFont("font/PinyonScript-Regular.ttf");
}

function setup() {
    // createCanvas(396, 306);
    createCanvas(windowWidth, windowHeight);
    // rectMode(CENTER);
    // img.resize(396, 0);
    // noLoop();
}

function draw() {
    background(0);
    // image(img, width/2, height/2);
    img.loadPixels();

    for (let i=0; i<img.height; i=i+1) {
        for (let j=0; j<img.width; j=j+1) {
            idx = (i*img.width+j) *4;

            //Do sang trung binh cua hinh
            let r = img.pixels[idx];
            let g = img.pixels[idx + 1];
            let b = img.pixels[idx + 2];
            let avg = (r+g+b)/3;

            //Hien thi pixels theo do sang cua hinh
            let charIndex1 = int(map(avg, 150, 255, 0, chuoiKiTu1.length));
            let charIndex2 = int(map(avg, 0, 255, 0, chuoiKiTu2.length));
            let charIndex3 = int(map(avg, 0, 255, 0, chuoiKiTu3.length));
            let char1 = chuoiKiTu1[charIndex1];
            let char2 = chuoiKiTu2[charIndex2];
            let char3 = chuoiKiTu3[charIndex3];

                //Cau 1
                if (avg>=190 && avg<250) {
                    
                    noStroke();
                    textSize(10);
                    textLeading(20);
                    textAlign(TOP, LEFT);
                    textFont(inconsolata);
                    fill(r,g,b);
                    text(char1, j*18, i*18);
                    
                }
                //Cau 2
                if (avg <= 190 && avg>100) {
                    fill(r,g,b);
                    text(char2, j*30, i*30);
                }
                //Cau 3
                // if (avg >=0 && avg <=100) {
                //     fill(r,g,b);
                //     text(char1, j*30, i*30);
                // }
        }
    }
    img.updatePixels();

   //Câu 1: Thư thường tới người chưa thấy tới
//    console.log(positionThu);
    if (positionThu < 0 || positionThu > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
    //    speedThu = speedThu * -1;
        positionThu = 0;
    }
    positionThu = positionThu + speedThu;
    push();
    textSize(20);
    textLeading(23);
    textFont(inconsolata);
    //Neu dua chuot den gan chu thi mau chu thay doi
    let mauChu1 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/5.5, positionThu) < 200) {
        mauChu1 = color("cyan");
    }
    fill(mauChu1);
    noStroke();
    textAlign(LEFT, CENTER);
    text("Tháng 5 năm 1959\n“Quốc hội” của chính quyền Ngô Đình Diệm\nđưa ra đạo luật số 10 năm 1959\nđem máy chém đi khắp miền Nam\nđể tăng cường tàn sát\nnhững người cách mạng.", windowWidth/7, positionThu);
    //Neu chuot ngay chu thi hien la thu
    if (dist(mouseX, mouseY, windowWidth/7, positionThu) < 200) {
        fill(255);
        noStroke();
        rect(windowWidth/5.5, positionThu - 150, 50, 100);
    }
    pop();

    //Câu 2: Bức rèm thưa lần dãi bóng dương
     if (positionBuc < 0 || positionBuc > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
    //    speedThu = speedThu * -1;
        positionBuc = 0;
    }
    positionBuc = positionBuc + speedBuc;
    push()
    textSize(20);
    textLeading(23);
    textAlign(LEFT, CENTER);
    textFont(inconsolata);
    let mauChu2 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/2, positionBuc) < 150) {
        mauChu2 = color("cyan");
    }
    fill(mauChu2);
    text("Tháng 2 năm 1971\nQuân và dân Việt Nam - quân và dân Lào\ntrong cuộc hành quân “Lam Sơn 719”\nở Đường 9 - Nam Lào", windowWidth/2, positionBuc);
    pop();
}