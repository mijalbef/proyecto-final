document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburgerButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener("click", function () {
            if (mobileMenu.style.display === "block") {
                mobileMenu.style.display = "none";
            } else {
                mobileMenu.style.display = "block";
            }
        });
    }
});
