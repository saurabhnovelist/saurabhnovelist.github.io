// ==========================================
// 🐶 SAURABHNOVELIST SMART DOGGY ASSISTANT
// No API / No OpenAI Credits Required
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
                Reader Assistant हूँ। 🐶✨

                <br><br>

                आप मुझसे Novel, Shayari, Kavita,
                Free eBook या Author के बारे में पूछ सकते हैं।
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

            <button data-question="Shayari कहाँ पढ़ें?">
                📝 Shayari
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
       SMART ANSWER SYSTEM
    ========================= */

    function getAnswer(question) {

        const q = question
            .toLowerCase()
            .replace(/[?!.।,]/g, "")
            .trim();


        /* =========================
           NOVEL
        ========================= */

        if (
            q.includes("एक अनजान मुलाकात") ||
            q.includes("अनजान मुलाकात") ||
            q.includes("novel") ||
            q.includes("उपन्यास")
        ) {

            return `
                📖 <strong>एक अनजान मुलाकात</strong><br><br>

                यह Saurabh Verma का हिंदी उपन्यास है।<br><br>

                कहानी की शुरुआत वाराणसी एयरपोर्ट पर
                बारिश और खराब मौसम के बीच हुई एक
                अनजान मुलाकात से होती है। 🌧️✈️

                <br><br>

                शिवम और कविता की यह छोटी-सी मुलाकात,
                एक कप चाय और कुछ अनकहे एहसास आगे चलकर
                उनकी जिंदगी का महत्वपूर्ण हिस्सा बन जाते हैं। ❤️

                <br><br>

                ✍️ लेखक: <strong>Saurabh Verma</strong>
            `;

        }


        /* =========================
           FREE EBOOK
        ========================= */

        if (
            q.includes("free ebook") ||
            q.includes("फ्री ebook") ||
            q.includes("फ्री ईबुक") ||
            q.includes("free e book") ||
            q.includes("मुफ्त किताब") ||
            q.includes("फ्री किताब")
        ) {

            return `
                🎁 <strong>Free eBook Challenge</strong><br><br>

                Free eBook पाने के लिए आपको:

                <br><br>

                🎬 3 Reels पोस्ट करनी हैं।<br>
                📱 2 Stories पोस्ट करनी हैं।<br>
                👀 कुल 2,000+ Reel Views पूरे करने हैं।

                <br><br>

                Stories में
                <strong>@saurabhnovelist</strong>
                को tag करें।

                <br><br>

                Verification के बाद eligible participants
                को Free eBook दी जाएगी। 📚✨

                <br><br>

                👉 Website में <strong>🎁 Free eBook</strong>
                option खोलें।
            `;

        }


        /* =========================
           AUTHOR
        ========================= */

        if (
            q.includes("saurabh") ||
            q.includes("author") ||
            q.includes("लेखक") ||
            q.includes("लेखक कौन") ||
            q.includes("सौरभ वर्मा")
        ) {

            return `
                ✍️ <strong>Saurabh Verma</strong><br><br>

                SaurabhNovelist हिंदी लेखन से जुड़ा
                author platform है, जहाँ आपको
                हिंदी Novel, Shayari, Kavita और
                भावनात्मक कहानियाँ मिलती हैं। 📖✨

                <br><br>

                लेखक: <strong>Saurabh Verma</strong><br>
                Brand: <strong>SaurabhNovelist</strong>
            `;

        }


        /* =========================
           SHAYARI
        ========================= */

        if (
            q.includes("shayari") ||
            q.includes("शायरी") ||
            q.includes("शायरी कहाँ") ||
            q.includes("shayari kaha")
        ) {

            return `
                📝 <strong>Shayari</strong><br><br>

                SaurabhNovelist पर आपको हिंदी
                शायरियाँ और भावनात्मक पंक्तियाँ पढ़ने
                को मिलेंगी। ✨

                <br><br>

                👉 Website के
                <strong>Shayari</strong> section में जाएँ।
            `;

        }


        /* =========================
           KAVITA
        ========================= */

        if (
            q.includes("kavita") ||
            q.includes("कविता") ||
            q.includes("poem") ||
            q.includes("poetry")
        ) {

            return `
                🌸 <strong>मेरी कविताएँ</strong><br><br>

                SaurabhNovelist पर हिंदी कविताओं का
                अलग section है।

                <br><br>

                👉 Website में
                <strong>Kavita</strong> section खोलें।
            `;

        }


        /* =========================
           WEBSITE
        ========================= */

        if (
            q.includes("website") ||
            q.includes("वेबसाइट") ||
            q.includes("site") ||
            q.includes("साइट")
        ) {

            return `
                🌐 <strong>SaurabhNovelist</strong><br><br>

                यह एक हिंदी literary website है,
                जहाँ Novels, Shayari, Kavita,
                Stories और लेखक से जुड़ी जानकारी
                उपलब्ध है। 📖✨
            `;

        }


        /* =========================
           INSTAGRAM
        ========================= */

        if (
            q.includes("instagram") ||
            q.includes("इंस्टाग्राम") ||
            q.includes("insta")
        ) {

            return `
                📱 <strong>Instagram</strong><br><br>

                Official Instagram:
                <br><br>

                <strong>@saurabhnovelist</strong>

                <br><br>

                वहाँ Novel updates, Shayari,
                Reels और नए posts देख सकते हैं। ✨
            `;

        }


        /* =========================
           NOVEL PRICE
        ========================= */

        if (
            q.includes("price") ||
            q.includes("कीमत") ||
            q.includes("दाम") ||
            q.includes("कितने") ||
            q.includes("₹49") ||
            q.includes("49")
        ) {

            return `
                💰 <strong>Novel Price</strong><br><br>

                Website पर उपलब्ध जानकारी के अनुसार
                <strong>एक अनजान मुलाकात</strong> की
                कीमत ₹49 रखी गई है।
            `;

        }


        /* =========================
           HELLO
        ========================= */

        if (
            q === "hi" ||
            q === "hello" ||
            q === "hey" ||
            q.includes("नमस्ते") ||
            q.includes("हेलो")
        ) {

            return `
                नमस्ते! 👋🐶<br><br>

                मैं <strong>Saurabh AI</strong> हूँ। ✨

                <br><br>

                Novel, Shayari, Kavita,
                Free eBook या Author के बारे में
                मुझसे पूछ सकते हैं।
            `;

        }


        /* =========================
           THANK YOU
        ========================= */

        if (
            q.includes("thank") ||
            q.includes("thanks") ||
            q.includes("धन्यवाद") ||
            q.includes("शुक्रिया")
        ) {

            return `
                आपका स्वागत है! 🐶✨<br><br>

                SaurabhNovelist पर पढ़ते रहिए और
                अपने पसंदीदा शब्दों को महसूस करते रहिए। 📖❤️
            `;

        }


        /* =========================
           DEFAULT ANSWER
        ========================= */

        return `
            🐶 मुझे इस सवाल का exact जवाब अभी
            नहीं मिला।

            <br><br>

            आप इन विषयों के बारे में पूछ सकते हैं:

            <br><br>

            📖 <strong>Novel</strong><br>
            📝 <strong>Shayari</strong><br>
            🌸 <strong>Kavita</strong><br>
            🎁 <strong>Free eBook</strong><br>
            ✍️ <strong>Author</strong><br>
            📱 <strong>Instagram</strong><br>
            🌐 <strong>Website</strong>
        `;

    }


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


        /* THINKING MESSAGE */

        const thinking = document.createElement("div");

        thinking.className = "ai-message";

        thinking.innerHTML = `
            🐶 सोच रहा हूँ...
        `;

        messages.appendChild(thinking);

        messages.scrollTop = messages.scrollHeight;


        /* ANSWER */

        setTimeout(function () {

            thinking.innerHTML = getAnswer(question);

            messages.scrollTop = messages.scrollHeight;

        }, 500);

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
