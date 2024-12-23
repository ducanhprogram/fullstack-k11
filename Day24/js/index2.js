const fibonacci = (n) => {
    if (
        n === undefined ||
        typeof n !== "number" ||
        !Number.isInteger(n) ||
        n <= 0
    ) {
        console.log("Số phần tử không hợp lệ");
        return;
    }

    let fidArray = [];

    if (n === 1) {
        fidArray.push(0);
    } else {
        // Khởi tạo
        fidArray = [0, 1];
        for (let i = 2; i < n; i++) {
            fidArray.push(fidArray[i - 1] + fidArray[i - 2]);
        }
    }
    // console.log(fidArray);
    console.log(fidArray.join(" "));
};
const input = +prompt("Nhập số phần tử của dãy Fibonacci: ");

fibonacci(input); // 0 1 1 2 3

// fibonacci(10); // 0 1 1 2 3 5 8 13 21 34

// fibonacci(0); // Số phần tử không hợp lệ

// fibonacci(-5); // Số phần tử không hợp lệ

// fibonacci("abc"); // Số phần tử không hợp lệ

// fibonacci(1); // 0
