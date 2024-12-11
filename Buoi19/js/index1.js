const validationInput = (number) => {
    if (isNaN(number) || number === Infinity || number === "") {
        console.log("Vui lòng nhập số hợp lệ.");
        return false;
    }

    if (!Number.isInteger(number) || number < 0) {
        console.log("Vui lòng nhập số nguyên dương lớn hơn 0");
        return false;
    }

    return true;
};

const printSquare = (number) => {
    if (!validationInput(number)) {
        return;
    }
    for (let i = 1; i <= number; i++) {
        if (validationInput(i)) {
            console.log(` Số chính phương của ${i} là: ${i * i}`);
        }
    }
};

const number = +prompt("Nhập số number: ");

printSquare(number);
