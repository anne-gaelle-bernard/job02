document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const openBtn = document.getElementById("openPopup");
    const closeBtn = document.getElementById("closePopup");

    openBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
