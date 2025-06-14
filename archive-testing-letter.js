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
let speed1890 = 1;
let position1890x1 = -60;
let speed1890x1 = 1;
let position1890x2 = 50;
let speed1890x2 = 1;

//1901
let position1901 = 0;
let speed1901 = 1;
let position1901x1 = 0;
let speed1901x1 = 4;
let position1901x2 = 0;
let speed1901x2 = 1;
let thu1901 = 
`Tụi nó cướp lúa gạo thì thôi, còn lấy hết ruộng đất,
cứ một dạo lại bắt nộp thêm một loại sưu cắt cổ mới.
Em thì làm gì còn tiền mà nộp nữa hả anh,
nên tụi nó đã bắt ông nhà em đi rồi.
    `;

//1915
let position1915 = -50;
let speed1915 = 4;
let canhTac = 
    `Tôi đây là người có dịp được ông chỉ bảo nhiều điều về canh tác ruộng đất
và những vấn đề thường nhựt trong đoạn chúng tôi ở Bắc Kì.
    `;
let position1915x1 = 200;
let speed1915x1 = 1;
let conNua = 
`Còn nữa, tôi cũng gieo trồng những hột giống mà ông gửi cho chúng tôi,
và tôi mong là sẽ có quả ngon để chúng tôi cùng vượt qua vụ này.
`;

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
}

function setup() {
    // createCanvas(396, 306);
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
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
    if (position1890x1 < -60 || position1890x1>windowHeight) {
        position1890x1 = -60;
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
    text("Tôi gửi thư này mong các ngài\nkhẩn cấp xem xét và xử lý,\ntrước khi tụi hải tặc này\ngây thêm khốn đốn cho các ngài.", windowWidth/1.45, position1890x2);
    textSize(20);
    textLeading(23);
    text("Tôi là lái buôn trong một công ty vận chuyển của Pháp, đóng tại xứ Nam Kì.", windowWidth/5 + 30, position1890 + 60);
    text("Chúng tôi thường đi thuyền để đến Vân Nam - Trung Quốc,\nbuôn bán và đổi chác hàng hóa.", windowWidth/5-20, position1890 + 90);
    text("Chúng tôi không rõ chúng là người Pháp, hay kẻ vãn lai,", windowWidth/8, position1890+140);
    text("Chúng còn nói mai đây sẽ đóng quân trên bờ,\nvà rồi thì các quan cũng phải nghe lịnh của chúng.", 0, position1890+180);
    pop();

    //Thang 5 nam 1901
    if (position1901 < -10 || position1901>windowHeight) {
        position1901 = -10;
    };
    position1901 = position1901 + speed1901;
    if (position1901x1 < -20 || position1901x1>windowHeight) {
        position1901x1 = -20;
    };
    position1901x1 = position1901x1 + speed1901x1;
    if (position1901x2 < -20 || position1901x2 > windowHeight) {
        position1901x2 = -20;
    };
    position1901x2 = position1901x2 + speed1901x2;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Gửi anh thân mến!", 0, position1901);
    text("Anh ơi, dạo này tụi Pháp lộng hành quá!", windowWidth/8, position1901x1);
    textSize(20);
    textLeading(23);
    text("Tụi nó ép dân bỏ nghề gốm và dệt,\nép họ mình đi đào hầm,\nlàm mỏ mười mấy giờ đồng hồ\nNgay cả nông dân nhà mình cũng gặp đủ điều khó khăn", 0, position1901x1 + 30);
    text('Mong anh nhận thư này, nghe anh.', windowWidth/1.5, position1901x2);
    textSize(16);
    textLeading(18);
    text(thu1901, 0, position1901 + 20);
    pop();

    //Thang 7 nam 1915
    if (position1915 < -50 || position1915 > windowHeight) {
        position1915 = -50;
    };
    position1915 = position1915 + speed1915;
    if (position1915x1 < -10 || position1915x1 > windowHeight) {
        position1915x1 = -10;
    };
    position1915x1 = position1915x1 + speed1915x1;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Thưa ông! Tôi đã về đến Cochinchine,\nnên muốn gửi đôi dòng đến ông và gia đình.", windowWidth/3, position1915);
    text("Thân\nmến.", windowWidth/1.78, position1915x1-80);
    textSize(20);
    textLeading(23);
    text("Bởi thế tôi cố sức nói bà con\ndùng thuốc trừ sâu bệnh cho bông lúa,\nkhi có bệnh phải tìm thấy thuốc\nlấy thuốc uống và tiêm.", windowWidth/2.5, position1915x1);
    text(canhTac, windowWidth/8, position1915-100);
    textSize(16);
    textLeading(18);
    text("Trong hai tháng giời, ông và gia đình đã\nsăn sóc và giúp đỡ anh em thợ xứ chúng tôi,\ntôi lại càng biết hơn mọi người lắm.", windowWidth/1.8, position1915-90);
    text(conNua, windowWidth/1.78, position1915x1 - 35);
    pop();

}