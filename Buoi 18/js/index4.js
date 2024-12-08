function validation(weight, height) {
    if (
        weight === "" ||
        height === "" ||
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {
        console.log("Vui lòng nhập số chiều cao và cân nặng của bạn");
        return;
    }

    const chiSoBMI = (weight, height) => {
        if (weight / height ** 2 < 18.5) {
            console.log("Thiếu cân");
        } else if (
            weight / height ** 2 >= 18.5 &&
            weight / height ** 2 <= 22.9
        ) {
            console.log("Bình thường");
        } else if (weight / height ** 2 >= 23 && weight / height ** 2 <= 24.9) {
            console.log("Thừa cân");
        } else if (weight / height ** 2 >= 25) {
            console.log("Béo phì");
        }
    };

    return chiSoBMI(weight, height);
}

let weight = parseFloat(prompt("Nhập cân nặng của bạn (kg): "));

let height = parseFloat(prompt("Nhập chiều cao của bạn (m): "));

validation(weight, height);
