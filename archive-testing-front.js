let img;
let inconsolata;
let estonia;
let pinyon;
// let chuoiKiTu = "     .:░▒▓█";
let chuoiKiTu1 = [
    ".",
    "Thư thường tới", "người chưa thấy tới,",
    ".",
    "*",
    " "
];
let chuoiKiTu2 = [
    "Bức rèm thưa", "lần giải bóng dương.",
    ".",
    "*",
    "_"
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
            let char1 = chuoiKiTu1[charIndex1];
            let char2 = chuoiKiTu2[charIndex2];

                if (avg>=180) {
                    
                    noStroke();
                    textSize(10);
                    textLeading(20);
                    textAlign(TOP, LEFT);
                    textFont(inconsolata);
                    fill(r,g,b);
                    text(char1, j*12.6, i*12.6);
                    
                }

                if (avg < 180) {
                    fill(r,g,b);
                    text(char2, j*15, i*15);
                }
        }
    }
    img.updatePixels();

   //Lia chuột tới thì dòng thơ hiện ra
//    fill(255);
//    rect(windowWidth/5, windowHeight/2, 10, 10);
//    rect(100, 100, 10, 10);
//    push();

    textSize(12);
    textLeading(12);
    textFont(inconsolata);
    fill("cyan");
    noStroke();
    textAlign(TOP, LEFT);
    text("Thư thường tới người chưa thấy tới", windowWidth/5.5, windowHeight/2.5);

        if (dist(mouseX, mouseY, windowWidth/5.5, windowHeight/2.5) <300) {
            fill(255);
            rect(100, 100, 10, 10);
        }
//    pop();
}