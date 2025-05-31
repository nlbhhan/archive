let img1930;
let laThu1;
let scannedLetter1;
let inconsolata;
let estonia;
let syneMono;


//Thu 1
let position1959 = 100;
let speed1959 = 1;

//Thu 2
let position1971 = 100;
let speed1971 = 2;

//Thu 3
let position1972 = 20;
let speed1972 = 0.5;


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
    img1930 = loadImage("images/IMG_1761.jpg");
    laThu1 = loadImage("images/1-Letters/1.2.png");
    scannedLetter1 = loadImage("images/1-Letters/scanned-letter-1.png");
    inconsolata = loadFont("font/Inconsolata-Light.ttf");
    estonia = loadFont("font/Estonia-Regular.ttf");
    syneMono = loadFont("font/SyneMono-Regular.ttf");
}

function setup() {
    // createCanvas(396, 306);
    createCanvas(windowWidth, windowHeight);
    laThu1.resize(0, windowHeight);
    // rectMode(CENTER);
    // img.resize(396, 0);
    // noLoop();
}

function draw() {
    background(0);
    // image(img, width/2, height/2);
    img1930.loadPixels();

    for (let i=0; i<img1930.height; i=i+1) {
        for (let j=0; j<img1930.width; j=j+1) {
            idx = (i*img1930.width+j) *4;

            //Do sang trung binh cua hinh
            let r = img1930.pixels[idx];
            let g = img1930.pixels[idx + 1];
            let b = img1930.pixels[idx + 2];
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
    img1930.updatePixels();

   //Thang 5 nam 1959
    if (position1959 < 0 || position1959 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
    //    speed1959 = speed1959 * -1;
        position1959 = 0;
    }
    position1959 = position1959 + speed1959;
    push();
    textSize(20);
    textLeading(23);
    textFont(inconsolata);
    let mauChu1 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/5, position1959) < 100) {
        mauChu1 = color("cyan");
        };
    //Su kien
    fill(mauChu1);
    noStroke();
    textAlign(LEFT, CENTER);
    text("Tháng 5 năm 1959\n“Quốc hội” của chính quyền Ngô Đình Diệm\nđưa ra đạo luật số 10 năm 1959\nđem máy chém đi khắp miền Nam\nđể tăng cường tàn sát\nnhững người cách mạng.", windowWidth/7, position1959);
    //Neu chuot ngay chu thi background doi thanh la thu
    pop();

    //Tháng 2 năm 1971
    if (position1971 < 0 || position1971 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position1971 = 0;
    }
    position1971 = position1971 + speed1971;
    push()
    textSize(20);
    textLeading(23);
    textAlign(LEFT, CENTER);
    textFont(inconsolata);
    let mauChu2 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/2, position1971) < 150) {
        mauChu2 = color("cyan");
    }
    fill(mauChu2);
    text("Tháng 2 năm 1971\nQuân và dân Việt Nam - quân và dân Lào\ntrong cuộc hành quân “Lam Sơn 719”\nở Đường 9 - Nam Lào", windowWidth/2, position1971);
    pop();


    //1972, thanh co Quang Tri
    if (position1972 < 0 || position1972 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position1972 = 0;
    }
    position1972 = position1972 + speed1972;
    push()
    textSize(20);
    textLeading(23);
    textAlign(LEFT, CENTER);
    textFont(inconsolata);
    if (dist(mouseX, mouseY, windowWidth/22, position1972) < 150) {
        mauChu2 = color("cyan");
    }
    fill(mauChu2);
    text("1972\nThành cổ Quảng Trị", windowWidth/22, position1972);
    pop();


    //Neu dua chuot den gan chu thi mau chu thay doi + la thu 1 hien ra
    if (dist(mouseX, mouseY, windowWidth/5, position1959) < 100) {
        background(0, 150);
        //Hien la thu 1
        push();
        image(scannedLetter1, windowWidth/22, 50);
        scannedLetter1.resize(0, windowHeight/1.2);
        pop();
    }
}