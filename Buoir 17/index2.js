let a = +prompt("Nhập giá trị a: ");

let b = +prompt("Nhập giá trị b: ");

let c = +prompt("Nhập giá trị c: ");

if (a > b && a > c) {
    console.log(` ${a} số lớn nhất`);
} else if (b > a && b > c) {
    console.log(` ${b} số lớn nhất`);
} else if (c > a && c > b) {
    console.log(` ${c} là số lớn nhất`);
} else if (b > a && b < c) {
    console.log(`${c} là số lớn nhất`);
} else if (a > b && a < c) {
    console.log(`${c} là số lớn nhất`);
}
