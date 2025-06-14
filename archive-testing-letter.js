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
let position1901 = -20;
let speed1901 = 1;
let position1901x1 = 83;
let speed1901x1 = 1;
let position1901x2 = 0;
let speed1901x2 = 1;
let thu1901 = 
`Tụi nó cướp lúa gạo thì thôi, còn lấy hết ruộng đất,
cứ một dạo lại bắt nộp thêm một loại sưu cắt cổ mới.
Em thì làm gì còn tiền mà nộp nữa hả anh,
nên tụi nó đã bắt ông nhà em đi rồi.
    `;

//1915
let position1915 = 500;
let speed1915 = 1;
let canhTac = 
`Tôi đây là người có dịp được
ông chỉ bảo nhiều điều
về canh tác ruộng đất
và những vấn đề thường nhựt
trong đoạn chúng tôi ở Bắc Kì.
`;
let position1915x1 = 180;
let speed1915x1 = 1;
let conNua = 
`Còn nữa, tôi cũng gieo trồng những hột giống mà ông gửi cho chúng tôi,
và tôi mong là sẽ có quả ngon để chúng tôi cùng vượt qua vụ này.
`;

//1944
let position1944 = 300;
let speed1944 = 1;
let chetViDoi = 
`Không biết nhựt trình ở xứ Hương Cảng có đưa tin này không?
Hôm nay chú với bố con đi nhận xác mẹ, các dì, các bác của con chết vì đói.`;
let position1944x1 = 400;
let speed1944x1 = 1;
let position1944x2 = 800;
let speedchetViDoi = 1;
let tuiPhap = 
`Tụi Pháp và Nhật cấm dân mình trồng lúa,
vơ vét hết mọi tiền bạc trồng lúa mà có được,
cũng chẳng mở cửa kho lúa để phát lương thực,
nên dân mình đói khổ mà chết nhiều.`;

//1954
let position1954 = 360;
let speed1954 = 1;
let phatThanh = 
`Phát thanh bên này nói
bộ đội mình đã xây hào xung quanh căn cứ của địch,
chặn đứng tiếp viện và hoạt động của chúng,
rồi tiến đánh và giành chiến thắng`;
let position1954x1 = 230;
let speed1954x1 = 1;

//1960
let position1960 = 700;
let speed1960 = 1;
let position1960x1 = 550;

