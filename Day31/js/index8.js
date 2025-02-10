const calculateBill = function (e) {
    const totalBill = parseFloat(document.querySelector("#total-bill").value);
    const personNumber = parseInt(
        document.querySelector("#person-number").value
    );
    const tips = parseFloat(document.querySelector("#tips").value) || 0;
    const resultDiv = document.querySelector(".result");

    if (isNaN(totalBill) || totalBill <= 0) {
        resultDiv.textContent = "Tổng bill không hợp lệ!!!";
        return;
    }

    if (
        isNaN(personNumber) ||
        personNumber <= 0 ||
        !Number.isInteger(personNumber)
    ) {
        resultDiv.textContent = "Số người phải nguyên lớn hơn 0";
        return;
    }

    if (tips < 0 || tips > totalBill) {
        resultDiv.textContent = "Tiền tip phải nhỏ hơn hoặc bằng tổng bill.";
        return;
    }

    const totalPayment = totalBill + tips;
    const result = totalPayment / personNumber;

    resultDiv.innerHTML = `
   <p> Mỗi người cần trả: <strong>${result.toFixed(2)}</strong> VND</p> 
    <p>Tổng số tiền cần trả: <strong>${totalBill.toFixed(2)}</strong> VND</p>
    `;
};
