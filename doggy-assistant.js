// ==========================================
// 🐶 SAURABHNOVELIST SMART DOGGY AI ASSISTANT
// Full 100 Q&A Knowledge Base + Religious Greetings + Direct Links
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
                नमस्ते! 🙏🐶<br><br>
                मैं <strong>SaurabhNovelist</strong> का AI साथी हूँ।<br><br>
                मुझे आपसे मिलकर बहुत खुशी हुई! बताइए मैं आपकी क्या मदद कर सकता हूँ? वैसे, <strong>क्या आप अपना प्यारा सा नाम बता सकते हैं?</strong> 😊
            </div>

        </div>

        <div class="ai-suggestions">

            <button data-question="राधे राधे">
                🌸 राधे राधे
            </button>

            <button data-question="Novel कैसे खरीदें?">
                🛒 Buy ₹49 (QR)
            </button>

            <button data-question="एक अनजान मुलाकात की कहानी क्या है?">
                📖 Novel Story
            </button>

            <button data-question="शायरी और कविताएँ कहाँ पढ़ें?">
                ✍️ शायरी & कविता
            </button>

            <button data-question="Free eBook कैसे मिलेगी?">
                🎁 Free eBook
            </button>

            <button data-question="Saurabh Verma कौन हैं?">
                👤 About Author
            </button>

            <button data-question="हेल्पलाइन और सपोर्ट नंबर">
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
       SMART KNOWLEDGE & ANSWER ENGINE
    ========================= */

    function getAnswer(rawInput) {

        const q = rawInput
            .toLowerCase()
            .replace(/[?!.।,]/g, "")
            .trim();


        /* =========================
           1. USER NAME CAPTURE
        ========================= */

        if (waitingForName && 
            !q.includes("buy") && !q.includes("novel") && !q.includes("kavita") && 
            !q.includes("shayari") && !q.includes("help") && !q.includes("support") &&
            !q.includes("radhe") && !q.includes("ram") && !q.includes("mahadev") &&
            !q.includes("krishna") && !q.includes("jai")) {
            
            waitingForName = false;
            let extractedName = rawInput.trim();

            extractedName = extractedName.replace(/^(मेरा नाम|my name is|i am|iam|naam|naam hai|im)\s+/i, "");
            extractedName = extractedName.replace(/\s+(hai|hoon|hu)$/i, "");
            extractedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);

            userName = extractedName;

            return `
                अरे वाह! <strong>${userName}</strong>, आपका नाम बहुत ही अच्छा और प्यारा है! ❤️✨<br><br>
                बताइए <strong>${userName} जी</strong>, आज आप SaurabhNovelist पर क्या पढ़ना या जानना चाहेंगे? आप सीधे नीचे दिए गए लिंक्स पर क्लिक कर सकते हैं:<br><br>
                📖 <a href="novel.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">उपन्यास (एक अनजान मुलाकात)</a><br>
                ✍️ <a href="shayari.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">मेरी शायरियाँ संग्रह</a><br>
                🌸 <a href="kavita.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">दिल को छू लेने वाली कविताएँ</a><br>
                💭 <a href="thoughts.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">कड़वी सच्चाई & Motivational बातें</a><br>
                🎁 <a href="free-ebook.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">Free eBook Challenge</a><br>
                👤 <a href="about.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">लेखक सौरभ वर्मा के बारे में</a>
            `;
        }


        /* =========================
           2. RELIGIOUS GREETINGS
        ========================= */

        if (q.includes("radhe") || q.includes("राधे")) {
            return `
                🌸 <strong>राधे राधे!</strong> 🙏❤️<br><br>
                श्री राधा रानी की कृपा आप पर सदैव बनी रहे। मुझे आपसे जुड़कर बहुत खुशी हुई! बताइए <strong>${userName ? userName + " जी" : "मित्र"}</strong>, मैं आपकी क्या सेवा या मदद कर सकता हूँ? ✨
            `;
        }

        if (q.includes("ram ram") || q.includes("राम राम") || q.includes("jai shree ram") || q.includes("जय श्री राम")) {
            return `
                🙏 <strong>राम राम जी! जय श्री राम!</strong> 🏹🚩<br><br>
                प्रभु श्री राम का आशीर्वाद आप पर हमेशा बना रहे। आपका दिन मंगलमय हो! बताइए मैं आपकी किस प्रकार मदद कर सकता हूँ? 🐶✨
            `;
        }

        if (q.includes("mahadev") || q.includes("महादेव") || q.includes("har har") || q.includes("हर हर") || q.includes("bholenath") || q.includes("भोलेनाथ") || q.includes("shiv") || q.includes("शिव")) {
            return `
                🔱 <strong>हर हर महादेव! जय शिव शंभू!</strong> 🕉️<br><br>
                बाबा विश्वनाथ और देवाधिदेव महादेव की कृपा आप पर हमेशा बनी रहे। बताइए <strong>${userName ? userName + " जी" : "दोस्त"}</strong>, आज साहित्य की इस दुनिया में आपकी क्या मदद करूँ? 🙏✨
            `;
        }

        if (q.includes("jai shree krishna") || q.includes("जय श्री कृष्णा") || q.includes("krishna") || q.includes("कृष्णा")) {
            return `
                🦚 <strong>जय श्री कृष्णा!</strong> 🙏❤️<br><br>
                माखनचोर, मुरलीधर का स्नेह आप पर हमेशा बना रहे। बताइए आज मैं आपकी क्या सहायता कर सकता हूँ? 🐶✨
            `;
        }


        /* =========================
           3. STANDARD GREETINGS
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
                    आपसे दोबारा बात करके बहुत अच्छा लगा। बताइए आज आपकी क्या मदद करूँ? आप सीधे नीचे दिए गए सेक्शन देख सकते हैं:<br><br>
                    • <a href="novel.html" style="color:#d4af37; text-decoration:underline;">📖 Novel "एक अनजान मुलाकात"</a><br>
                    • <a href="shayari.html" style="color:#d4af37; text-decoration:underline;">✍️ हिंदी शायरी</a><br>
                    • <a href="kavita.html" style="color:#d4af37; text-decoration:underline;">🌸 कविताएँ</a><br>
                    • <a href="thoughts.html" style="color:#d4af37; text-decoration:underline;">💭 कड़वी सच्चाई</a>
                `;
            }

            return `
                नमस्ते! 👋🐶<br><br>
                मुझे आपसे मिलकर बहुत खुशी हुई! बताइए मैं आपकी क्या मदद कर सकता हूँ? वैसे, <strong>क्या आप अपना प्यारा सा नाम बता सकते हैं?</strong> 😊
            `;
        }


        /* =========================
           4. BUY NOVEL / QR PAYMENT (₹49)
        ========================= */

        if (
            q.includes("buy") ||
            q.includes("खरीद") ||
            q.includes("purchase") ||
            q.includes("order") ||
            q.includes("qr") ||
            q.includes("क्यूआर") ||
            q.includes("pay") ||
            q.includes("पेमेंट") ||
            q.includes("49") ||
            q.includes("₹49") ||
            q.includes("दाम")
        ) {

            return `
                🛒 <strong>Novel "एक अनजान मुलाकात" खरीदें (Full Access)</strong><br><br>
                💰 <strong>मूल्य:</strong> मात्र ₹49<br><br>
                📱 <strong>नीचे दिए गए QR कोड को किसी भी UPI App (GPay/PhonePe/Paytm) से Scan करके भुगतान करें:</strong><br><br>
                <div style="background:#fff; padding:10px; border-radius:10px; text-align:center; max-width:200px; margin:5px auto; border:2px solid #d4af37;">
                    <img src="images/qr.png" alt="Payment QR Code" style="width:100%; height:auto; border-radius:6px; display:block;">
                </div>
                <br>
                ✅ <strong>भुगतान के बाद क्या करें?</strong><br>
                1. अपने पेमेंट का Screenshot लें।<br>
                2. इस WhatsApp लिंक पर तुरंत भेजें:<br>
                👉 <a href="https://wa.me/917268802785?text=Hello,%20maine%20novel%20ke%20liye%20payment%20kar%20diya%20hai.%20Ye%20raha%20screenshot." target="_blank" style="color:#25d366; font-weight:bold; text-decoration:underline;">📲 WhatsApp पर Screenshot भेजें (+91 7268802785)</a><br><br>
                🔗 आप Reader पेज पर जाकर भी पूरा विवरण देख सकते हैं:<br>
                👉 <a href="novel-reader.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 Novel Reader Page खोलें →</a>
            `;
        }


        /* =========================
           5. ABOUT NOVEL (PLOT, SHIVAM, KAVITA, AIRPORT)
        ========================= */

        if (
            q.includes("कहानी") ||
            q.includes("plot") ||
            q.includes("shivam") ||
            q.includes("shivam aur kavita") ||
            q.includes("शिवम") ||
            q.includes("कविता कौन") ||
            q.includes("airport") ||
            q.includes("एयरपोर्ट") ||
            q.includes("वाराणसी") ||
            q.includes("चाय") ||
            q.includes("note") ||
            q.includes("नोट") ||
            q.includes("बारिश") ||
            q.includes("hyderabad") ||
            q.includes("bombay") ||
            q.includes("शादी") ||
            q.includes("photo") ||
            q.includes("अनजान मुलाकात क्या है") ||
            q.includes("novel का नाम") ||
            q.includes("किस बारे में")
        ) {

            return `
                📖 <strong>उपन्यास: एक अनजान मुलाकात (Overview)</strong><br><br>
                • <strong>मुख्य पात्र:</strong> शिवम और कविता।<br>
                • <strong>शुरुआत:</strong> कहानी की शुरुआत वाराणसी एयरपोर्ट पर होती है, जहाँ बारिश और खराब मौसम के कारण फ्लाइट में देरी होती है।<br>
                • <strong>चाय और बातचीत:</strong> एयरपोर्ट कैंटीन में एक कप चाय के साथ शुरू हुई बातचीत दोनों के बीच एक गहरा भावनात्मक रिश्ता बना देती है।<br>
                • <strong>नोट का रहस्य:</strong> कविता द्वारा दिया गया एक छोटा-सा नोट शिवम तक समय पर नहीं पहुँच पाता।<br>
                • <strong>मोड़:</strong> शिवम को हैदराबाद और कविता को बॉम्बे जाना होता है। बाद में पारिवारिक विवाह चर्चाओं के बीच जब शिवम प्रस्तावित रिश्तों में कविता की तस्वीर देखता है, तो उसकी जिंदगी में अतीत का वह सवाल फिर जाग उठता है कि क्या कविता उसे पहचान पाएगी?<br><br>
                👉 <a href="novel.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 Novel का मुख्य पेज देखें →</a><br>
                👉 <a href="novel-reader.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📄 20 Pages Free Preview पढ़ें →</a>
            `;
        }


        /* =========================
           6. FREE PREVIEW / SAMPLE
        ========================= */

        if (
            q.includes("sample") ||
            q.includes("preview") ||
            q.includes("20 page") ||
            q.includes("20 पेज") ||
            q.includes("फ्री पढ़") ||
            q.includes("पहले पढ़")
        ) {

            return `
                📖 <strong>Free 20 Pages Preview:</strong><br><br>
                आप <strong>'एक अनजान मुलाकात'</strong> के शुरुआती 20 पेज बिल्कुल मुफ़्त में ऑनलाइन पढ़ सकते हैं:<br><br>
                👉 <a href="ek-anjan-mulakat-preview-20-pages.pdf" target="_blank" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📄 20 Pages PDF डाउनलोड करें →</a><br>
                👉 <a href="novel-reader.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 ऑनलाइन Reader खोलें →</a>
            `;
        }


        /* =========================
           7. FREE EBOOK CHALLENGE
        ========================= */

        if (
            q.includes("free ebook") ||
            q.includes("फ्री ebook") ||
            q.includes("मुफ्त किताब") ||
            q.includes("challenge") ||
            q.includes("चैलेंज") ||
            q.includes("reels") ||
            q.includes("stories") ||
            q.includes("views")
        ) {

            return `
                🎁 <strong>Free eBook Challenge नियम:</strong><br><br>
                1. 🎬 <strong>3 अलग Reels</strong> अपने Instagram पर पोस्ट करें।<br>
                2. 📱 <strong>2 Stories</strong> लगाएँ और <strong>@saurabhnovelist</strong> को टैग करें।<br>
                3. 👀 Reels पर कुल <strong>2,000+ Genuine Views</strong> पूरे करें।<br>
                4. 📸 Screenshots/Proof भेजकर वेरिफिकेशन करवाएँ और Free eBook प्राप्त करें।<br><br>
                👉 <a href="free-ebook.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">🎁 Promotion Kit और Challenge Page खोलें →</a>
            `;
        }


        /* =========================
           8. SHAYARI & SHAYARI BOOKS
        ========================= */

        if (
            q.includes("shayari") ||
            q.includes("शायरी") ||
            q.includes("अल्फ़ाज़") ||
            q.includes("alfaz") ||
            q.includes("shayari book")
        ) {

            return `
                ✍️ <strong>हिंदी शायरी & बुक्स</strong><br><br>
                • <strong>शायरी संग्रह:</strong> प्रेम, दर्द, खामोशी, रिश्ते और जिंदगी के अनकहे एहसासों से सजी पंक्तियाँ।<br>
                • <strong>पहली शायरी बुक:</strong> <em>'अल्फ़ाज़ जो कह न सके'</em> (लेखक: Saurabh Verma)<br><br>
                👉 <a href="shayari.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">❤️ सभी शायरियाँ यहाँ पढ़ें →</a><br>
                👉 <a href="shayari-books.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📚 Shayari Books Section देखें →</a>
            `;
        }


        /* =========================
           9. KAVITA (POEMS)
        ========================= */

        if (
            q.includes("kavita") ||
            q.includes("कविता") ||
            q.includes("poem") ||
            q.includes("poetry") ||
            q.includes("हार मत मानो") ||
            q.includes("झूठी देशभक्ति")
        ) {

            return `
                🌸 <strong>मेरी कविताएँ (Poems)</strong><br><br>
                सौरभ वर्मा की कलम से निकली प्रेरणादायी एवं दिल को छू लेने वाली रचनाएँ जैसे:<br>
                • <em>"बस इस बार हो जाएगा, हार मत मानो..."</em><br>
                • <em>"झूठी देशभक्ति"</em><br>
                • <em>"बेहतर क्या है"</em><br><br>
                👉 <a href="kavita.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 पूरा कविता संग्रह पढ़ें →</a>
            `;
        }


        /* =========================
           10. THOUGHTS / KADVI SACHCHAI
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
                इंसानी फितरत, मतलबी दुनिया, सच्चा प्रेम और जिंदगी के कड़वे अनुभवों पर सोच बदल देने वाले कोट्स और बातें।<br><br>
                👉 <a href="thoughts.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">💭 सभी 12+ Thoughts पढ़ने के लिए क्लिक करें →</a>
            `;
        }


        /* =========================
           11. ABOUT AUTHOR (SAURABH VERMA)
        ========================= */

        if (
            q.includes("author") ||
            q.includes("लेखक") ||
            q.includes("सौरभ वर्मा") ||
            q.includes("saurabh verma") ||
            q.includes("about") ||
            q.includes("writer") ||
            q.includes("उद्देश्य") ||
            q.includes("पहचान") ||
            q.includes("भाषा")
        ) {

            return `
                ✍️ <strong>लेखक परिचय: Saurabh Verma (सौरभ वर्मा)</strong><br><br>
                • <strong>पहचान:</strong> युवा हिंदी उपन्यासकार, लेखक और शायर।<br>
                • <strong>मंच (Platform):</strong> SaurabhNovelist (<em>Where Words Become Emotions</em>)<br>
                • <strong>उद्देश्य:</strong> शब्दों और भावनाओं के माध्यम से पाठकों को 'दिल से दिल तक' जोड़ना।<br>
                • <strong>भाषा:</strong> मुख्य रूप से सरल और मर्मस्पर्शी हिंदी।<br>
                • <strong>प्रमुख कृतियाँ:</strong> उपन्यास 'एक अनजान मुलाकात' और शायरी संग्रह 'अल्फ़ाज़ जो कह न सके'।<br><br>
                👉 <a href="about.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">👤 लेखक के बारे में विस्तार से पढ़ें →</a>
            `;
        }


        /* =========================
           12. HELP & SUPPORT / HELPLINE
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
            q.includes("email") ||
            q.includes("instagram") ||
            q.includes("youtube") ||
            q.includes("follow")
        ) {

            return `
                📞 <strong>SaurabhNovelist Helpline & Direct Support</strong><br><br>
                पाठक किसी भी जानकारी या सहायता के लिए सीधे संपर्क कर सकते हैं:<br><br>
                📲 <strong>WhatsApp:</strong> <a href="https://wa.me/917268802785" target="_blank" style="color:#25d366; font-weight:bold; text-decoration:underline;">+91 7268802785</a><br>
                📞 <strong>Call Helpline:</strong> <a href="tel:+917268802785" style="color:#d4af37; font-weight:bold; text-decoration:underline;">+91 7268802785</a><br>
                📷 <strong>Instagram:</strong> <a href="https://instagram.com/saurabhnovelist" target="_blank" style="color:#e1306c; font-weight:bold; text-decoration:underline;">@saurabhnovelist</a><br>
                ▶️ <strong>YouTube:</strong> <a href="https://youtube.com/@saurabhnovelist" target="_blank" style="color:#ff4444; font-weight:bold; text-decoration:underline;">SaurabhNovelist YouTube</a><br>
                ✉️ <strong>Email:</strong> <a href="mailto:saurabhnovelist@gmail.com" style="color:#ffcc00; text-decoration:underline;">saurabhnovelist@gmail.com</a>
            `;
        }


        /* =========================
           13. WEBSITE & DOGGY INFO
        ========================= */

        if (
            q.includes("doggy") ||
            q.includes("assistant") ||
            q.includes("आप कौन हो") ||
            q.includes("तुम कौन हो") ||
            q.includes("website") ||
            q.includes("theme") ||
            q.includes("mobile") ||
            q.includes("saurabhnovelist क्या है")
        ) {

            return `
                🌐 <strong>SaurabhNovelist & Doggy AI Assistant</strong><br><br>
                • <strong>वेबसाइट:</strong> saurabhnovelist.github.io (Dark/Black & Gold साहित्यिक थीम पर आधारित, पूर्णतः मोबाइल फ्रेंडली)।<br>
                • <strong>डॉग असिस्टेंट:</strong> मैं वेबसाइट, उपन्यास, शायरी, कविता, फ्री ई-बुक और लेखक से जुड़े सभी सवालों के जवाब देने के लिए यहाँ मौजूद हूँ। 🐶✨
            `;
        }


        /* =========================
           14. DEFAULT FALLBACK
        ========================= */

        return `
            🐶 मुझे इस सवाल का सटीक उत्तर अभी नहीं मिला, लेकिन आप इन प्रमुख लिंक्स पर जा सकते हैं:<br><br>
            • <a href="novel.html" style="color:#d4af37; text-decoration:underline;">📖 Novel "एक अनजान मुलाकात"</a><br>
            • <a href="novel-reader.html" style="color:#d4af37; text-decoration:underline;">🛒 Buy ₹49 / 20 Pages Free</a><br>
            • <a href="shayari.html" style="color:#d4af37; text-decoration:underline;">✍️ शायरी संग्रह</a><br>
            • <a href="kavita.html" style="color:#d4af37; text-decoration:underline;">🌸 कविताएँ</a><br>
            • <a href="thoughts.html" style="color:#d4af37; text-decoration:underline;">💭 कड़वी सच्चाई</a><br>
            • <a href="about.html" style="color:#d4af37; text-decoration:underline;">👤 लेखक परिचय</a><br><br>
            या सीधे <a href="https://wa.me/917268802785" target="_blank" style="color:#25d366; font-weight:bold; text-decoration:underline;">WhatsApp पर पूछें</a>।
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
