let searchForm = document.querySelector(".search-from");

document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle("active");
    cartshopping.classList.remove("active");
    login.classList.remove("active");
    navbarmoblie.classList.remove("active");
}

let cartshopping = document.querySelector(".shopping-cart");

document.querySelector('#cart-btn').onclick = () => {
    searchForm.classList.remove("active");
    cartshopping.classList.toggle("active");
    login.classList.remove("active");
    navbarmoblie.classList.remove("active");
}

let login = document.querySelector(".login-form");

document.querySelector('#user-btn').onclick = () => {
        searchForm.classList.remove("active");
    cartshopping.classList.remove("active");
    login.classList.toggle("active");
    navbarmoblie.classList.remove("active");
}

let navbarmoblie = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = () => {
    searchForm.classList.remove("active");
    cartshopping.classList.remove("active");
    login.classList.remove("active");
    navbarmoblie.classList.toggle("active");
}

window.onscroll = () => {
    searchForm.classList.remove("active");
    cartshopping.classList.remove("active");
    login.classList.remove("active");
    navbarmoblie.classList.remove("active");
}


// Swiper-slide

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');

}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');

}