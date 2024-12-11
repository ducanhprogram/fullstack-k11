const isMultiplication = () => {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `<h1> Bảng cửu chương số ${i} </h1><br>`;
        for (let j = 1; j <= 10; j++) {
            result += `${i} * ${j} = ${i * j} <br>`;
        }
        result += `<hr>`;
    }

    document.body.innerHTML = result;
};

isMultiplication();
