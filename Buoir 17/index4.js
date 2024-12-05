let a = +prompt("Nhập giá trị a: ");

let b = +prompt("Nhập giá trị b: ");

let c = +prompt("Nhập giá trị c");

if (a > b && a > c && b > c) {
    console.log(` Số thứ tự tăng dần: ${a} > ${b} > ${c} `);
} else if (a < b && a < c && b > c) {
    console.log(` Số thứ tự tăng dần: ${b} > ${c} > ${a} `);
} else if (a < b && a > c && b > c) {
    console.log(` Số thứ tự tăng dần: ${b} > ${a} > ${c} `);
} else if (a > b && a > c && c > b) {
    console.log(` Số thứ tự tăng dần: ${a} > ${c} > ${b} `);
} else if (a > b && c > a && c > b) {
    console.log(` Số thứ tự tăng dần: ${c} > ${a} > ${b} `);
} else if (c > a && c > b && b > a) {
    console.log(` Số thứ tự tăng dần: ${c} > ${b} > ${a} `);
}
