let a = +prompt("Nhập giá trị a: ");

let b = +prompt("Nhập giá trị b: ");

console.log(` Giá trị cũ: a: ${a} \n b: ${b}`);

b = b + a;
a = b - a;
b = b - a;

console.log(`Giá trị mới: a: ${a} \n b: ${b}`);
