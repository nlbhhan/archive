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

//1890
let position1890 = 0;
let speed1890 = 3;
let position1890x1 = -40;
let speed1890x1 = 5;
let position1890x2 = 50;
let speed1890x2 = 8;

//1901
let position1901 = -20;
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
    if (position1890 < -10 || position1890>windowHeight) {
        position1890 = -10;
    };
    position1890 = position1890 + speed1890;
    if (position1890x1 < -40 || position1890x1>windowHeight) {
        position1890x1 = -40;
    };
    position1890x1 = position1890x1 + speed1890x1;
    if (position1890x2 < -40 || position1890x2>windowHeight) {
        position1890x2 = -40;
    };
    position1890x2 = position1890x2 + speed1890x2;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Kính gửi các ngài ở Hội đồng lợi ích kinh tế\nvà tài chính của người Pháp ở Trung Kỳ.", windowWidth/5, position1890);
    text("Mấy ngày rồi, có một tốp người gây cản trở trên biển,\ncướp bóc thuyền gạo của anh em.", windowWidth/1.5, position1890x1);
    text("Tôi gửi thư này mong các ngài\nkhẩn cấp xem xét và xử lý,\ntrước khi tụi hải tặc này\ngây thêm khốn đốn cho các ngài.", windowWidth/2, position1890x2);
    textSize(20);
    textLeading(23);
    text("Tôi là lái buôn trong một công ty vận chuyển của Pháp, đóng tại xứ Nam Kì.", windowWidth/5 + 30, position1890 + 60);
    text("Chúng tôi thường đi thuyền để đến Vân Nam - Trung Quốc,\nbuôn bán và đổi chác hàng hóa.", windowWidth/5-20, position1890 + 90);
    text("Chúng tôi không rõ chúng là người Pháp, hay kẻ vãn lai,", windowWidth/8, position1890+140);
    text(" Chúng còn nói mai đây sẽ đóng quân trên bờ,\nvà rồi thì các quan cũng phải nghe lịnh của chúng.", 0, position1890+180);
    pop();

    //Thang 5 nam 1901
    if (position1901 < -10 || position1901 > windowHeight) {
        position1901 = -10;
    };
    posiiton1901 = position1901 + speed1901;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Gửi anh thân mến!", 0, position1901);
    pop();
}