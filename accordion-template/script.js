document.addEventListener("DOMContentLoaded", function() {

    const plusIcons = document.querySelectorAll(".plus-icon");

    plusIcons.forEach(function(plusIcon) {
        plusIcon.style.cursor = "pointer";

        plusIcon.addEventListener("click", function() {
                                                //find container
            const container = plusIcon.closest(".list-item");
                                                //find paragraph
            const content = container.querySelector(".text-content");

            if (content) {
                content.classList.toggle("active");
                plusIcon.textContent = content.classList.contains("active") ? "-" : "+";
            }
        });
});
});