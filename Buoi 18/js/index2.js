const validation = (kwh) => {
    if (kwh <= 0 || isNaN(kwh) || kwh === "") {
        return "Số điện không hợp lệ";
    }

    let total = 0;
    const calcElectricity = (kwh) => {
        if (kwh <= 50) {
            total += kwh * 1678;
        } else if (kwh <= 100) {
            total += 50 * 1678 + (kwh - 50) * 1734;
        } else if (kwh <= 200) {
            total += 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
        } else if (kwh <= 300) {
            total += 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536;
        } else if (kwh <= 400) {
            total +=
                50 * 1678 +
                50 * 1734 +
                100 * 2014 +
                100 * 2536 +
                (kwh - 300) * 2834;
        } else if (kwh >= 401) {
            total +=
                50 * 1678 +
                50 * 1734 +
                100 * 2014 +
                100 * 2536 +
                100 * 2834 +
                (kwh - 400) * 2927;
        }

        return total;
    };

    return calcElectricity(kwh);
};

const kWh = parseFloat(prompt("Nhập số kwh sử dụng:  "));

const bill = validation(kWh);

console.log(` Số tiền điện là: ${bill.toLocaleString("vi")} VNĐ`);
