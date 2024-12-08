const validation = (a, b, c) => {
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        return "Đây không phải là tam giác";
    }
    const isTriangle = (a, b, c) => {
        if (a + b > c && a + c > b && b + c > a) {
            console.log("Là ba cạnh của một tam giá");
        }
        return "Không phải là ba cạnh của một tam giác";
    };

    return isTriangle(a, b, c);
};

let edgeA = parseFloat(prompt("Nhập cạnh a: "));

let edgeB = parseFloat(prompt("Nhập cạnh b: "));

let edgeC = parseFloat(prompt("Nhập cạnh c: "));

console.log(validation(edgeA, edgeB, edgeC));
