let timeNextYear = new Date("2026-01-01,00:00:00");
console.log(timeNextYear);

function countdown() {
    let now = new Date();
    // console.log(now);
    const remainingTime = timeNextYear - now;
    // console.log(remainingTime);

    if (remainingTime > 0) {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        console.log(days);
        const hours = Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.close();
        document.write(
            `<h1>Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây là đến tết 2026</h1>`
        );

        // document.getElementById(
        //     "demo"
        // ).innerHTML = `Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây là đến tết 2026`;
    } else {
        clearInterval(interval);
        document.close();
        document.write(`Chúc Mừng Năm Mới 2026!`);
    }
}

const interval = setInterval(countdown, 1000);
