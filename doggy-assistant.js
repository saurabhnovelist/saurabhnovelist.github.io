// ==========================================
// 🐶 SAURABHNOVELIST SMART DOGGY AI ASSISTANT (ALL LINKS RESTORED)
// ==========================================

(function () {

    let waitingForName = false;
    let userName = "";

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
                नमस्ते! 👋🐶<br><br>
                मैं <strong>SaurabhNovelist</strong> का AI साथी हूँ।<br><br>
                मुझे आपसे मिलकर बहुत खुशी हुई! बताइए मैं आपकी क्या मदद कर सकता हूँ? वैसे, <strong>क्या आप अपना नाम बता सकते हैं?</strong> 😊
            </div>

        </div>

        <div class="ai-suggestions">

            <button data-question="नमस्ते">
                👋 Hello
            </button>

            <button data-question="Novel कैसे खरीदें?">
                🛒 Buy Novel ₹49
            </button>

            <button data-question="शायरी संग्रह दिखाओ">
                ✍️ शायरी
            </button>

            <button data-question="कविता संग्रह दिखाओ">
                🌸 कविताएँ
            </button>

            <button data-question="कड़वी सच्चाई और विचार">
                💭 कड़वी सच्चाई
            </button>

            <button data-question="Saurabh Verma के बारे में बताइए">
                👤 About Author
            </button>

            <button data-question="Support और Helpline नंबर">
                📞 Help & Support
            </button>

        </div>

        <div class="ai-input-area">

            <input
                type="text"
                id="ai-input"
                placeholder="अपना सवाल या नाम लिखें..."
            >

            <button id="ai-send">
                ➤
            </button>

        </div>
    `;

    document.body.appendChild(chat);

    waitingForName = true;


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

    function getAnswer(rawInput) {

        const q = rawInput
            .toLowerCase()
            .replace(/[?!.।,]/g, "")
            .trim();

        /* =========================
           1. USER NAME HANDLING
        ========================= */

        if (waitingForName && !q.includes("buy") && !q.includes("novel") && !q.includes("kavita") && !q.includes("shayari") && !q.includes("help") && !q.includes("support")) {
            
            waitingForName = false;
            let extractedName = rawInput.trim();

            extractedName = extractedName.replace(/^(मेरा नाम|my name is|i am|iam|naam|naam hai|im)\s+/i, "");
            extractedName = extractedName.replace(/\s+(hai|hoon|hu)$/i, "");
            extractedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);

            userName = extractedName;

            return `
                अरे वाह! <strong>${userName}</strong>, आपका नाम बहुत ही अच्छा और प्यारा है! ❤️✨<br><br>
                बताइए <strong>${userName} जी</strong>, आज आप क्या पढ़ना या देखना चाहेंगे? सीधे लिंक पर क्लिक करके पढ़ें:<br><br>
                📖 <a href="novel.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">उपन्यास (एक अनजान मुलाकात)</a><br>
                ✍️ <a href="shayari.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">मेरी शायरियाँ संग्रह</a><br>
                🌸 <a href="kavita.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">दिल को छू लेने वाली कविताएँ</a><br>
                💭 <a href="thoughts.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">कड़वी सच्चाई & Motivational बातें</a><br>
                🎁 <a href="free-ebook.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">Free eBook Challenge</a><br>
                👤 <a href="about.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">लेखक सौरभ वर्मा के बारे में</a>
            `;
        }


        /* =========================
           2. GREETINGS (HI / HELLO)
        ========================= */

        if (
            q === "hi" ||
            q === "hello" ||
            q === "hey" ||
            q.includes("नमस्ते") ||
            q.includes("हेलो") ||
            q.includes("प्रणाम") ||
            q.includes("namaste")
        ) {

            waitingForName = true;

            if (userName) {
                return `
                    नमस्ते <strong>${userName} जी</strong>! 👋🐶<br><br>
                    आपसे दोबारा बात करके बहुत अच्छा लगा। आप नीचे दिए गए किसी भी लिंक पर जाकर पढ़ सकते हैं:<br><br>
                    • <a href="novel.html" style="color:#d4af37; text-decoration:underline;">📖 Novel "एक अनजान मुलाकात"</a><br>
                    • <a href="shayari.html" style="color:#d4af37; text-decoration:underline;">✍️ हिंदी शायरी</a><br>
                    • <a href="kavita.html" style="color:#d4af37; text-decoration:underline;">🌸 कविताएँ</a><br>
                    • <a href="thoughts.html" style="color:#d4af37; text-decoration:underline;">💭 कड़वी सच्चाई</a>
                `;
            }

            return `
                नमस्ते! 👋🐶<br><br>
                मुझे आपसे मिलकर बहुत खुशी हुई! SaurabhNovelist की साहित्यिक दुनिया में आपका स्वागत है।<br><br>
                बताइए मैं आपकी क्या मदद कर सकता हूँ? वैसे, <strong>क्या आप अपना प्यारा सा नाम बता सकते हैं?</strong> 😊
            `;
        }


        /* =========================
           3. SHAYARI (DIRECT LINKS)
        ========================= */

        if (q.includes("shayari") || q.includes("शायरी") || q.includes("अल्फ़ाज़")) {
            return `
                ✍️ <strong>हिंदी शायरी संग्रह</strong><br><br>
                दिल से निकले अनकहे एहसासों और खूबसूरत पलों की शायरियाँ यहाँ पढ़ें:<br><br>
                👉 <a href="shayari.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">❤️ सभी शायरियाँ पढ़ें →</a><br>
                👉 <a href="shayari-books.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📚 शायरी बुक (अल्फ़ाज़ जो कह न सके) →</a>
            `;
        }


        /* =========================
           4. KAVITA (DIRECT LINKS)
        ========================= */

        if (q.includes("kavita") || q.includes("कविता") || q.includes("poem") || q.includes("poetry")) {
            return `
                🌸 <strong>मेरी कविताएँ (Poems)</strong><br><br>
                "बस इस बार हो जाएगा, हार मत मानो..." और "झूठी देशभक्ति" जैसी दिल को छू लेने वाली रचनाएँ पढ़ें:<br><br>
                👉 <a href="kavita.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 कविता संग्रह खोलें →</a>
            `;
        }


        /* =========================
           5. THOUGHTS / KADVI SACHCHAI (DIRECT LINKS)
        ========================= */

        if (
            q.includes("कड़वी सच्चाई") ||
            q.includes("thought") ||
            q.includes("विचार") ||
            q.includes("सच्ची बातें") ||
            q.includes("motivational")
        ) {
            return `
                💭 <strong>कड़वी सच्चाई & Motivational बातें</strong><br><br>
                जिंदगी, प्रेम, मेहनत और इंसानी रिश्तों के यथार्थ पर सोच बदल देने वाले विचार पढ़ें:<br><br>
                👉 <a href="thoughts.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">💭 सभी Thoughts पढ़ने के लिए यहाँ क्लिक करें →</a>
            `;
        }


        /* =========================
           6. ABOUT AUTHOR (DIRECT LINK)
        ========================= */

        if (
            q.includes("author") ||
            q.includes("लेखक") ||
            q.includes("सौरभ वर्मा") ||
            q.includes("saurabh verma") ||
            q.includes("about") ||
            q.includes("writer") ||
            q.includes("लेखक कौन")
        ) {

            return `
                ✍️ <strong>लेखक परिचय: Saurabh Verma (सौरभ वर्मा)</strong><br><br>
                सौरभ वर्मा एक युवा भारतीय उपन्यासकार, लेखक और शायर हैं। उनकी कलम का मूल मंत्र है: <em>"Where Words Become Emotions"</em> (जहाँ शब्द भावनाएँ बन जाते हैं)।<br><br>
                🌟 <strong>उनकी लेखनी की खासियत:</strong><br>
                • वे इंसानी जज़्बात, प्रेम, खामोशी, संघर्ष और रिश्तों की कड़वी सच्चाई को बड़ी सादगी से पन्नों पर उतारते हैं।<br>
                • उनकी प्रमुख रचना <strong>'एक अनजान मुलाकात'</strong> पाठकों के दिलों में एक गहरा भावनात्मक अहसास छोड़ती है।<br><br>
                👉 <a href="about.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">👤 लेखक की पूरी बायोग्राफी और कहानी पढ़ें →</a>
            `;
        }


        /* =========================
           7. HELP & SUPPORT (DIRECT ACTION)
        ========================= */

        if (
            q.includes("contact") ||
            q.includes("संपर्क") ||
            q.includes("help") ||
            q.includes("मदद") ||
            q.includes("support") ||
            q.includes("phone") ||
            q.includes("number") ||
            q.includes("नंबर") ||
            q.includes("call") ||
            q.includes("whatsapp") ||
            q.includes("email")
        ) {

            return `
                📞 <strong>SaurabhNovelist Helpline & Direct Support</strong><br><br>
                हम अपने पाठकों की सहायता के लिए हमेशा तैयार हैं:<br><br>
                📲 <strong>WhatsApp Support:</strong><br>
                👉 <a href="https://wa.me/917268802785" target="_blank" style="color:#25d366; font-weight:bold; text-decoration:underline;">+91 7268802785 पर चैट करें</a><br><br>
                📞 <strong>कॉल सहायता:</strong><br>
                👉 <a href="tel:+917268802785" style="color:#d4af37; font-weight:bold; text-decoration:underline;">+91 7268802785 पर कॉल करें</a><br><br>
                ✉️ <strong>ईमेल:</strong><br>
                👉 <a href="mailto:saurabhnovelist@gmail.com" style="color:#ffcc00; text-decoration:underline;">saurabhnovelist@gmail.com</a><br><br>
                📷 <strong>Instagram:</strong><br>
                👉 <a href="https://instagram.com/saurabhnovelist" target="_blank" style="color:#e1306c; font-weight:bold; text-decoration:underline;">@saurabhnovelist</a>
            `;
        }


        /* =========================
           8. BUY NOVEL / QR CODE
        ========================= */

        if (
            q.includes("buy") ||
            q.includes("खरीद") ||
            q.includes("purchase") ||
            q.includes("order") ||
            q.includes("qr") ||
            q.includes("क्यूआर") ||
            q.includes("pay") ||
            q.includes("49") ||
            q.includes("₹49") ||
            q.includes("कीमत") ||
            q.includes("दाम")
        ) {

            return `
                🛒 <strong>Novel "एक अनजान मुलाकात" (Full Edition)</strong><br><br>
                💰 <strong>मूल्य:</strong> मात्र ₹49<br><br>
                📱 <strong>नीचे दिए गए QR कोड को Scan करके Pay करें:</strong><br><br>
                <div style="background:#fff; padding:10px; border-radius:10px; text-align:center; max-width:200px; margin:5px auto; border:2px solid #d4af37;">
                    <img src="images/qr.png" alt="Payment QR Code" style="width:100%; height:auto; border-radius:6px; display:block;">
                </div>
                <br>
                ✅ <strong>पेमेंट करने के बाद:</strong><br>
                स्क्रीनशॉट इस WhatsApp लिंक पर भेजें:<br>
                👉 <a href="https://wa.me/917268802785?text=Hello,%20maine%20novel%20ke%20liye%20payment%20kar%20diya%20hai.%20Ye%20raha%20screenshot." target="_blank" style="color:#25d366; font-weight:bold; text-decoration:underline;">📲 WhatsApp पर Screenshot भेजें (+91 7268802785)</a><br><br>
                🔗 या Reader पेज पर जाएँ:<br>
                👉 <a href="novel-reader.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 Novel Reader Page खोलें →</a>
            `;
        }


        /* =========================
           9. FREE PREVIEW / 20 PAGES
        ========================= */

        if (
            q.includes("sample") ||
            q.includes("preview") ||
            q.includes("20 page") ||
            q.includes("20 पेज") ||
            q.includes("फ्री पढ़")
        ) {

            return `
                📖 <strong>Free 20 Pages Preview:</strong><br><br>
                आप <strong>'एक अनजान मुलाकात'</strong> के शुरुआती 20 पेज बिल्कुल मुफ़्त में ऑनलाइन पढ़ सकते हैं:<br><br>
                👉 <a href="ek-anjan-mulakat-preview-20-pages.pdf" target="_blank" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📄 20 Pages PDF डाउनलोड करें →</a><br>
                👉 <a href="novel-reader.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 ऑनलाइन Reader खोलें →</a>
            `;
        }


        /* =========================
           10. DEFAULT FALLBACK
        ========================= */

        return `
            🐶 मुझे इस बारे में सटीक जानकारी नहीं मिली, लेकिन आप सीधे ये पेजेस देख सकते हैं:<br><br>
            • <a href="novel.html" style="color:#d4af37; text-decoration:underline;">📖 Novel "एक अनजान मुलाकात"</a><br>
            • <a href="shayari.html" style="color:#d4af37; text-decoration:underline;">✍️ शायरी संग्रह</a><br>
            • <a href="kavita.html" style="color:#d4af37; text-decoration:underline;">🌸 कविताएँ</a><br>
            • <a href="thoughts.html" style="color:#d4af37; text-decoration:underline;">💭 कड़वी सच्चाई</a><br>
            • <a href="about.html" style="color:#d4af37; text-decoration:underline;">👤 लेखक के बारे में</a><br><br>
            या सीधे <a href="https://wa.me/917268802785" target="_blank" style="color:#25d366; font-weight:bold; text-decoration:underline;">WhatsApp पर संपर्क करें</a>।
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
