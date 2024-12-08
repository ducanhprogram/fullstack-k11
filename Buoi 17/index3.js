let a = +prompt("Nhập giá trị a: ");
let b = +prompt("Nhập giá trị b: ");

if (a > 0 && b > 0) {
    console.log("Cùng dấu dương");
} else if (a < 0 && b > 0) {
    console.log("Trái dấu");
} else if (a > 0 && b < 0) {
    console.log("Trái dấu");
} else if (a < 0 && b < 0) {
    console.log("Cùng dấu âm");
}
