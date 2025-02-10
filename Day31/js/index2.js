const slidesData = [
    {
        image: "https://picsum.photos/id/25/800/400",
        title: "Slide 1",
    },
    {
        image: "https://picsum.photos/id/27/800/400",
        title: "Slide 2",
    },
    {
        image: "https://picsum.photos/id/28/800/400",
        title: "Slide 3",
    },
    {
        image: "https://picsum.photos/id/29/800/400",
        title: "Slide 4",
    },
];

const heroSection = document.querySelector("#hero-section");
const mySlides = document.querySelector(".my-slides");
const carouselDot = document.querySelector(".carousel-dots");

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

slidesData.forEach(function (slideData, index) {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    if (index === 0) {
        slide.classList.add("active");
    }
    slide.innerHTML = `
        <img src="${slideData.image}" width="100%" alt="${slideData.title}">
        <h2 class="title-slide">${slideData.title}</h2>
    `;

    mySlides.append(slide);

    const dot = document.createElement("span");
    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", function (e) {
        const dots = document.querySelectorAll(".dot");
        document.querySelectorAll(".dot").forEach(function (d) {
            d.classList.remove("active");
        });

        e.target.classList.add("active");
        const index = Array.from(dots).indexOf(e.target);
        console.log(index);
        showSlide(index);
    });
    carouselDot.append(dot);
});

let currentIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
}

function handlePrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slidesData.length - 1;
    }
    showSlide(currentIndex);
}

function handleNexSlide() {
    currentIndex++;
    if (currentIndex >= slidesData.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

btnPrev.addEventListener("click", handlePrevSlide);
btnNext.addEventListener("click", handleNexSlide);

setInterval(handleNexSlide, 3000);