//1971
let position1971 = 800;
let speed1971 = 1;

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
    if (position1890>windowHeight) {
        position1890 = -10;
    };
    position1890 = position1890 + speed1890;
    if ( position1890x1>windowHeight) {
        position1890x1 = -60;
    };
    position1890x1 = position1890x1 + speed1890x1;
    if (position1890x2>windowHeight) {
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
    if (position1901>windowHeight) {
        position1901 = -10;
    };
    position1901 = position1901 + speed1901;
    if (position1901x1>windowHeight) {
        position1901x1 = -20;
    };
    position1901x1 = position1901x1 + speed1901x1;
    if (position1901x2 > windowHeight) {
        position1901x2 = -50;
    };
    position1901x2 = position1901x2 + speed1901x2;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Gửi anh thân mến!", 0, position1901);
    text("Anh ơi, dạo này\ntụi Pháp lộng hành quá!", 0, position1901x1);
    textSize(20);
    textLeading(23);
    text("Tụi nó ép dân bỏ nghề gốm và dệt,\nép họ mình đi đào hầm,\nlàm mỏ mười mấy giờ đồng hồ\nNgay cả nông dân nhà mình cũng gặp đủ điều khó khăn", 0, position1901x1 + 200);
    text('Mong anh nhận thư này, nghe anh.', windowWidth/1.5, position1901x2);
    textSize(16);
    textLeading(18);
    text(thu1901, 0, position1901 + 20);
    pop();

    //Thang 7 nam 1915
    if (position1915 > windowHeight) {
        position1915 = -50;
    };
    position1915 = position1915 + speed1915;
    if (position1915x1 > windowHeight) {
        position1915x1 = -10;
    };
    position1915x1 = position1915x1 + speed1915x1;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Thưa ông! Tôi đã về đến Cochinchine,\nnên muốn gửi đôi dòng đến ông và gia đình.", windowWidth/5, position1915);
    text("Thân\nmến.", windowWidth/1.78, position1915x1-80);
    textSize(20);
    textLeading(23);
    text("Bởi thế tôi cố sức nói bà con\ndùng thuốc trừ sâu bệnh cho bông lúa,\nkhi có bệnh phải tìm thấy thuốc\nlấy thuốc uống và tiêm.", windowWidth/2.5, position1915x1);
    text(canhTac, windowWidth/8, position1915+100);
    textSize(16);
    textLeading(18);
    text("Trong hai tháng giời, ông và gia đình đã\nsăn sóc và giúp đỡ anh em thợ xứ chúng tôi,\ntôi lại càng biết hơn mọi người lắm.", windowWidth/1.8, position1915+200);
    text(conNua, windowWidth/1.78, position1915x1 - 20);
    pop();

    //Nam 1944-1945
    if (position1944 < -50 || position1944 > windowHeight) {
        position1944 = -50;
    };
    position1944 = position1944 + speed1944;
    if (position1944x1 > windowHeight) {
        position1944x1 = -20;
    };
    position1944x1 = position1944x1 + speed1944x1;
    if (position1944x2 > windowHeight) {
        position1944x2 = -50;
    };
    position1944x2 = position1944x2 + speedchetViDoi;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Marie Mai yêu quý!", 0, position1944);
    text("Mẹ con đã gượng nhiều ngày giời\nvới một miếng vải thấm đường,", windowWidth/1.5, position1944-20);
    text("Bố con\nđi cướp kho\nvề nhà,\nmẹ con đã\nkhô quéo và\ngầy guộc ở bên đường.", windowWidth/1.78, position1944x1);
    textSize(20);
    textLeading(23);
    text(chetViDoi, windowWidth/1.5, position1944+300);
    text(tuiPhap, windowWidth/8, position1944x2);
    text("bà chỉ uống một ngụm nhỏ, còn lại để cho các em con.", windowWidth/1.5, position1944x1);
    text("Nhận tin này,\nmong con đừng khóc quá nhiều.", windowWidth/2.5, position1944);
    pop();

    //Nam 1954
    if (position1954 > windowHeight) {
        position1954 = -50;
    };
    position1954 = position1954+speed1954;
    if (position1954x1 > windowHeight) {
        position1954x1 = 50;
    };
    position1954x1 = position1954x1 + speed1954x1;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Mến gửi Duật, Bình và Lam!", windowWidth/3, position1954);
    text("Tin chiến thắng tới nườm nượp", windowWidth/1.45, position1954);
    text("Đợi khi tao về,\ntụi mình lại\nchơi đánh trận,\ncâu cá nghe!", windowWidth/5-20, position1954x1);
    textSize(20);
    textLeading(23);
    text("bây không biết tao mừng rỡ\nthế nào khi mỗi ngày\nkhông nghe thấy tin về bây đâu,\nchỉ sợ bây có chuyện gì.", windowWidth/2.5, position1954+30);
    textSize(16);
    textLeading(18);
    text(phatThanh, windowWidth/8, position1954+20);

    //1960
    if (position1960>windowHeight) {
        position1960 = -50;
    };
    position1960 = position1960 + speed1960;
    if (position1960x1 > windowHeight) {
        position1960x1 = -50;
    };
    position1960x1 = position1960x1 + speed1960;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Mấy ngày rồi,\nngười ta nói ông Diệm\ncó lệnh chém những người\nlàm cách mạng ở khắp Nam Kỳ.", windowWidth/3, position1960);
    text("và rồi con và đồng đội\nsẽ mang bình yên\nđến cho đất nước mình.", 0, position1960+20);
    textSize(20);
    textLeading(23);
    text("Con yêu của mẹ ơi, mẹ nén nỗi nhớ mỗi ngày\nđể cầu nguyện cho con được bình an.", windowWidth/10, position1960x1);
    pop();

    //1971
    if (position1971>windowHeight) {
        position1971 = 0;
    };
    position1971 = position1971 + speed1971;
    push();
    textSize(32);
    textLeading(30);
    noStroke();
    textFont(inconsolata);
    fill('yellow');
    text("Mẹ yêu của con,\nxin mẹ đừng khóc vì con không thể\nliên lạc thường xuyên.", windowWidth/1.5, position1971);
    pop();

}