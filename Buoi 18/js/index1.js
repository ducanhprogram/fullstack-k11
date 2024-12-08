function validation(thuNhap) {
    if (thuNhap === "" || thuNhap < 0 || isNaN(thuNhap)) {
        console.log("Vui lòng nhập lại số thu nhập cá nhân");
        return;
    }

    let tax = 0;
    const calcTax = () => {
        if (thuNhap <= 11000000) {
            console.log("Không tính thuế!!! Cần làm việc kiếm thêm tiền");
            return 0;
        } else if (thuNhap > 11000000) {
            tax += (thuNhap - 11000000) * 0.05;
        } else if (thuNhap <= 50000000) {
            tax += (25000000 - 11000000) * 0.05 + (thuNhap - 25000000) * 0.1;
        } else if (thuNhap <= 80000000) {
            tax +=
                (25000000 - 11000000) * 0.05 +
                (50000000 - 25000000) * 0.1 +
                (thuNhap - 50000000) * 0.2;
        } else {
            tax +=
                (25000000 - 11000000) * 0.05 +
                (50000000 - 25000000) * 0.1 +
                (80000000 - 50000000) * 0.2 +
                (thuNhap - 80000000) * 0.3;
        }
        return tax;
    };
    return calcTax();
}

let thuNhap = parseFloat(prompt("Vui lòng nhập thu nhập cá nhân: "));

let thuePhaiTra = validation(thuNhap);

console.log(
    ` Thuế phải trả cho thu nhập ${thuNhap.toLocaleString(
        "vi-Vn"
    )} đồng là: ${thuePhaiTra.toLocaleString("vi-Vn")} đồng `
);
