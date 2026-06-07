"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".menu-toggle");
    var navigation = document.querySelector(".primary-nav");
    var yearElements = document.querySelectorAll("[data-current-year]");
    var currentYear = new Date().getFullYear().toString();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", function () {
        var isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.addEventListener("click", function (event) {
        if (event.target.matches("a") && window.innerWidth <= 680) {
            menuButton.setAttribute("aria-expanded", "false");
            navigation.classList.remove("is-open");
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 680) {
            menuButton.setAttribute("aria-expanded", "false");
            navigation.classList.remove("is-open");
        }
    });
});
