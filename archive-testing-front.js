let img1930;
let laThu1;
let scannedLetter1;
let scannedLetter2;
let scannedLetter5;
let scannedLetter6;
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
let speed1972 = 0.5;

//Thu 4
let position1975 = -20;
let speed1975 = 1;

//Thu 5
let position1915 = -10;
let speed1915 = 1.5;

//Thu 6
let position1901 = 200;
let speed1901 = 2;


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
    scannedLetter5 = loadImage("images/1-Letters/scanned-letter-5-1915.png");
    scannedLetter6 = loadImage("images/1-Letters/scanned-letter-6-1901.png");
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
    scannedLetter5.resize(0, windowHeight/1.05);
    scannedLetter6.resize(0, windowHeight/1.05);
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

    //Thang 5 nam 1901
    if (position1901 < -10 || position1901 > windowHeight) { 
        position1901 = -10;
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

    //Tháng 2 năm 1971 - Lao
    if (position1971 < 0 || position1971 > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
        position1971 = 0;
    }
    position1971 = position1971 + speed1971;
    push()
    textSize(20);
    textLeading(23);
    textAlign(LEFT, CENTER);
    textFont(inconsolata);
    let mauChu1971 = color("yellow");
    if (dist(mouseX, mouseY, windowWidth/2, position1971) < 150) {
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
    if (dist(mouseX, mouseY, windowWidth/22, position1972) < 150) {
        mauChu1972 = color("cyan");
    }
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


    //Neu dua chuot den gan chu thi mau chu thay doi + la thu 1 hien ra
    if (dist(mouseX, mouseY, windowWidth/5, position1959) < 100) {
        background(0, 150);
        //Hien la thu 1
        image(scannedLetter1, windowWidth/22, 50);
        scannedLetter1.resize(0, windowHeight/1.2);
    }

    //La thu 2 hien ra
    if (dist(mouseX, mouseY, windowWidth/2, position1971) < 150) {
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
        image(scannedLetter5, windowWidth/2, windowHeight/2);
        pop();
    }

    //La thu 6-1901 hien ra
    if (dist(mouseX, mouseY, windowWidth/2.6 , position1901) < 100) {
        background(0, 150);
        //Hien la thu 
        push();
        translate(windowWidth/2, windowHeight/2);
        rotate(2);
        imageMode(CENTER);
        image(scannedLetter6, 0, 20);
        pop();
    }
}