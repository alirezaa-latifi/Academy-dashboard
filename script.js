"use strict";
console.log("connected");

// //  Menu Tab Switches
const menuTabList = document.querySelectorAll(".nav__link");
const mainContentList = document.querySelectorAll(".main__content");

menuTabList.forEach((item, index) => {
    item.addEventListener("click", function () {
        menuTabList.forEach((item) => {
            item.classList.remove("nav__link--active");
        });

        mainContentList.forEach((item) => {
            item.classList.remove("main__content--active");
        });

        item.classList.add("nav__link--active");
        item.blur();

        mainContentList[index].classList.add("main__content--active");
    });
});

// Calender
const today = new Date().setHours(0, 0, 0, 0);
const defaultOptions = {
    defaultViewDate: today,
    nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    prevArrow: '<i class="fa-solid fa-angle-left"></i>',
};
const elem = document.getElementById("inline");
const datepicker = new Datepicker(elem, defaultOptions);
