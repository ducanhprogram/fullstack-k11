const generateMultiplicationTable = () => {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `<h2> Bảng cửu chương số ${i} </h2><br>`;
        for (let j = 1; j <= 10; j++) {
            result += `${i} * ${j} = ${i * j} <br>`;
        }
        result += `<hr>`;
    }

    document.body.innerHTML = result;
};

generateMultiplicationTable();
