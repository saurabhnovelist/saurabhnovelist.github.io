// ❤️ SaurabhNovelist Click Heart Effect

document.addEventListener("click", function (event) {

    // Buttons, links और Doggy पर heart न बनाएं
    if (
        event.target.closest("button") ||
        event.target.closest("a") ||
        event.target.closest("#saurabh-doggy") ||
        event.target.closest("#saurabh-ai-chat")
    ) {
        return;
    }

    const heart = document.createElement("div");

    heart.className = "click-heart";
    heart.textContent = "♥";

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1200);

});
