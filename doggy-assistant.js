// ==========================================
// 🐶 SAURABHNOVELIST SMART DOGGY AI ASSISTANT
// Complete 100 Q&A Knowledge Base Engine
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
                Main <strong>SaurabhNovelist</strong> ka smart AI assistant hoon.<br><br>
                Mujhe aapse milkar bahut khushi hui! Bataiye main aapki kya madad kar sakta hoon? Waise, <strong>kya aap apna pyara sa naam bata sakte hain?</strong> 😊
            </div>

        </div>

        <div class="ai-suggestions">

            <button data-question="राधे राधे">
                🌸 राधे राधे
            </button>

            <button data-question="Novel कैसे खरीदें?">
                🛒 Buy ₹49 (QR)
            </button>

            <button data-question="एक अनजान मुलाकात किस बारे में है?">
                📖 Novel Story
            </button>

            <button data-question="Saurabh Verma कौन हैं?">
                ✍️ Author Info
            </button>

            <button data-question="Free eBook कैसे मिलेगी?">
                🎁 Free eBook
            </button>

            <button data-question="शायरी और कविता कहाँ पढ़ें?">
                📝 शायरी & कविता
            </button>

            <button data-question="Help और Support नंबर">
                📞 Help & Support
            </button>

        </div>

        <div class="ai-input-area">

            <input
                type="text"
                id="ai-input"
                placeholder="Apna sawal ya naam likhein..."
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
       100 QUESTIONS KNOWLEDGE BASE
    ========================= */

    const qaDatabase = [
        // 1-20: Author & Platform
        { keys: ["saurabh verma kaun", "saurabh kaun", "lekhak kaun", "author kaun"], ans: "Saurabh Verma hindi lekhan se jude lekhak hain aur <strong>SaurabhNovelist</strong> unka literary platform hai. <br><br>👉 <a href='about.html' style='color:#d4af37; text-decoration:underline;'>About Author Padhein →</a>" },
        { keys: ["saurabhnovelist kya hai", "platform kya hai"], ans: "SaurabhNovelist ek hindi literary website/platform hai jahan Novel, Shayari, Kavita aur bhavnatmak lekhan uplabdh hai." },
        { keys: ["website ke lekhak", "site ka author"], ans: "SaurabhNovelist ke lekhak ke roop mein Saurabh Verma ka naam darj hai." },
        { keys: ["saurabh verma kya likhte", "author kya likhta"], ans: "Ve hindi Novel, Shayari, Kavita aur bhavnatmak (emotional) kahaniyan likhte hain." },
        { keys: ["saurabhnovelist ka uddeshya", "website ka maksad", "aim kya hai"], ans: "Shabdon aur bhavnaon ko kahaniyon, shayariyon aur kavitaon ke madhyam se pathakon ke dil tak pahunchana hi iska mukhya uddeshya hai." },
        { keys: ["pehli novel", "first novel", "first book"], ans: "Saurabh Verma ji ki pehli novel <strong>'एक अनजान मुलाकात'</strong> hai. <br><br>👉 <a href='novel.html' style='color:#d4af37; text-decoration:underline;'>Novel Page Dekhein →</a>" },
        { keys: ["kya padh sakte", "content kya hai", "kya milta hai"], ans: "Aap yahan Novels, Shayari, Kavita, aur dil ko chhoo lene wale vichar padh sakte hain." },
        { keys: ["kis bhasha", "language kya hai"], ans: "Saurabh Verma ji ka sara lekhan mukhya roop se <strong>Hindi</strong> bhasha mein hai." },
        { keys: ["instagram kya", "insta id", "insta handle"], ans: "Official Instagram handle <strong>@saurabhnovelist</strong> hai. <br><br>👉 <a href='https://instagram.com/saurabhnovelist' target='_blank' style='color:#e1306c; text-decoration:underline;'>Instagram Profile Kholein →</a>" },
        { keys: ["youtube hai", "youtube channel"], ans: "Haan, SaurabhNovelist naam se YouTube channel uplabdh hai. <br><br>👉 <a href='https://youtube.com/@saurabhnovelist' target='_blank' style='color:#ff4444; text-decoration:underline;'>YouTube Channel Dekhein →</a>" },
        { keys: ["author ka naam", "lekhak ka pura naam"], ans: "Author ka naam <strong>Saurabh Verma</strong> hai." },
        { keys: ["kis tarah ka platform", "platform type"], ans: "Yeh hindi sahitya, novel aur creative writing par kendrit platform hai." },
        { keys: ["kis tarah ki stories", "story type"], ans: "Yahan dil ko chhoone wali, bhavnatmak aur relatable kahaniyan milti hain." },
        { keys: ["author se kaise jude", "connect kaise kare"], ans: "Aap Instagram (@saurabhnovelist), WhatsApp (+91 7268802785) ya website ke Contact section se jud sakte hain." },
        { keys: ["kiske liye hai", "audience kaun"], ans: "Yeh platform un sabhi pathakon ke liye hai jo Hindi Novel, Shayari aur Kavita pasand karte hain." },
        { keys: ["hindi content milta", "hindi me hai"], ans: "Haan, website ka mukhya content poori tarah Hindi bhasha mein hai." },
        { keys: ["author ki pehchan", "brand kya hai"], ans: "Saurabh Verma — SaurabhNovelist ('Where Words Become Emotions')." },
        { keys: ["new posts aate", "update hota hai"], ans: "Haan, website par naye lekh, shayariyan aur posts niyamit roop se update kiye jaate hain." },
        { keys: ["charchit novel", "famous novel", "popular book"], ans: "Website par <strong>'एक अनजान मुलाकात'</strong> sabse pramukh aur charchit novel hai." },
        { keys: ["follow kahan kare"], ans: "Aap Instagram par <strong>@saurabhnovelist</strong> ko follow kar sakte hain." },

        // 21-50: Ek Anjan Mulakat Details
        { keys: ["ek anjan mulakat kya hai", "novel kya hai"], ans: "Yeh Saurabh Verma dwara likha gaya ek bhavnatmak Hindi novel hai. <br><br>👉 <a href='novel.html' style='color:#d4af37; text-decoration:underline;'>Novel Page Par Jayein →</a>" },
        { keys: ["novel kisne likhi", "writer kaun novel"], ans: "Yeh novel Saurabh Verma dwara likhi gayi hai." },
        { keys: ["kahani kahan se shuru", "story start"], ans: "Kahani ki shuruaat <strong>Varanasi Airport</strong> par kharab mausam aur barish ke dauran hoti hai." },
        { keys: ["mukhya patra", "main characters", "hero heroine"], ans: "Kahani ke mukhya patra <strong>Shivam</strong> aur <strong>Kavita</strong> hain." },
        { keys: ["shivam aur kavita kahan mile", "first meeting"], ans: "Dono pehli baar Varanasi Airport par ek anjan mulakat ke roop mein milte hain." },
        { keys: ["mausam kaisa tha", "weather"], ans: "Barish aur kharab mausam ki wajah se flight delay hoti hai, jisse unki mulakat hoti hai." },
        { keys: ["shivam aur kavita ke beech kya hua"], ans: "Dono ke beech choti si mulakat aur baat-cheet hoti hai, jisse ek anokha bhavnatmak connection banta hai." },
        { keys: ["pehle se jante the", "kya pehchan thi"], ans: "Nahi, unki mulakat bilkul anjan thi, ve ek doosre ko pehle se nahi jante the." },
        { keys: ["chai ka mahatva", "tea canteen"], ans: "Airport canteen mein ek cup chai par baatcheet ke dauran dono ke beech bhavnao ka silsila shuru hota hai." },
        { keys: ["kavita ne shivam ko kya diya", "note diya"], ans: "Kavita ne alvida kehne se pehle ek chota sa note diya tha." },
        { keys: ["kya note pahuncha", "note mila"], ans: "Nahi, kismat ke fer se vah note Shivam tak us waqt nahi pahunch pata." },
        { keys: ["mukhya bhav kya hai", "theme kya hai"], ans: "Anjani mulakat, kismat ke sanyog, rishte aur bhavnao ka safar iska mukhya bhav hai." },
        { keys: ["kya sirf romance hai", "family angle"], ans: "Nahi, isme romance ke saath-saath parivaar, jimmedariyan aur paristhitiyon ka bhi mahatva hai." },
        { keys: ["yaad kyon rehti hai", "shivam kyon yaad"], ans: "Airport ki vah choti si mulakat aur Kavita ki saadgi Shivam ke dil mein ghar kar jaati hai." },
        { keys: ["kya kavita yaad rakhti"], ans: "Haan, kahani ke agle hisse mein Kavita ke dil mein bhi us mulakat ki yaadein taaza rehti hain." },
        { keys: ["parivaar ki bhumika", "family pressure"], ans: "Haan, kahani mein dono ke parivaar aur shaadi ke faisle mahatvapoorna mod laate hain." },
        { keys: ["kavita ki shaadi"], ans: "Haan, parivaar dwara Kavita ke vivah ki baat aage badhayi jaati hai." },
        { keys: ["kya fir milte hain", "second meeting"], ans: "Kismat unki zindagi ko aage chalkar dobara aamne-saamne khada kar deti hai." },
        { keys: ["kya dusri mulakat sanyog hai"], ans: "Kahani ka yeh sabse bada sawal hai ki kya yeh sanyog hai ya kismat ka faisla." },
        { keys: ["kavita shivam ko pehchanti", "pehchan payegi"], ans: "Yeh kahani ka sabse rochak aur bhavuk mod hai jise janne ke liye aapko poora novel padhna hoga!" },
        { keys: ["barish kyon mahatvapoorna"], ans: "Barish hi vah vajah thi jisne flight roki aur do anjan dilon ko milne ka mauka diya." },
        { keys: ["airport kyon mahatva"], ans: "Varanasi Airport vah jagah hai jahan se is poori dastan ki shuruaat hoti hai." },
        { keys: ["hyderabad", "flight kahan"], ans: "Haan, Shivam ki flight Hyderabad jane wali thi." },
        { keys: ["bombay", "mumbai"], ans: "Haan, Kavita ke Bombay (Mumbai) jane ka ullekh kahani mein aata hai." },
        { keys: ["kavita ki photo", "tasveer dekhta"], ans: "Haan, aage chalkar rishte ke prastav mein Shivam, Kavita ki photo dekhkar chauk jata hai." },
        { keys: ["shivam ko kya mehsoos"], ans: "Use lagta hai ki kya yeh wahi ladki hai jisse vah airport par mila tha." },
        { keys: ["central idea", "novel sikh"], ans: "Kabhi-kabhi anjane mein hui choti si mulakat poori zindagi badal sakti hai." },
        { keys: ["novel kyon padhein", "why read"], ans: "Emotional stories, unexpected twists aur sache rishton ko mehsoos karne ke liye yeh novel zaroor padhein." },

        // 51-65: Shayari & Kavita
        { keys: ["website par shayari hai", "shayari milti hai"], ans: "Haan, SaurabhNovelist par vishesh Shayari section uplabdh hai. <br><br>👉 <a href='shayari.html' style='color:#d4af37; text-decoration:underline;'>Shayari Section Kholein →</a>" },
        { keys: ["shayari kahan padhein"], ans: "Website ke <strong>Shayari</strong> menu mein jaakar aap poora sangrah padh sakte hain." },
        { keys: ["emotional shayari hai"], ans: "Haan, yahan prem, dard, khamoshi aur rishton par aadharit emotional shayariyan hain." },
        { keys: ["shayari kiski hai", "shayari author"], ans: "Yeh sabhi shayariyan lekhak Saurabh Verma ji dwara likhi gayi hain." },
        { keys: ["shayari share kar sakte"], ans: "Haan, aap author credit (@saurabhnovelist) ke saath bejhijhak share kar sakte hain." },
        { keys: ["shayari books bhi hain", "shayari book"], ans: "Haan, website par Shayari Books section maujood hai. <br><br>👉 <a href='shayari-books.html' style='color:#d4af37; text-decoration:underline;'>Shayari Books Dekhein →</a>" },
        { keys: ["pehli shayari book", "shayari book ka naam", "alfaz jo kah na sake"], ans: "Pehli shayari book ka naam <strong>'अल्फ़ाज़ जो कह न सके'</strong> hai." },
        { keys: ["kavita kahan milegi", "kavita kahan padhein"], ans: "Website ke <strong>Kavita</strong> section mein. <br><br>👉 <a href='kavita.html' style='color:#d4af37; text-decoration:underline;'>Kavita Sangrah Kholein →</a>" },
        { keys: ["motivational kavita", "prernadayak kavita"], ans: "Haan, 'बस इस बार हो जाएगा, हार मत मानो' jaise motivational kavitaen uplabdh hain." },
        { keys: ["kavita aur shayari alag hain"], ans: "Haan, dono ke liye website par alag-alag dedicated pages banaye gaye hain." },

        // 66-85: Website Features
        { keys: ["website ka naam", "site name"], ans: "Website ka naam <strong>SaurabhNovelist</strong> hai." },
        { keys: ["website kahan hai", "site url", "link kya hai"], ans: "Official URL: <strong>saurabhnovelist.github.io</strong>" },
        { keys: ["kaun kaun se sections", "sections kya hain"], ans: "Novels, Shayari, Kavita, Reviews, Thoughts (कड़वी सच्चाई), Posts aur Free eBook." },
        { keys: ["author ke bare me kahan padhein"], ans: "Aap website ke <strong>About</strong> section mein padh sakte hain. <br><br>👉 <a href='about.html' style='color:#d4af37; text-decoration:underline;'>About Page Par Jayein →</a>" },
        { keys: ["contact kaise kare", "help kaise milegi"], ans: "WhatsApp (+91 7268802785) ya Instagram (@saurabhnovelist) ke madhyam se." },
        { keys: ["mobile par chalti hai", "responsive hai"], ans: "Haan, website ko mobile readers ke anukool banaya gaya hai." },
        { keys: ["website theme", "design kaisa"], ans: "Royal Dark Black aur Golden literary aesthetic style mein design kiya gaya hai." },
        { keys: ["reviews hain kya", "pathak ki raye"], ans: "Haan, pathak har novel aur kavita par apna review aur rating de sakte hain." },
        { keys: ["free content hai", "free reading"], ans: "Haan! 20-pages free preview aur Free eBook challenge bilkul muft hain." },
        { keys: ["thoughts kya hai", "kadvi sachchai kahan"], ans: "Website ke <strong>कड़वी सच्चाई</strong> section mein aap zindagi ke sachet vichar padh sakte hain. <br><br>👉 <a href='thoughts.html' style='color:#d4af37; text-decoration:underline;'>Thoughts Dekhein →</a>" },

        // 86-100: Free eBook & Purchasing
        { keys: ["free ebook kaise milegi", "free book kaise paye"], ans: "Instagram par 3 Reels aur 2 Stories post karke 2,000+ views layein aur Free eBook claim karein! <br><br>👉 <a href='free-ebook.html' style='color:#d4af37; text-decoration:underline;'>Challenge Details Dekhein →</a>" },
        { keys: ["kitni reels chahiye", "reels target"], ans: "Challenge ke liye 3 alag-alag Reels post karni hoti hain." },
        { keys: ["kitni stories chahiye", "stories target"], ans: "Challenge ke liye 2 Stories lagana anivarya hai." },
        { keys: ["kitne views chahiye", "views target"], ans: "Teeno Reels ko milakar kul 2,000+ views hone chahiye." },
        { keys: ["kise tag karna hai", "tag kise kare"], ans: "Official account <strong>@saurabhnovelist</strong> ko tag karna anivarya hai." },
        { keys: ["promotion material", "kit kahan milegi"], ans: "Free eBook page par ready-made cover, captions aur reel ideas diye gaye hain." },
        { keys: ["doggy assistant kya kar sakta", "tum kya kar sakte"], ans: "Main website ke sabhi pages, novel, shayari, payment, aur author se jude sawalon ke jawab deta hoon! 🐶✨" }
    ];


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
                Bataiye <strong>${userName} ji</strong>, aaj aap SaurabhNovelist par kya padhna ya dekhna chahenge? Seedhe link par click karke ja sakte hain:<br><br>
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
                Shri Radha Rani ki kripa aap par sadaiv bani rahe. Mujhe aapse judkar bahut khushi hui! Bataiye <strong>${userName ? userName + " ji" : "dost"}</strong>, main aapki kya madad kar sakta hoon? ✨
            `;
        }

        if (q.includes("ram ram") || q.includes("राम राम") || q.includes("jai shree ram") || q.includes("जय श्री राम")) {
            return `
                🙏 <strong>राम राम जी! जय श्री राम!</strong> 🏹🚩<br><br>
                Prabhu Shri Ram ka aashirwad aap par hamesha bana rahe. Aapka din shubh ho! Bataiye main aapki kya seva kar sakta hoon? 🐶✨
            `;
        }

        if (q.includes("mahadev") || q.includes("महादेव") || q.includes("har har") || q.includes("हर हर") || q.includes("bholenath") || q.includes("शिव")) {
            return `
                🔱 <strong>हर हर महादेव! जय शिव शंभू!</strong> 🕉️<br><br>
                Baba Vishwanath ki kripa aap par sadaiv bani rahe. Bataiye <strong>${userName ? userName + " ji" : "mitra"}</strong>, aaj sahitya ki is duniya mein aapki kya madad karoon? 🙏✨
            `;
        }

        if (q.includes("krishna") || q.includes("कृष्णा") || q.includes("kanha")) {
            return `
                🦚 <strong>जय श्री कृष्णा!</strong> 🙏❤️<br><br>
                Shri Krishna ka sneh aur prem aapke jeevan mein bana rahe. Bataiye aaj main aapki kya sahayata karoon? 🐶✨
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
            q.includes("namaste")
        ) {

            waitingForName = true;

            if (userName) {
                return `
                    नमस्ते <strong>${userName} जी</strong>! 👋🐶<br><br>
                    Aapse dobara baat karke accha laga. Bataiye aaj main aapki kya madad karoon?<br><br>
                    • <a href="novel.html" style="color:#d4af37; text-decoration:underline;">📖 Novel 'एक अनजान मुलाकात'</a><br>
                    • <a href="shayari.html" style="color:#d4af37; text-decoration:underline;">✍️ शायरी संग्रह</a><br>
                    • <a href="kavita.html" style="color:#d4af37; text-decoration:underline;">🌸 कविताएँ</a>
                `;
            }

            return `
                नमस्ते! 👋🐶<br><br>
                Mujhe aapse milkar bahut khushi hui! Bataiye main aapki kya madad kar sakta hoon? Waise, <strong>kya aap apna pyara sa naam bata sakte hain?</strong> 😊
            `;
        }


        /* =========================
           4. BUY NOVEL / QR PAYMENT (₹49)
        ========================= */

        if (
            q.includes("buy") ||
            q.includes("kharid") ||
            q.includes("purchase") ||
            q.includes("qr") ||
            q.includes("pay") ||
            q.includes("49") ||
            q.includes("₹49")
        ) {

            return `
                🛒 <strong>Novel 'एक अनजान मुलाकात' खरीदें</strong><br><br>
                💰 <strong>Price:</strong> मात्र ₹49<br><br>
                📱 <strong>Neeche diye gaye QR code ko scan karke pay karein:</strong><br><br>
                <div style="background:#fff; padding:10px; border-radius:10px; text-align:center; max-width:200px; margin:5px auto; border:2px solid #d4af37;">
                    <img src="images/qr.png" alt="Payment QR Code" style="width:100%; height:auto; border-radius:6px; display:block;">
                </div>
                <br>
                ✅ <strong>Payment ke baad screenshot yahan bhejein:</strong><br>
                👉 <a href="https://wa.me/917268802785?text=Hello,%20maine%20novel%20ke%20liye%20payment%20kar%20diya%20hai.%20Ye%20raha%20screenshot." target="_blank" style="color:#25d366; font-weight:bold; text-decoration:underline;">📲 WhatsApp: +91 7268802785</a><br><br>
                🔗 Ya Reader Page par jayein:<br>
                👉 <a href="novel-reader.html" style="color:#d4af37; font-weight:bold; text-decoration:underline;">📖 Novel Reader Page Kholein →</a>
            `;
        }


        /* =========================
           5. 100 Q&A ENGINE SEARCH
        ========================= */

        for (let item of qaDatabase) {
            for (let key of item.keys) {
                if (q.includes(key)) {
                    return item.ans;
                }
            }
        }


        /* =========================
           6. DEFAULT FALLBACK
        ========================= */

        return `
            🐶 Mujhe iska sateek jawab nahi mila, par aap ye zaroori links dekh sakte hain:<br><br>
            • <a href="novel.html" style="color:#d4af37; text-decoration:underline;">📖 Novel 'एक अनजान मुलाकात'</a><br>
            • <a href="novel-reader.html" style="color:#d4af37; text-decoration:underline;">🛒 Buy ₹49 / 20 Pages Free</a><br>
            • <a href="shayari.html" style="color:#d4af37; text-decoration:underline;">✍️ शायरी संग्रह</a><br>
            • <a href="kavita.html" style="color:#d4af37; text-decoration:underline;">🌸 कविताएँ</a><br>
            • <a href="thoughts.html" style="color:#d4af37; text-decoration:underline;">💭 कड़वी सच्चाई</a><br>
            • <a href="about.html" style="color:#d4af37; text-decoration:underline;">👤 लेखक परिचय</a><br><br>
            Ya seedhe <a href="https://wa.me/917268802785" target="_blank" style="color:#25d366; font-weight:bold; text-decoration:underline;">WhatsApp Support</a> par baat karein.
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
        thinking.innerHTML = `🐶 Soch raha hoon...`;
        messages.appendChild(thinking);

        messages.scrollTop = messages.scrollHeight;

        /* ANSWER */
        setTimeout(function () {
            thinking.innerHTML = getAnswer(question);
            messages.scrollTop = messages.scrollHeight;
        }, 350);

    }


    /* =========================
       SEND BUTTON & KEYS
    ========================= */

    document.getElementById("ai-send").addEventListener("click", function () {
        const input = document.getElementById("ai-input");
        sendMessage(input.value);
        input.value = "";
    });

    document.getElementById("ai-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            document.getElementById("ai-send").click();
        }
    });

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
