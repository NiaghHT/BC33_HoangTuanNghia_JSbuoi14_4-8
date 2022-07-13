//BT1
// Sơ đồ 3 khối
//Input: ngày tháng năm từ người dung (hardcode)
//Process: if ngày = 30 hoặc 31 tùy theo tháng thì tiếp theo = 1 và tháng +1
//nếu ngày là 31/12 thì ngày tiếp theo 1/1 năm +1
// trường hợp đặc biệt tháng 2 có 28 ngày
//Output: in ra màn hình ngày tiếp theo .
var day = 1;
var month = 9;
var year = 2012;
// switch (month) {
//     case 1, 3, 5, 7, 8, 10, 12:
//         if (day == 31) {
//             month += 1;
//             day = 1;
//             console.log("ngày tiếp theo =", day, month, year)
//         } else if (day == 31 && month == 12) {
//             day = 1;
//             month = 1;
//             year += 1;
//             console.log("ngày tiếp theo = ", day, month, year)
//         } else {
//             day += 1;
//             console.log("ngày tiếp theo =", day, month, year)
//         }
//         break;
//     case 2:
//         if (day == 28) {
//             month += 1;
//             day = 1;
//             console.log("ngày tiếp theo =", day, month, year)
//         } else {
//             day += 1;
//             console.log("ngày tiếp theo =", day, month, year)
//         }
//         break;
//     case 4, 6, 9, 11:
//         if (day == 30) {
//             month += 1;
//             day = 1;
//             console.log("ngày tiếp theo =", day, month, year)
//         } else {
//             day += 1;
//             console.log("ngày tiếp theo =", day, month, year)
//         }
//         break;
// }
if (day == 31 && month == 12) {
    day = 1
    month = 1
    year += 1
    console.log("ngày tiếp theo = ", day, month, year)
} else if (day == 28 && month == 2) {
    month += 1
    day = 1
    console.log("ngày tiếp theo =", day, month, year)
} else if (day == 30 && month == 4) {
    month += 1
    day = 1
    console.log("ngày tiếp theo =", day, month, year)
} else if (day == 30 && month == 6) {
    month += 1
    day = 1
    console.log("ngày tiếp theo =", day, month, year)
} else if (day == 30 && month == 9) {
    day = 1
    month += 1
    console.log("ngày tiếp theo =", day, month, year)
} else if (day == 30 && month == 11) {
    month += 1
    day = 1
    console.log("ngày tiếp theo =", day, month, year)
} else {
    day += 1
    console.log("ngày tiếp theo =", day, month, year)
}

//BT2
// Sơ đồ 3 khối
//Input: ngày tháng năm từ người dung (hardcode)
//Process: 1,3,5,7,8,10,12 tháng có 31 ngày 4,6,9,11 30ngay
// trường hợp đặc biệt tháng 2 có 28 hoặc 29 ngày
//Output: in ra màn hình tháng có bn ngày
var months = 2;
var years = 2020;
var leapyear1 = years % 4;
var leapyear2 = years % 400;
switch (months) {
    case 1:
        console.log("thang co 31 ngay")
        break;
    case 3:
        console.log("thang co 31 ngay")
        break;
    case 5:
        console.log("thang co 31 ngay")
        break;
    case 7:
        console.log("thang co 31 ngay")
        break;
    case 8:
        console.log("thang co 31 ngay")
        break;
    case 10:
        console.log("thang co 31 ngay")
        break;
    case 12:
        console.log("thang co 31 ngay")
        break;
    case 4:
        console.log("thang co 30 ngay")
        break;
    case 6:
        console.log("thang co 30 ngay")
        break;
    case 9:
        console.log("thang co 30 ngay")
        break;
    case 11:
        console.log("thang co 30 ngay")
        break;
    case 2:
        if (leapyear1 == 0 || leapyear2 == 0) { console.log(" co 29 ngay") } else { console.log(" co 28 ngay") }
        break;
    default:
        console.log("thang khong hop le");
}

//BT3
//Input : số 3 chữ số bất kỳ
//Process: lấy hàng trăm chục đơn vị input
//gọi tên từng trường hợp trăm chục đơn vị 
//output : xuất ra màn hình
var number = 312;
var hundreds = Math.floor(number / 100);
var dozens = Math.floor((number % 100) / 10);
var units = number % 10;
switch (hundreds) {
    case 1:
        console.log("một trăm")
        break;
    case 2:
        console.log("hai trăm")
        break;
    case 3:
        console.log("ba trăm")
        break;
    case 4:
        console.log("bốn trăm")
        break;
    case 5:
        console.log("năm trăm")
        break;
    case 6:
        console.log("sáu trăm")
        break;
    case 7:
        console.log("bảy trăm")
        break;
    case 8:
        console.log("tám trăm")
        break;
    case 9:
        console.log("chín trăm")
        break;
}

switch (dozens) {
    case 1:
        console.log("mười")
        break;
    case 2:
        console.log("hai mươi")
        break;
    case 3:
        console.log("ba mươi")
        break;
    case 4:
        console.log("bốn mươi")
        break;
    case 5:
        console.log("năm mươi")
        break;
    case 6:
        console.log("sáu mươi")
        break;
    case 7:
        console.log("bảy mươi")
        break;
    case 8:
        console.log("tám mươi")
        break;
    case 9:
        console.log("chín mươi")
        break;
}

switch (units) {
    case 1:
        console.log("một")
        break;
    case 2:
        console.log("hai ")
        break;
    case 3:
        console.log("ba ")
        break;
    case 4:
        console.log("bốn ")
        break;
    case 5:
        console.log("năm ")
        break;
    case 6:
        console.log("sáu ")
        break;
    case 7:
        console.log("bảy ")
        break;
    case 8:
        console.log("tám ")
        break;
    case 9:
        console.log("chín ")
        break;
}

//BT4
//Input : có tên và tọa độ của 3 sinh viên và trường học (hardcode)
//Process : tính độ dài đoạn thẳng theo công thức d = Math.sqrt(Math.pow(xa,b,c - x, 2) + Math.pow(ya,bc - y, 2));
//sử dụng if else so sánh độ dài 
//Output : xuất ra màn hình ai đi học xa nhất
var nameA = "văn A";
var xa = 12;
var ya = 20;
var nameB = "văn B";
var xb = 10;
var yb = 30;
var nameC = "văn C";
var xc = 9;
var yc = 40;
var school = "cybersoft";
var x = 2;
var y = 7;
var longA = Math.sqrt(Math.pow(xa - x, 2) + Math.pow(ya - y, 2));
var longB = Math.sqrt(Math.pow(xb - x, 2) + Math.pow(yb - y, 2));
var longC = Math.sqrt(Math.pow(xc - x, 2) + Math.pow(yc - y, 2));
if (longA > longB && longA > longC) {
    console.log(nameA, "đi học xa nhất");
} else if (longB > longA && longB > longC) {
    console.log(nameB, "đi học xa nhất");
} else if (longC > longB && longC > longA) {
    console.log(nameC, "đi học xa nhất");
}