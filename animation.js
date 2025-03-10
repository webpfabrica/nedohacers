document.addEventListener("DOMContentLoaded", function () {
    // Проверяем, был ли пользователь на сайте в текущей сессии
    if (sessionStorage.getItem("visited")) {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        let slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        function showNextSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }

        let slideInterval = setInterval(showNextSlide, 2000);

        setTimeout(() => {
            clearInterval(slideInterval);
            document.getElementById("splash-screen").classList.add("fade-out");
            setTimeout(() => {
                document.getElementById("splash-screen").style.display = "none";
                document.getElementById("main-content").classList.remove("hidden");
                sessionStorage.setItem("visited", "true"); // Записываем, что пользователь заходил
            }, 1000);
        }, 4000);
    }
});