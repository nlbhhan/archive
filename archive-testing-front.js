let img1930;
let laThu1;
let scannedLetter1;
let scannedLetter2;
let scannedLetter1915;
let scannedLetter1901;
let scannedLetter1890;
let inconsolata;
let estonia;
let syneMono;
let moonDance;

let thanhCoQuangtri =
    `
    Sài Gòn, ngày 15 tháng 8 năm 1972

    Anh yêu quý của em!
    Em cầm bút viết lá thư này trong lúc chiến trường Trị Thiên đang thắng.
    Tin vui bay về đến Gò Công của ta, người dân, gia đình xung quanh đều đang sung sướng lắm.
    Em cũng vui sướng nữa anh ơi. Sướng vì đất nước mình thắng lợi,
    cũng sướng vì trong hàng ngũ những người góp phần làm nên chiến thắng có anh,
    người em mong nhớ, là cha của các con em.

    Anh vẫn nói tiếc cho thời gian chúng ta bên nhau không dài thì chiến tranh đã cướp đi hạnh phúc của em. 
    Không anh ơi, em và con tự hào vì có một người chồng, người cha đang hết bảo vệ
    những giấc ngủ ngon của chúng em. 
    Anh hãy vững lòng anh nhé.

    Ôm anh.
    `;

//Thu 1
let position1959 = 100;
let speed1959 = 1;

//Thu 2
let position1971 = 100;
let speed1971 = 1;

//Thu 3
let position1972 = 20;
let speed1972 = 1;

//Thu 4
let position1975 = -20;
let speed1975 = 1;

//Thu 5
let position1915 = -10;
let speed1915 = 1.8;

//Thu 6
let position1901 = 200;
let speed1901 = 2;

//Thu 7
let position1890 = -30;
let speed1890 = 2.5;

//Thu 8
let position1946 = -10;
let speed1946 = 2;

//Thu 9
let position1954 = -20;
let speed1954 = 2.8;

//Thu 10
let position1966 = -10;
let speed1966 = 3;

//Thu 11
let position1990 = -20;
let speed1990 = 4;

//Thu 12
let position2004 = 100;
let speed2004 = 3;

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
    scannedLetter2 = loadImage("images/1-Letters/scanned-letter-2.png");
    scannedLetter1915 = loadImage("images/1-Letters/scanned-letter-5-1915.png");
    scannedLetter1901 = loadImage("images/1-Letters/scanned-letter-6-1901.png");
    scannedLetter1890 = loadImage("images/post-office-1890.png");
    inconsolata = loadFont("font/Inconsolata-Light.ttf");
    estonia = loadFont("font/Estonia-Regular.ttf");
    syneMono = loadFont("font/SyneMono-Regular.ttf");
    moonDance = loadFont("font/MoonDance-Regular.ttf");
}

