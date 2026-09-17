// ==========================================
// 🐶 SAURABHNOVELIST AI DOGGY ASSISTANT
// Front-end version
// ==========================================

(function () {

    /* =========================
       DOGGY BUTTON
    ========================= */

    const dog = document.createElement("div");
    dog.id = "saurabh-doggy";

    dog.innerHTML = `
        <div class="doggy-face">🐶</div>
        <div class="doggy-name">Saurabh AI</div>
    `;

    document.body.appendChild(dog);


    /* =========================
       CHAT BOX
    ========================= */

    const chat = document.createElement("div");
    chat.id = "saurabh-ai-chat";

    chat.innerHTML = `
        <div class="ai-header">
            <div>
                🐶 <strong>Saurabh AI</strong>
                <span class="ai-status">● Online</span>
            </div>

            <button id="ai-close">×</button>
        </div>

        <div class="ai-messages" id="ai-messages">

            <div class="ai-message">
                नमस्ते! 👋<br><br>
                मैं <strong>SaurabhNovelist</strong> का
                Reader Assistant हूँ। 🐶
                <br><br>
                आप मुझसे Novel, Shayari, Kavita
                या website के बारे में पूछ सकते हैं।
            </div>

        </div>

        <div class="ai-suggestions">

            <button data-question="एक अनजान मुलाकात किस बारे में है?">
                📖 Novel
            </button>

            <button data-question="Free eBook कैसे मिलेगी?">
                🎁 Free eBook
            </button>

            <button data-question="SaurabhNovelist के बारे में बताओ">
                ✍️ Author
            </button>

        </div>

        <div class="ai-input-area">

            <input
                type="text"
                id="ai-input"
                placeholder="अपना सवाल लिखें..."
            >

            <button id="ai-send">
                ➤
            </button>

        </div>
    `;

    document.body.appendChild(chat);


    /* =========================
       OPEN / CLOSE
    ========================= */

    dog.addEventListener("click", function () {

        chat.classList.toggle("ai-open");

    });


    document.getElementById("ai-close").addEventListener("click", function () {

        chat.classList.remove("ai-open");

    });


    /* =========================
       MESSAGE FUNCTION
    ========================= */

    function sendMessage(question) {

        if (!question.trim()) return;

        const messages = document.getElementById("ai-messages");

        /* USER MESSAGE */

        const userMessage = document.createElement("div");

        userMessage.className = "user-message";

        userMessage.textContent = question;

        messages.appendChild(userMessage);


        messages.scrollTop = messages.scrollHeight;

    }


    /* =========================
       SEND BUTTON
    ========================= */

    document.getElementById("ai-send").addEventListener("click", function () {

        const input = document.getElementById("ai-input");

        sendMessage(input.value);

        input.value = "";

    });


    /* =========================
       ENTER KEY
    ========================= */

    document.getElementById("ai-input").addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            document.getElementById("ai-send").click();

        }

    });


    /* =========================
       QUICK QUESTIONS
    ========================= */

    document.querySelectorAll(".ai-suggestions button").forEach(function (button) {

        button.addEventListener("click", function () {

            sendMessage(button.dataset.question);

        });

    });


    /* =========================
       SAFE HTML
    ========================= */

    function escapeHTML(text) {

        const div = document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =========================
       DOGGY MOVEMENT
    ========================= */

    let dogPosition = 15;
    let direction = 1;

    setInterval(function () {

        if (chat.classList.contains("ai-open")) return;

        dogPosition += direction * 0.35;

        if (dogPosition >= 78) {

            direction = -1;

        }

        if (dogPosition <= 8) {

            direction = 1;

        }

        dog.style.left = dogPosition + "%";

    }, 80);

})();
