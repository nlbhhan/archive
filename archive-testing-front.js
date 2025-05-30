let img1930;
let laThu1;
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
    img1930 = loadImage("images/IMG_1761.jpg");
    laThu1 = loadImage("images/1-Letters/1.png");
    inconsolata = loadFont("font/Inconsolata-Light.ttf");
    estonia = loadFont("font/Estonia-Regular.ttf");
    pinyon = loadFont("font/PinyonScript-Regular.ttf");
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
    if (positionThu < 0 || positionThu > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
    //    speedThu = speedThu * -1;
        positionThu = 0;
    }
    positionThu = positionThu + speedThu;
    push();
    textSize(20);
    textLeading(23);
    textFont(inconsolata);
    let mauChu1 = color("yellow");
    //Su kien
    fill(mauChu1);
    noStroke();
    textAlign(LEFT, CENTER);
    text("Tháng 5 năm 1959\n“Quốc hội” của chính quyền Ngô Đình Diệm\nđưa ra đạo luật số 10 năm 1959\nđem máy chém đi khắp miền Nam\nđể tăng cường tàn sát\nnhững người cách mạng.", windowWidth/7, positionThu);
    //Neu chuot ngay chu thi background doi thanh la thu
    pop();

    //Tháng 2 năm 1971
     if (positionBuc < 0 || positionBuc > windowHeight) { //Nếu vị trí của Y vượt qua khỏi windowHeight thì sẽ reset lại vị trí ban đầu và tiếp tục chuyển dộng tịnh tiến từ trên xuống dưới
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

    //Neu dua chuot den gan chu thi mau chu thay doi + la thu 1 hien ra
    if (dist(mouseX, mouseY, windowWidth/5.5, positionThu) < 200) {
        mauChu1 = color("blue");
        background(0);
        image(laThu1, windowWidth/1.65, 0);
        //Hien chu tren la thu
        push();
        fill("blue");
        textSize(50);
        textAlign (LEFT, CENTER);
        textFont(estonia);
        textLeading(50);
        noStroke();
        text("Con yêu quý của mẹ!\nVậy là đã tròn 2 năm con xa nhà,\nmẹ và các em vẫn mong nhớ con từng ngày.\nMấy ngày rồi, người ta nói ông Diệm\ncó lệnh chém những người làm cách mạng ở khắp Nam Kỳ.\nCon yêu của mẹ ơi, mẹ nén nỗi nhớ mỗi ngày\nđể cầu nguyện cho con được bình an.\nCon ơi, mẹ lo lắng,\nnhưng mẹ cũng tự hào lắm!\nMẹ vẫn đi khắp các sinh hoạt dân phố, đến chợ,\nngười ta nói con của mẹ đang cống hiến cho Tổ Quốc.\nCon đang đấu tranh tiêu diệt kẻ thù ác độc,\nvà rồi con và đồng đội sẽ mang bình yên đến cho đất nước mình.\nNhận được thư này, con an lòng con nhé,\nmẹ và các em ở nhà đợi tin con.", windowWidth/7, positionThu + 300);
    pop();
    }
}