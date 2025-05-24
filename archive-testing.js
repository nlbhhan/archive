let img;
let inconsolata;
let estonia;
// let chuoiKiTu = "     .:░▒▓█";
let chuoiKiTu1 = [
    "Đương mùa xuân, gửi thư thăm bạn học"
];
let chuoiKiTu2 = [
    "Thôi", "ngày", "nhắn", "cá", "lại", "tối", "trông", "sao,"
];

function preload() {
    img = loadImage("images/post-office-1930.jpg");
    inconsolata = loadFont("font/Inconsolata-Light.ttf");
    estonia = loadFont("font/Estonia-Regular.ttf");
}

function setup() {
    // createCanvas(396, 306);
    createCanvas(800, 600);
    // rectMode(CENTER);
    // img.resize(396, 0);
    noLoop();
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
            let avg = (r+g+b)/3

            //Hien thi pixels theo do sang cua hinh
            let charIndex = int(map(avg, 0, 255, 0, chuoiKiTu1.length));
            let charIndex2 = int(map(avg, 0, 255, 0, chuoiKiTu2.length));
            let char = chuoiKiTu1[charIndex];
            let char2 = chuoiKiTu2[charIndex2];

            //
            noStroke();
            textSize(10);
            textLeading(14);
            textAlign(TOP, LEFT);
            textFont(inconsolata);
            fill(r,g,b);
            if (avg>=200) {
                text(char, j*10, i*10);
            } 
            if (avg<200) {
                // fill("yellow");
                text(char2, j*20, i*20);
            }
        }
    }
    img.updatePixels();

    // //Ngay thang
    // textAlign(TOP, LEFT);
    // textSize(30);
    // textLeading(30);
    // noStroke();
    // fill(255);
    // textFont(estonia);
    // text('Ngày 11 tháng 2 Giáp Tí\ngửi Tống-Tường-Vân, Phố-Vị Hoàng-Nam-Định', 30, 50);

    // //Test
    // textSize(36);
    // textFont(inconsolata);
    // fill(255);
    // noStroke();
    // rect(210, 100, 650, 36);
    // text('Đương mùa xuân, gửi thư thăm bạn học', 200, 200);
}