// ❤️🌸 SaurabhNovelist Multi Color Heart & Flower Effect

(function () {

    const style = document.createElement("style");

    style.textContent = `
        .sn-click-heart {
            position: fixed;
            pointer-events: none;
            z-index: 999999;

            font-size: 23px;
            line-height: 1;

            opacity: 0;

            transform: translate(-50%, -50%) scale(.65);

            animation: snHeartFloat 1.2s ease-out forwards;

            filter:
                drop-shadow(0 0 3px rgba(0,0,0,.9))
                drop-shadow(0 1px 2px rgba(0,0,0,.8));
        }

        @keyframes snHeartFloat {

            0% {
                opacity: 0;
                transform:
                    translate(-50%, -50%)
                    scale(.65);
            }

            15% {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(1.15);
            }

            35% {
                opacity: .95;
                transform:
                    translate(-50%, -50%)
                    scale(1);
            }

            100% {
                opacity: 0;
                transform:
                    translate(-50%, 45px)
                    scale(.7);
            }
        }
    `;

    document.head.appendChild(style);


    // ❤️🧡💛💚💙💜🩷🤎🖤
    // 🌸🌺🌷🌻🌼🪻
    const symbols = [
        "❤️",
        "🧡",
        "💛",
        "💚",
        "💙",
        "💜",
        "🩷",
        "🤎",
        "🖤",
        "🌸",
        "🌺",
        "🌷",
        "🌻",
        "🌼",
        "🪻"
    ];


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

        // Random heart / flower
        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];


        // Tap की exact जगह
        heart.style.left = event.clientX + "px";
        heart.style.top = event.clientY + "px";


        document.body.appendChild(heart);


        // वही पुराना 1.2 second
        setTimeout(function () {
            heart.remove();
        }, 1200);

    });

})();
