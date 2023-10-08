document.addEventListener("DOMContentLoaded", function () {
    if (!/Samsung/.test(navigator.userAgent)) {
        const overlay = document.getElementById("overlay");
        const popup = document.getElementById("popup");
        const closePopup = document.getElementById("closePopup");

        overlay.style.display = "flex";

        closePopup.addEventListener("click", function () {
            overlay.style.display = "none";
        });
    }
});
