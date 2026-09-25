// ❤️ SaurabhNovelist Tap / Click Heart Effect

(function () {

    const style = document.createElement("style");

    style.textContent = `
        .sn-click-heart {
            position: fixed;
            pointer-events: none;
            z-index: 999999;

            color: #d4af37;
            font-size: 20px;
            line-height: 1;

            opacity: 0;

            transform: translate(-50%, -50%) scale(.6);

            animation: snHeartFloat 1.2s ease-out forwards;
        }

        @keyframes snHeartFloat {

            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(.6);
            }

            20% {
                opacity: .65;
                transform: translate(-50%, -50%) scale(1);
            }

            100% {
                opacity: 0;
                transform: translate(-50%, 45px) scale(.65);
            }
        }
    `;

    document.head.appendChild(style);


    document.addEventListener("click", function (event) {

        // Buttons, links और Doggy पर effect नहीं
        if (
            event.target.closest("button") ||
            event.target.closest("a") ||
            event.target.closest("#saurabh-doggy") ||
            event.target.closest("#saurabh-ai-chat")
        ) {
            return;
        }


        const heart = document.createElement("span");

        heart.className = "sn-click-heart";

        heart.textContent = "♥";

        heart.style.left = event.clientX + "px";
        heart.style.top = event.clientY + "px";


        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 1200);

    });

})();
