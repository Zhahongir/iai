document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".animated-fade-in");

    function isElementPartiallyVisible(el) {
        var rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function handleScroll() {
        animatedElements.forEach(function (element) {
            if (isElementPartiallyVisible(element)) {
                element.classList.add("fade-in");
            }
        });
    }

    // Запустите функцию handleScroll при загрузке страницы и при прокрутке
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});

    
document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".animated-fade-in-opacity");

    function isElementPartiallyVisible(el) {
        var rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function handleScroll() {
        animatedElements.forEach(function (element) {
            if (isElementPartiallyVisible(element)) {
                element.classList.add("fade-in-opacity");
            }
        });
    }

    // Запустите функцию handleScroll при загрузке страницы и при прокрутке
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".move-left");

    function isElementPartiallyVisible(el) {
        var rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function handleScroll() {
        animatedElements.forEach(function (element) {
            if (isElementPartiallyVisible(element)) {
                element.classList.add("move-left");
            }
        });
    }

    // Запустите функцию handleScroll при загрузке страницы и при прокрутке
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".move-right");

    function isElementPartiallyVisible(el) {
        var rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function handleScroll() {
        animatedElements.forEach(function (element) {
            if (isElementPartiallyVisible(element)) {
                element.classList.add("move-right");
            }
        });
    }

    // Запустите функцию handleScroll при загрузке страницы и при прокрутке
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});



document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".animated-fade-in-long");

    function isElementPartiallyVisible(el) {
        var rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function handleScroll() {
        animatedElements.forEach(function (element) {
            if (isElementPartiallyVisible(element)) {
                element.classList.add("fade-in-long");
            }
        });
    }

    // Запустите функцию handleScroll при загрузке страницы и при прокрутке
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});


$(document).ready(function () {
        
    var show = true;
    var countbox = ".count-run";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.count-run').css('opacity', '1');
            $('.count-run').spincrement({
                thousandSeparator: "",
                duration: 3000
            });
            
            show = false;
        }
    });
});