const calculate = function () {
    let num1 = parseFloat(document.querySelector("#number1").value);
    let num2 = parseFloat(document.querySelector("#number2").value);

    const operation = document.querySelector("input[name='operation']:checked");

    if (isNaN(num1) || isNaN(num2)) {
        document.querySelector(".result").textContent =
            "Vui lòng nhập cả hai là số";
        return;
    }

    if (!operation) {
        document.querySelector(".result").textContent =
            "Vui lòng chọn phép toán";
        return;
    }

    let result;

    switch (operation.value) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                document.querySelector(".result").textContent =
                    "Không thể chia cho 0!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Lỗi!!!";
    }

    document.querySelector(".result").textContent = result;
};
