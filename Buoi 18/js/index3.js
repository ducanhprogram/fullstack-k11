const isTriangle = (a, b, c) => {
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
        return true;
    }
    return false;
};

let a = parseFloat(prompt("Nhập cạnh a: "));

let b = parseFloat(prompt("Nhập cạnh b: "));

let c = parseFloat(prompt("Nhập cạnh c: "));

if (isTriangle(a, b, c)) {
    console.log(` ${a}, ${b}, ${c} là 3 cạnh của một tam giác`);
} else {
    console.log(` ${a}, ${b}, ${c} không phải là 3 cạnh của một tam giác`);
}
