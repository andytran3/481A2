const starElements = document.querySelectorAll(".star");

starElements.forEach(function(starElement) {
    starElement.addEventListener("click", function() {
        const currentColor = starElement.style.color;

        if (currentColor === "black") {
            starElement.style.color = "yellow";
        } else if (currentColor === "yellow") {
            starElement.style.color = "black";
        }
    });
});