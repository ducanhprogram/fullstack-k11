function validation(weight, height) {
    if (
        weight === "" ||
        height === "" ||
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0 ||
        weight === Infinity ||
        height === Infinity
    ) {
        return "Vui lòng nhập số chiều cao và cân nặng hợp lệ!";
    }
    const bmi = calculateBMI(weight, height);
    return determineBMI(bmi);
}

function calculateBMI(weight, height) {
    return weight / height ** 2;
}

const determineBMI = (bmi) => {
    if (bmi < 18.5) {
        return "Thiếu cân";
    } else if (bmi >= 18.5 && bmi <= 22.9) {
        return "Bình Thường";
    } else if (bmi > 22.9 && bmi < 25) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
};

let weight = parseFloat(prompt("Nhập cân nặng của bạn (kg): "));

let height = parseFloat(prompt("Nhập chiều cao của bạn (m): "));

var result = validation(weight, height);

console.log(result);
