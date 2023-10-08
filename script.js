document.addEventListener("DOMContentLoaded", function () {
    const isSamsung = /SAMSUNG/i.test(navigator.userAgent);

    if (!isSamsung) {
        const overlay = document.getElementById("overlay");
        const popup = document.getElementById("popup");
        const closePopup = document.getElementById("closePopup");

        overlay.style.display = "flex";

        closePopup.addEventListener("click", function () {
            overlay.style.display = "none";
        });
    }
});
