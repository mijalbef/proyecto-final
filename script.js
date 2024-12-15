document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector("#hamburgerButton");
    const collapse = document.querySelector("#navbarNav");

    toggler.addEventListener("click", function () {
        collapse.classList.toggle("show");
        toggler.classList.toggle("collapsed");
    });
});