function setup() {
    // createCanvas(396, 306);
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    laThu1.resize(0, windowHeight);
    scannedLetter1915.resize(0, windowHeight/1.10);
    scannedLetter1901.resize(0, windowHeight/1.10);
    scannedLetter1890.resize(0, windowHeight/1.05);
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

    //Thang 11 nam 1890
     if (position1890 < -10 || position1890 > windowHeight) { 
        position1890 = -10;
    }
    position1890 = position1890 + speed1890;
    push();
    textSize(36);
    textLeading(23);
    textFont(inconsolata);
    let mauChu1890 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/4.8 , position1890) < 100) {
        mauChu1890 = color("cyan");
        };
    fill(mauChu1890);
    noStroke();
    textAlign(LEFT, CENTER);
    text("Tháng 11 năm 1890", windowWidth/5, position1890);
    pop();


    //Thang 5 nam 1901
    if (position1901 < -10 || position1901 > windowHeight) { 
        position1901 = -30;
    }
    position1901 = position1901 + speed1901;
    push();
    textSize(20);
    textLeading(23);
    textFont(inconsolata);
    let mauChu1901 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/2.6 , position1901) < 100) {
        mauChu1901 = color("cyan");
        };
    fill(mauChu1901);
    noStroke();
    textAlign(LEFT, CENTER);
    text("1901\nPháp khai thác thuộc địa\nlần thứ nhất", windowWidth/2.6, position1901);
    pop();




    //Thang 7 nam 1915
    if (position1915 < -10 || position1915 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position1915 = -10;
    }
    position1915 = position1915 + speed1915;
    push();
    textSize(20);
    textLeading(23);
    textFont(inconsolata);
    let mauChu1915 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/2.6 , position1915) < 100) {
        mauChu1915 = color("cyan");
        };
    fill(mauChu1915);
    noStroke();
    textAlign(LEFT, CENTER);
    text("1915\nThợ xứ Nam Kỳ\nđược đi học hỏi\ntừ các điền chủ\nBắc Kì người Việt\nvà người Pháp", windowWidth/2.6, position1915);
    pop();

    //Thang 1 nam 1946
    if (position1946 < -10 || position1946 > windowHeight) { 
        position1946 = 0;
    }
    position1946 = position1946 + speed1946;
    push();
    textSize(36);
    textLeading(23);
    textFont(inconsolata);
    let mauChu1946 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/1.18 , position1946) < 100) {
        mauChu1946 = color("cyan");
        };
    fill(mauChu1946);
    noStroke();
    textAlign(LEFT, CENTER);
    text("Nạn đói 1944 - 1945", windowWidth/1.25, position1946);
    pop();

    //Thang 5 nam 1954
    if (position1954 < -20 || position1954 > windowHeight) { 
        position1954 = -30;
    }
    position1954 = position1954 + speed1954;
    push();
    textSize(20);
    textLeading(23);
    textFont(inconsolata);
    let mauChu1954 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/2 , position1954) < 100) {
        mauChu1954 = color("cyan");
        };
    fill(mauChu1954);
    noStroke();
    textAlign(LEFT, CENTER);
    text("Tháng 5 năm 1954\nChiến dịch Điện Biên Phủ", windowWidth/2, position1954);
    pop();

   //Thang 5 nam 1959
    if (position1959 < 0 || position1959 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position1959 = 0;
    }
    position1959 = position1959 + speed1959;
    push();
    textSize(20);
    textLeading(23);
    textFont(inconsolata);
    let mauChu1959 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/5, position1959) < 100) {
        mauChu1959 = color("cyan");
        };
    fill(mauChu1959);
    noStroke();
    textAlign(LEFT, CENTER);
    text("Tháng 5 năm 1959\n“Quốc hội” của chính quyền Ngô Đình Diệm\nđưa ra đạo luật số 10 năm 1959\nđem máy chém đi khắp miền Nam\nđể tăng cường tàn sát\nnhững người cách mạng.", windowWidth/7, position1959);
    pop();

    //Nam 1966
    if (position1966 < 0 || position1966 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position1966 = 0;
    }
    position1966 = position1966 + speed1966;
    push();
    textSize(36);
    textLeading(23);
    textFont(inconsolata);
    let mauChu1966 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/5, position1966) < 100) {
        mauChu1966 = color("cyan");
        };
    fill(mauChu1966);
    noStroke();
    textAlign(LEFT, CENTER);
    text("Năm 1966", windowWidth/7, position1966);
    pop();

    //Tháng 2 năm 1971 - Lao
    if (position1971 < 0 || position1971 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position1971 = 10;
    }
    position1971 = position1971 + speed1971;
    push()
    textSize(36);
    textLeading(34);
    textAlign(LEFT, CENTER);
    textFont(inconsolata);
    let mauChu1971 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/1.9, position1971) < 100) {
        mauChu1971 = color("cyan");
    }
    fill(mauChu1971);
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
    let mauChu1972 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/21.7, position1972 - 5) < 100) {
        mauChu1972 = color("cyan");
    };
    fill(mauChu1972);
    text("1972\nThành cổ Quảng Trị", windowWidth/22, position1972);
    pop();

    //1975, Giai phong mien Nam
    if (position1975 < -20 || position1975 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position1975 = -20;
    }
    position1975 = position1975 + speed1975;
    push();
    textSize(20);
    textLeading(23);
    textAlign(LEFT, CENTER);
    textFont(inconsolata);
    let mauChu1975 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/1.5, position1975) < 150) {
        mauChu1975 = color("cyan");
    }
    fill(mauChu1975);
    text("Ngày 30 tháng 4 năm 1975\nQuân Giải phóng miền Nam Việt Nam tiến vào Sài Gòn,\ndẫn tới sự sụp đổ của Việt Nam Cộng hòa\nvà chấm dứt chiến tranh Việt Nam", windowWidth/1.5, position1975);
    pop();

    //Thang 9 nam 1990
    if (position1990 < -20 || position1990 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position1990 = -20;
    }
    position1990 = position1990 + speed1990;
    push()
    textSize(36);
    textLeading(23);
    textAlign(LEFT, CENTER);
    textFont(inconsolata);
    let mauChu1990 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/21.5, position1990) < 150) {
        mauChu1990 = color("cyan");
    };
    fill(mauChu1990);
    text("Tháng 9 năm 1990", windowWidth/22, position1990);
    pop();

    //Thang 12 nam 2004
    if (position2004 < -10 || position2004 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position2004 = -10;
    }
    position2004 = position2004 + speed2004;
    push()
    textSize(36);
    textLeading(23);
    textAlign(LEFT, CENTER);
    textFont(inconsolata);
    let mauChu2004 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/1.45, position2004) < 150) {
        mauChu2004 = color("cyan");
    };
    fill(mauChu2004);
    text("Tháng 12 năm 2004", windowWidth/1.5, position2004);
    pop();


    //Neu dua chuot den gan chu thi mau chu thay doi + la thu 1 hien ra
    if (dist(mouseX, mouseY, windowWidth/5, position1959) < 100) {
        background(0, 150);
        //Hien la thu 1
        image(scannedLetter1, windowWidth/22, 50);
        scannedLetter1.resize(0, windowHeight/1.2);
    }

    //La thu 1971 hien ra
    if (dist(mouseX, mouseY, windowWidth/1.9, position1971) < 100) {
        background(0, 150);
        //Hien la thu 
        tint(200);
        image(scannedLetter2, windowWidth/22, 50);
        scannedLetter2.resize(0, windowHeight/1.2);
    }

    //La thu 3 hien ra
    if (dist(mouseX, mouseY, windowWidth/22, position1972) < 150) {
        background(0, 150);
        //Hien la thu 
        push();
        textSize(40);
        noStroke();
        fill(255);
        textLeading(42);
        textAlign(LEFT, TOP);
        textFont(moonDance);
        text(thanhCoQuangtri, windowWidth/22, 50);
        pop();
    }

    //La thu 5-1915 hien ra
    if (dist(mouseX, mouseY, windowWidth/2.6 , position1915) < 100) {
        background(0, 150);
        //Hien la thu 
        push();
        imageMode(CENTER);
        image(scannedLetter1915, windowWidth/2, windowHeight/2);
        pop();
    }

    //La thu 6-1901 hien ra
    if (dist(mouseX, mouseY, windowWidth/2.6 , position1901) < 100) {
        background(0, 150);
        //Hien la thu 
        push();
        imageMode(CENTER);
        image(scannedLetter1901, windowWidth/2, windowHeight/2.1);
        pop();
    }

    //La thu 7-1890 hien ra
    if (dist(mouseX, mouseY, windowWidth/4.8 , position1890) < 100) {
        background(0, 150);
        //Hien la thu 
        push();
        imageMode(CENTER);
        image(scannedLetter1890, windowWidth/2, windowHeight/2);
        pop();
    }
}