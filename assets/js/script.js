"use strict";

let leftIcon = document.querySelector(".slider .icons .left-icon");
let rightIcon = document.querySelector(".slider .icons .right-icon");



rightIcon.addEventListener("click", function () {
    let activeImage = document.querySelector(".active-image");
    activeImage.classList.remove("active-image");
    activeImage.classList.remove("right");
    activeImage.classList.remove("left");
    if (activeImage.nextElementSibling != null) {
        activeImage.nextElementSibling.classList.add("active-image");
        activeImage.classList.add("right");
        activeImage.classList.add("left");
    } else {
        this.parentNode.nextElementSibling.firstElementChild.classList.add("active-image");
        activeImage.classList.add("right");
        activeImage.classList.add("left");
    }
})


leftIcon.addEventListener("click", function () {
    let activeImage = document.querySelector(".active-image");
    activeImage.classList.remove("active-image");
    activeImage.classList.remove("right");
    activeImage.classList.remove("left");
    if (activeImage.previousElementSibling != null) {
        activeImage.previousElementSibling.classList.add("active-image");
        activeImage.classList.add("right");
        activeImage.classList.add("left");
    } else {
        this.parentNode.nextElementSibling.lastElementChild.classList.add("active-image");
        activeImage.classList.add("right");
        activeImage.classList.add("left");
    }
})
