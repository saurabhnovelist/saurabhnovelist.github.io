// ==========================================
// 🐶 SAURABHNOVELIST SMART DOGGY ASSISTANT (UPDATED & INTERACTIVE)
// Direct Links + In-Chat QR Code & WhatsApp Direct Connect
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
                मैं <strong>SaurabhNovelist</strong> का AI Reader Assistant हूँ। 🐶✨
                <br><br>
                आप मुझसे Novel, Shayari, कविता, कड़वी सच्चाई, Free eBook या Author के बारे में पूछ सकते हैं।
            </div>

        </div>

        <div class="ai-suggestions">

            <button data-question="एक अनजान मुलाकात किस बारे में है?">
                📖 Novel
            </button>

            <button data-question="Novel कैसे खरीदें?">
                🛒 Buy ₹49 (QR)
            </button>

            <button data-question="Free 20 Pages Preview कैसे पढ़ें?">
                📄 Free 20 Pages
            </button>

            <button data-question="Free eBook कैसे मिलेगी?">
                🎁 Free eBook
            </button>

            <button data-question="कविता और शायरी कहाँ पढ़ें?">
                ✍️ कविता & शायरी
            </button>

            <button data-question="SaurabhNovelist से संपर्क कैसे करें?">
                📞 Support
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
           BUY NOVEL / QR CODE / PAYMENT
        ========================= */

        if (
            q.includes("buy") ||
            q.includes("खरीद") ||
            q.includes("purchase") ||
            q.includes("order") ||
            q.includes("कैसे खरीदें") ||
            q.includes("qr") ||
            q.includes("क्यूआर") ||
            q.includes("pay") ||
            q.includes("payment") ||
            q.includes("49") ||
            q.includes("₹49") ||
            q.includes("price") ||
            q.includes("कीमत") ||
            q.includes("दाम")
        ) {

            return `
                🛒 <strong>Novel "एक अनजान मुलाकात" खरीदें (Full Access)</strong><br><br>
                💰 <strong>कीमत:</strong> केवल ₹49<br><br>
                📲 <strong>नीचे दिए गए QR कोड को Scan करके Pay करें:</strong><br><br>
                <div style="background:#fff; padding:10px; border-radius:10px; text-align:center; max-width:210px; margin:5px auto; border:2px solid #d4af37;">
                    <img src="images/qr.png" alt="Payment QR Code" style="width:100%; height:auto; border-radius:6px; display:block;">
                </div>
                <br>
                ✅ <strong>पेमेंट के बाद क्या करें?</strong><br>
                1. अपने पेमेंट का Screenshot लें।<br>
                2. नीचे दिए गए WhatsApp लिंक पर सीधे भेजें:<br>
                👉 <a href="https://wa.me/917268802785?text=Hello,%20maine%20novel%20ke%20liye%20payment%20kar%20diya%20hai.%20Ye%20raha%20screenshot." target="_blank" style="color:#25d366; font-weight:bold; text-decoration:underline;">📲 7268802785 (WhatsApp पर भेजें)</a><br><br>
                🔗 आप Reader पेज पर जाकर भी Pay कर सकते हैं:<br>
                👉 <a href="novel-reader.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 Novel Reader Page खोलें</a>
            `;

        }


        /* =========================
           FREE PREVIEW / 20 PAGES
        ========================= */

        if (
            q.includes("sample") ||
            q.includes("preview") ||
            q.includes("20 page") ||
            q.includes("20 पेज") ||
            q.includes("फ्री पढ़") ||
            q.includes("पहले पढ़ना") ||
            q.includes("chapter 1")
        ) {

            return `
                📖 <strong>Free 20 Pages Preview</strong><br><br>
                आप <strong>'एक अनजान मुलाकात'</strong> के शुरुआती 20 पेज बिल्कुल मुफ़्त में ऑनलाइन पढ़ सकते हैं या PDF देख सकते हैं!<br><br>
                👉 <a href="ek-anjan-mulakat-preview-20-pages.pdf" target="_blank" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📄 20 Pages Free PDF खोलें</a><br>
                👉 <a href="novel-reader.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 Novel Reader पर जाएँ</a>
            `;

        }


        /* =========================
           NOVEL INFO
        ========================= */

        if (
            q.includes("एक अनजान मुलाकात") ||
            q.includes("अनजान मुलाकात") ||
            q.includes("novel") ||
            q.includes("उपन्यास") ||
            q.includes("तन्हा रास्ते")
        ) {

            return `
                📖 <strong>SaurabhNovelist Novels:</strong><br><br>
                1. <strong>एक अनजान मुलाकात:</strong><br>
                वाराणसी एयरपोर्ट पर बारिश और खराब मौसम के बीच शुरू हुई एक खूबसूरत और भावनात्मक प्रेम कहानी। 🌧️✈️❤️<br>
                👉 <a href="novel.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">🔗 Novel Page देखें</a> | <a href="novel-reader.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 पढ़ना शुरू करें</a><br><br>
                2. <strong>तन्हा रास्ते:</strong> (Coming Soon ✨)<br>
                👉 <a href="novels.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📚 All Novels Grid देखें</a>
            `;

        }


        /* =========================
           FREE EBOOK CHALLENGE
        ========================= */

        if (
            q.includes("free ebook") ||
            q.includes("फ्री ebook") ||
            q.includes("फ्री ईबुक") ||
            q.includes("मुफ्त किताब") ||
            q.includes("challenge") ||
            q.includes("चैलेंज")
        ) {

            return `
                🎁 <strong>Free eBook Challenge</strong><br><br>
                आप Free eBook जीत सकते हैं! बस ये स्टेप्स पूरे करें:<br><br>
                🎬 3 Reels Instagram पर पोस्ट करें<br>
                📱 2 Stories लगाएँ और <strong>@saurabhnovelist</strong> को टैग करें<br>
                👀 कुल 2,000+ Views लाएँ<br><br>
                पूरी जानकारी और रेडीमेड Promotion Kit (Cover, Captions, Ideas) के लिए नीचे क्लिक करें:<br>
                👉 <a href="free-ebook.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">🎁 Free eBook Challenge Page खोलें</a>
            `;

        }


        /* =========================
           KAVITA / POEMS
        ========================= */

        if (
            q.includes("kavita") ||
            q.includes("कविता") ||
            q.includes("poem") ||
            q.includes("poetry") ||
            q.includes("झूठी देशभक्ति") ||
            q.includes("हार मत मानो")
        ) {

            return `
                🌸 <strong>मेरी कविताएँ (Poems)</strong><br><br>
                "बस इस बार हो जाएगा, हार मत मानो..." और "झूठी देशभक्ति" जैसी दिल को छू लेने वाली कविताएँ पढ़ें।<br><br>
                👉 <a href="kavita.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 कविताएँ पढ़ने के लिए यहाँ क्लिक करें</a>
            `;

        }


        /* =========================
           SHAYARI
        ========================= */

        if (
            q.includes("shayari") ||
            q.includes("शायरी") ||
            q.includes("अल्फ़ाज़")
        ) {

            return `
                ✍️ <strong>हिंदी शायरी & बुक्स</strong><br><br>
                दिल से निकले अनकहे एहसासों और खूबसूरत पलों की शायरियाँ पढ़ें:<br><br>
                👉 <a href="shayari.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">❤️ सभी शायरियाँ पढ़ें</a><br>
                👉 <a href="shayari-books.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 Shayari Book (अल्फ़ाज़ जो कह न सके)</a>
            `;

        }


        /* =========================
           KADVI SACHCHAI / MOTIVATIONAL
        ========================= */

        if (
            q.includes("कड़वी सच्चाई") ||
            q.includes("thought") ||
            q.includes("motivational") ||
            q.includes("सच्ची बातें") ||
            q.includes("प्रेरणा")
        ) {

            return `
                💭 <strong>कड़वी सच्चाई & Motivational बातें</strong><br><br>
                जिंदगी, प्रेम, संघर्ष और इंसानी व्यवहार पर सोच बदल देने वाले विचार पढ़ें।<br><br>
                👉 <a href="thoughts.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">💭 सभी Thoughts पढ़ने के लिए क्लिक करें</a>
            `;

        }


        /* =========================
           POSTS
        ========================= */

        if (
            q.includes("post") ||
            q.includes("पोस्ट") ||
            q.includes("तस्वीर") ||
            q.includes("photo")
        ) {

            return `
                🖼️ <strong>मेरी Posts (कविता, शायरी, विचार)</strong><br><br>
                तस्वीरों और डिज़ाइन्स में हमारी पोस्ट्स देखने के लिए नीचे क्लिक करें:<br><br>
                👉 <a href="posts.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">✍️ Posts Gallery खोलें</a>
            `;

        }


        /* =========================
           REVIEWS / RATING
        ========================= */

        if (
            q.includes("review") ||
            q.includes("रिव्यू") ||
            q.includes("rating") ||
            q.includes("रेटिंग")
        ) {

            return `
                ⭐ <strong>पाठकों की राय & Reviews</strong><br><br>
                आप हमारी रचनाओं पर अपनी राय दे सकते हैं या दूसरों के रिव्यू पढ़ सकते हैं:<br><br>
                👉 <a href="novel-review.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">⭐ Novel "एक अनजान मुलाकात" को Review दें</a><br>
                👉 <a href="shayari.html#reviews" style="color:#d4af37; font-weight:bold; text-decoration:underline;">💬 शायरी Reviews देखें</a>
            `;

        }


        /* =========================
           AUTHOR / ABOUT
        ========================= */

        if (
            q.includes("saurabh") ||
            q.includes("author") ||
            q.includes("लेखक") ||
            q.includes("सौरभ वर्मा") ||
            q.includes("about") ||
            q.includes("बारे में")
        ) {

            return `
                ✍️ <strong>Saurabh Verma (SaurabhNovelist)</strong><br><br>
                सौरभ वर्मा एक हिंदी लेखक व उपन्यासकार हैं। उनकी रचनाओं में प्रेम, रिश्ते, संघर्ष और इंसानी भावनाओं की वास्तविक झलक मिलती है। ❤️<br><br>
                👉 <a href="about.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">👤 लेखक के बारे में पूरा पढ़ें</a>
            `;

        }


        /* =========================
           CONTACT / SUPPORT
        ========================= */

        if (
            q.includes("contact") ||
            q.includes("संपर्क") ||
            q.includes("help") ||
            q.includes("मदद") ||
            q.includes("support") ||
            q.includes("phone") ||
            q.includes("नंबर") ||
            q.includes("whatsapp") ||
            q.includes("instagram") ||
            q.includes("email")
        ) {

            return `
                📞 <strong>Help & Contact Support</strong><br><br>
                आप लेखक Saurabh Verma से सीधे जुड़ सकते हैं:<br><br>
                📲 <strong>WhatsApp:</strong> <a href="https://wa.me/917268802785" target="_blank" style="color:#25d366; text-decoration:underline;">+91 7268802785</a><br>
                📷 <strong>Instagram:</strong> <a href="https://instagram.com/saurabhnovelist" target="_blank" style="color:#d4af37; text-decoration:underline;">@saurabhnovelist</a><br>
                ▶️ <strong>YouTube:</strong> <a href="https://youtube.com/@saurabhnovelist" target="_blank" style="color:#ff4444; text-decoration:underline;">SaurabhNovelist Channel</a><br>
                ✉️ <strong>Email:</strong> saurabhnovelist@gmail.com
            `;

        }


        /* =========================
           HELLO / GREETING
        ========================= */

        if (
            q === "hi" ||
            q === "hello" ||
            q === "hey" ||
            q.includes("नमस्ते") ||
            q.includes("हेलो")
        ) {

            return `
                नमस्ते! 👋🐶 मैं Saurabh AI हूँ।<br><br>
                आप मुझसे Novel, Free eBook, कविता, शायरी, या Payment के बारे में कुछ भी पूछ सकते हैं। बताइए मैं आपकी क्या मदद करूँ? ✨
            `;

        }


        /* =========================
           DEFAULT FALLBACK
        ========================= */

        return `
            🐶 मुझे इस सवाल की सटीक जानकारी नहीं मिली, लेकिन आप ये लिंक देख सकते हैं:<br><br>
            • <a href="novel.html" style="color:#d4af37; text-decoration:underline;">📖 Novel "एक अनजान मुलाकात"</a><br>
            • <a href="novel-reader.html" style="color:#d4af37; text-decoration:underline;">🛒 Buy ₹49 / Free Preview</a><br>
            • <a href="kavita.html" style="color:#d4af37; text-decoration:underline;">🌸 कविताएँ</a><br>
            • <a href="shayari.html" style="color:#d4af37; text-decoration:underline;">✍️ शायरी</a><br>
            • <a href="thoughts.html" style="color:#d4af37; text-decoration:underline;">💭 कड़वी सच्चाई</a><br>
            • <a href="free-ebook.html" style="color:#d4af37; text-decoration:underline;">🎁 Free eBook Challenge</a><br><br>
            या सीधे <a href="https://wa.me/917268802785" target="_blank" style="color:#25d366; text-decoration:underline;">WhatsApp</a> पर पूछें।
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
        thinking.innerHTML = `🐶 सोच रहा हूँ...`;
        messages.appendChild(thinking);

        messages.scrollTop = messages.scrollHeight;


        /* ANSWER */

        setTimeout(function () {
            thinking.innerHTML = getAnswer(question);
            messages.scrollTop = messages.scrollHeight;
        }, 400);

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
