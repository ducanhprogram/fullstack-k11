const checkSquare = (number) => {
    if (isNaN(number) || number === Infinity || number === "") {
        console.log("Vui lòng nhập số hợp lệ.");
        return false;
    }

    if (!Number.isInteger(number) || number < 0) {
        console.log("Vui lòng nhập số nguyên dương lớn hơn 0");
        return false;
    }

    if (number === 0) {
        return true;
    }
    return true;
};

const isSpuare = (number) => {
    if (!checkSquare(number)) {
        return;
    }
    for (let i = 0; i <= number; i++) {
        if (checkSquare(i)) {
            console.log(` Số chính phương của ${i} là: ${i ** 2}`);
        }
    }
};

const number = +prompt("Nhập số number: ");

isSpuare(number);
