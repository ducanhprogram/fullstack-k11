const validationIncome = (income) => {
    if (income === "" || income < 0 || isNaN(income) || !isFinite(income)) {
        console.log("Vui lòng nhập lại số thu nhập cá nhân");
        return false;
    }
    return true;
};

const calcTax = (income) => {
    let tax = 0;
    if (income <= 11000000) {
        console.log("Không tính thuế!!! Cần làm việc kiếm thêm tiền");
        return 0;
    } else if (income > 11000000 && income <= 25000000) {
        tax += (income - 11000000) * 0.05;
    } else if (income > 25000000 && income <= 50000000) {
        tax += (25000000 - 11000000) * 0.05 + (income - 25000000) * 0.1;
    } else if (income > 50000000 && income <= 80000000) {
        tax +=
            (25000000 - 11000000) * 0.05 +
            (50000000 - 25000000) * 0.1 +
            (income - 50000000) * 0.2;
    } else {
        tax +=
            (25000000 - 11000000) * 0.05 +
            (50000000 - 25000000) * 0.1 +
            (80000000 - 50000000) * 0.2 +
            (income - 80000000) * 0.3;
    }
    return tax;
};

let income = parseFloat(prompt("Vui lòng nhập thu nhập cá nhân: "));

if (validationIncome(income)) {
    let taxPayable = calcTax(income);

    console.log(
        ` Thuế phải trả cho thu nhập ${income.toLocaleString(
            "vi-Vn"
        )} đồng là: ${taxPayable.toLocaleString("vi-Vn")} đồng `
    );
}
