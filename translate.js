document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    const mobileToggle = document.getElementById("mobileToggle");
    const navList = document.getElementById("navList");
    const header = document.getElementById("header");

    if (mobileToggle) {
        mobileToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navList.classList.toggle("active");
            const icon = mobileToggle.querySelector("i");
            if (navList.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });

        document.addEventListener("click", (e) => {
            if (!header.contains(e.target) && navList.classList.contains("active")) {
                navList.classList.remove("active");
                const icon = mobileToggle.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });

        navList.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navList.classList.remove("active");
                const icon = mobileToggle.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            });
        });
    }

    // ==========================================
    // Scroll Animations (Intersection Observer)
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

    // ==========================================
    // FAQ Accordion
    // ==========================================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            faqItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });

    // ==========================================
    // Language Support & Translation Engine
    // ==========================================
    const translations = {
        en: {
            nav_about: "About", nav_games: "Games", nav_bonuses: "Bonuses", nav_withdrawal: "Withdrawal", nav_app: "App", nav_security: "Security", nav_faq: "FAQ",
            btn_login: "Log In", btn_registration: "Registration", btn_play: "Play Now", btn_review: "Reviews",
            hero_title: "Download WowBet App APK - Official Mobile App (Android & iOS)",
            hero_subtitle: "Login to play, deposit, and claim rewards. Account access on WowBet is built to be fast and reliable. From the moment you choose to join us, our platform ensures that every WowBet login is secure and effortless.",
            payment_title: "Payment Operations via WowBet Login",
            payment_p1: "Financial transactions on WowBet are structured to support secure and efficient account management for every player. Once the WowBet login is completed, users can handle deposits and withdrawals with confidence, using reliable payment services suitable for Bangladesh. The system is designed to maintain smooth processing so that funds remain easily accessible throughout gameplay and promotions.",
            payment_p2: "Multiple payment routes are available to accommodate individual preferences. These include international bank cards, regional mobile financial services, and cryptocurrency options for enhanced flexibility. Funds transferred after the WowBet register procedure are protected by encrypted channels, ensuring a safe and uninterrupted experience.",
            payment_th_method: "Payment Method", payment_th_type: "Type", payment_th_min: "Minimum Deposit (BDT)", payment_th_time: "Processing Time", payment_instant: "Instant",
            slots_title: "Popular Slots at WowBet Casino",
            bonuses_title: "Welcome Offers with WowBet Register",
            bonuses_p1: "New accounts receive exclusive access to promotions crafted to improve both the start and progression of every gaming session. The WowBet register process immediately opens the door to matched bonuses, free spins, and cashback — all structured for ease of use. Each offer is tailored to support early engagement while maintaining value for regular participation.",
            bonus_th_type: "Bonus Type", bonus_th_game: "Game", bonus_th_desc: "Bonus Description",
            footer_text: "© 2026 WowBet Casino (wowbett.net). All rights reserved. 18+ Only. Gamble responsibly.",
            quick_links: "Quick Links", info_label: "Info", legal_label: "Legal",
            about_p1: "Account access on WowBet is built to be fast and reliable. From the moment you choose to join us, our platform ensures that every WowBet login is secure and effortless. We've designed the entry process to keep things simple for both new and returning players, so you can focus on gameplay, bonuses, and everything else we've prepared for our community.",
            about_th_feature: "Feature", about_th_details: "Details", about_cost_label: "Cost", about_cost_val: "Free to Join",
            about_version_label: "Version", about_size_label: "Size", about_licence_label: "Licence", about_systems_label: "Supported Operating Systems",
            about_services_label: "Services", about_services_val: "Casino, Live Casino, Sportsbook, Crash Games", about_payments_label: "Payment Options",
            about_langs_label: "Languages", about_security_label: "Security", about_security_val: "256-bit SSL Encryption", about_support_label: "Customer Service", about_support_val: "24/7 Live Chat & Email Support",
            promo_login_title: "Game Selection After WowBet Login",
            promo_login_p1: "The variety of games on WowBet reflects our focus on combining entertainment with performance. Once players complete the WowBet login, they gain access to carefully curated categories that suit different preferences — from modern slots to real-time live tables.",
            promo_reg_title: "Game Categories with WowBet Register",
            promo_reg_p1: "Every category within our platform is built to deliver unique pacing and gameplay styles. After completing the WowBet register process, users can explore card games, roulettes, crash formats, and themed lotteries — all backed by leading software studios.",
            promo_li1: "Slot Machines – Featuring traditional and video slots",
            promo_li2: "Table Games – Poker, blackjack, and other card-based options",
            promo_li3: "Live Casino – Real-time tables hosted by professionals",
            promo_li4: "Crash & Instant Games – Fast rounds with variable payouts",
            providers_title: "Partner Studios and Providers",
            providers_th_name: "Provider", providers_th_type: "Game Type", providers_th_highlights: "Highlights",
            providers_type_slots: "Slots, Live Tables", providers_high_v: "High Volatility & Features", providers_type_live: "Live Casino", providers_high_r: "Real-Time Streaming",
            providers_type_slots_tab: "Slots, Table Games", providers_tr_c: "Trusted Classics", providers_type_crash: "Crash Games", providers_fair: "Provably Fair Mechanics",
            providers_type_scr_slots: "Scratchcards, Slots", providers_creative: "Creative Game Design", providers_fair_math: "Fast Load & Fair Math",
            community_title: "Community Favorites",
            community_p1: "Popular titles on our platform include crowd favorites like \"Sweet Bonanza\" and \"Gonzo's Quest,\" which are appreciated for their engaging rounds and visual quality. Table fans often return to \"Live Baccarat\" and \"Lightning Roulette,\" where each round adds a level of suspense.",
            reg_title: "Account Setup Through WowBet Register",
            reg_p1: "Creating a profile on WowBet is a quick and secure process. Our team has structured the WowBet register flow to offer multiple sign-up methods, including phone, email, and social accounts. All registration data is encrypted, and player information remains protected throughout the setup.",
            reg_verify_title: "Verification Steps After WowBet Login",
            reg_verify_p1: "Completing verification ensures full access to platform features. After the initial WowBet login, players will be guided through a brief identity confirmation to activate their account:",
            reg_li1: "Confirm your email address through the link provided",
            reg_li2: "Enter the SMS code sent to your registered mobile number",
            reg_verify_p2: "These steps are essential to maintain account security and compliance with gaming regulations.",
            reg_currency_title: "Currency Selection and Payment Setup",
            reg_currency_p1: "Once the account is verified, players can configure their deposit settings and choose a preferred currency — including BDT. Payment methods range from bank cards to digital wallets, depending on the region.",
            reg_li3: "Choose your currency from the dropdown list",
            reg_li4: "Add a payment option to activate deposits",
            reg_kyc_note: "Additional identity checks (KYC) may apply based on your location and activity level.",
            promo_code_title: "Promotional Benefits Available Through WowBet Register",
            promo_code_p1: "Promo codes form an important part of the rewards system on our platform, offering additional value through deposit bonuses, cashback options, and free spin packages. Once the WowBet register procedure is completed, players can access available codes.",
            promo_code_p2: "Using promo codes is a simple process. After completing a WowBet login, players may review current offers, select a suitable option, and apply the code in the corresponding field when depositing.",
            promo_code_li1: "Sign in to your account after finishing the WowBet register process",
            promo_code_li2: "Open the promotions area to review current codes",
            promo_code_li3: "Select an offer that meets your playing preferences",
            promo_code_li4: "Enter the code during a deposit or activation sequence",
            promo_code_li5: "Confirm the entry to finalize the reward",
            promo_code_note: "Promo codes include terms such as wagering rules, time limitations, and withdrawal requirements.",
            mobile_title: "Mobile Access After WowBet Login",
            mobile_p1: "Our mobile platform is built to accommodate players who prefer using smartphones or tablets. Once a WowBet login is completed, users can operate every major function of the site through a responsive interface.",
            mobile_p2: "From registration to real-money gameplay, the mobile version supports the full range of features offered on desktop. Players in Bangladesh can open accounts and manage payments directly from their phones.",
            security_title: "Security Standards Built into WowBet Register",
            security_p1: "Account protection is an essential part of our platform's infrastructure. During the WowBet register process, users are required to provide verified details in accordance with international KYC protocols.",
            sec_f1_title: "Encrypted Communication", sec_f1_p1: "All information is protected by SSL protocols ensuring data safety at every step.",
            sec_f2_title: "Two-Step Access", sec_f2_p1: "Extra verification adds protection for every account with multi-factor authentication.",
            sec_f3_title: "Regulatory Compliance", sec_f3_p1: "Operations meet international licensing standards with independently tested RNG.",
            sec_assist_title: "Player Assistance via WowBet Login",
            sec_assist_p1: "Support is available 24/7 to help with any aspect of the platform, including WowBet login issues, verification status, or account updates. Multilingual support options are in place to ensure clarity.",
            regu_title: "Regulatory Notes Related to WowBet Login",
            regu_p1: "Licensing is a central part of maintaining transparency and responsibility across our operations. Before completing a WowBet login, players are encouraged to review the licensing data.",
            regu_p2: "A recognized gaming license provides structured procedures for responsible participation and fair-play standards. It also confirms age compliance and ensures that dispute channels remain accessible.",
            cta_title: "Ready to Win Big at WowBet Casino?",
            cta_subtitle: "Register now and claim your welcome bonus. Instant deposits via bKash, Nagad & crypto.",
            faq_section_title: "Wowbet Frequently Asked Questions (FAQ)",
            faq_q1: "How do I create an account on Wowbet?",
            faq_a1: "To register, visit the official Wowbet website or download the app and click the 'Sign Up' or 'Registration' button. You can often choose 'One-Click' registration for speed or sign up using your phone number or email. Ensure you provide accurate details to make future withdrawals seamless.",
            faq_q2: "How to Download the Wowbet APK for Android?",
            faq_a2: "Since real-money betting apps are often restricted on the Google Play Store, you can download the Wowbet APK directly from the official website. Go to the 'Mobile App' section, click the Android icon, and allow 'Install from Unknown Sources' in your phone settings.",
            faq_q3: "What is the Wowbet Welcome Bonus for new users?",
            faq_a3: "New players are typically eligible for a 150% Welcome Bonus on their first deposit. For example, in certain regions, this can go up to 44,000 BDT or equivalent in other currencies. Always check the 'Promotions' tab for the latest promo codes.",
            faq_q4: "How can I deposit and withdraw money on Wowbet?",
            faq_a4: "Wowbet supports a variety of local and international payment methods including Mobile Wallets (bKash, Nagad), Cryptocurrency (Bitcoin, USDT, Ethereum), and traditional bank transfers. Withdrawals are generally processed through the same method used for depositing.",
            faq_q5: "Is Wowbet legal and safe to use in Bangladesh?",
            faq_a5: "Wowbet operates under international gaming licenses (such as the Government of Anjouan) and uses advanced SSL encryption to protect user data. However, users should always check their local regulations regarding online betting before participating.",
            faq_q6: "What sports can I bet on at Wowbet?",
            faq_a6: "The platform offers an extensive sportsbook covering Cricket (IPL, BPL, ICC World Cup), Football (English Premier League, La Liga, Champions League), eSports (Dota 2, CS:GO, League of Legends), Tennis, Basketball, and Table Tennis.",
            faq_q7: "What should I do if I forget my Wowbet login password?",
            faq_a7: "Click on the 'Forgot Password?' link on the Wowbet login page. You will be prompted to enter your registered email or phone number to receive a reset link or code. If you still face issues, Wowbet's 24/7 customer support is available via live chat."
        },
        bn: {
            nav_about: "আমাদের সম্পর্কে", nav_games: "গেমস", nav_bonuses: "বোনাস", nav_withdrawal: "উত্তোলন", nav_app: "অ্যাপ", nav_security: "নিরাপত্তা", nav_faq: "এফএকিউ",
            btn_login: "লগইন", btn_registration: "রেজিস্ট্রেশন", btn_play: "এখন খেলুন", btn_review: "রিভিউ",
            hero_title: "WowBet অ্যাপ APK ডাউনলোড করুন - অফিসিয়াল মোবাইল অ্যাপ (অ্যান্ড্রয়েড এবং আইওএস)",
            hero_subtitle: "খেলতে, জমা দিতে এবং পুরস্কার দাবি করতে লগইন করুন। WowBet-এ অ্যাকাউন্ট অ্যাক্সেস দ্রুত এবং নির্ভরযোগ্য হওয়ার জন্য তৈরি করা হয়েছে। আপনি আমাদের সাথে যোগদানের মুহূর্ত থেকে, আমাদের প্ল্যাটফর্ম নিশ্চিত করে যে প্রতিটি WowBet লগইন নিরাপদ এবং সহজ।",
            payment_title: "WowBet লগইন এর মাধ্যমে পেমেন্ট অপারেশন",
            payment_p1: "WowBet-এ আর্থিক লেনদেন প্রতিটি খেলোয়াড়ের জন্য নিরাপদ এবং দক্ষ অ্যাকাউন্ট পরিচালনা সমর্থন করার জন্য তৈরি করা হয়েছে। একবার WowBet লগইন সম্পন্ন হলে, ব্যবহারকারীরা বাংলাদেশের জন্য উপযুক্ত নির্ভরযোগ্য পেমেন্ট পরিষেবাগুলি ব্যবহার করে আত্মবিশ্বাসের সাথে জমা এবং উত্তোলন পরিচালনা করতে পারেন।",
            payment_p2: "স্বতন্ত্র পছন্দগুলি মিটমাট করার জন্য একাধিক পেমেন্ট রুট উপলব্ধ। এর মধ্যে রয়েছে আন্তর্জাতিক ব্যাঙ্ক কার্ড, আঞ্চলিক মোবাইল ফিনান্সিয়াল সার্ভিস এবং উন্নত নমনীয়তার জন্য ক্রিপ্টোকারেন্সি বিকল্প।",
            payment_th_method: "পেমেন্ট পদ্ধতি", payment_th_type: "ধরণ", payment_th_min: "নূন্যতম জমা (BDT)", payment_th_time: "প্রক্রিয়াকরণের সময়", payment_instant: "তাত্ক্ষণিক",
            slots_title: "WowBet ক্যাসিনোতে জনপ্রিয় স্লট",
            bonuses_title: "WowBet রেজিস্ট্রেশনের সাথে স্বাগতম অফার",
            bonuses_p1: "নতুন অ্যাকাউন্টগুলি প্রতিটি গেমিং সেশনের শুরু এবং অগ্রগতি উভয়ই উন্নত করার জন্য তৈরি করা প্রচারগুলিতে একচেটিয়া অ্যাক্সেস পায়। WowBet রেজিস্টার প্রক্রিয়া অবিলম্বে ম্যাচড বোনাস, ফ্রি স্পিন এবং ক্যাশব্যাকের দরজা খুলে দেয়।",
            bonus_th_type: "বোনাস ধরণ", bonus_th_game: "গেম", bonus_th_desc: "বোনাস বিবরণ",
            footer_text: "© ২০২৬ WowBet ক্যাসিনো (wowbett.net)। সমস্ত অধিকার সংরক্ষিত। ১৮+ শুধুমাত্র। দায়িত্বের সাথে জুয়া খেলুন।",
            quick_links: "দ্রুত লিঙ্ক", info_label: "তথ্য", legal_label: "আইনি",
            about_p1: "WowBet-এ অ্যাকাউন্ট অ্যাক্সেস দ্রুত এবং নির্ভরযোগ্য হওয়ার জন্য তৈরি করা হয়েছে। আপনি আমাদের সাথে যোগদানের মুহূর্ত থেকে, আমাদের প্ল্যাটফর্ম নিশ্চিত করে যে প্রতিটি WowBet লগইন নিরাপদ এবং সহজ। আমরা নতুন এবং ফিরে আসা উভয় খেলোয়াড়দের জন্য প্রক্রিয়াটি সহজ রাখার জন্য ডিজাইন করেছি।",
            about_th_feature: "বৈশিষ্ট্য", about_th_details: "বিস্তারিত", about_cost_label: "খরচ", about_cost_val: "যোগদান করা ফ্রি",
            about_version_label: "ভার্সন", about_size_label: "সাইজ", about_licence_label: "লাইসেন্স", about_systems_label: "সমর্থিত অপারেটিং সিস্টেম",
            about_services_label: "পরিষেবা", about_services_val: "ক্যাসিনো, লাইভ ক্যাসিনো, স্পোর্টসবুক, ক্র্যাশ গেমস", about_payments_label: "পেমেন্ট অপশন",
            about_langs_label: "ভাষা", about_security_label: "নিরাপত্তা", about_security_val: "২৫৬-বিট SSL এনক্রিপশন", about_support_label: "কাস্টমার সার্ভিস", about_support_val: "২৪/৭ লাইভ চ্যাট ও ইমেইল সাপোর্ট",
            promo_login_title: "WowBet লগইনের পরে গেম সিলেকশন",
            promo_login_p1: "WowBet-এ গেমের বৈচিত্র্য বিনোদনের সাথে পারফরম্যান্সের সমন্বয় প্রতিফলিত করে। একবার খেলোয়াড়রা WowBet লগইন সম্পন্ন করলে, তারা আধুনিক স্লট থেকে রিয়েল-টাইম লাইভ টেবিল পর্যন্ত বিভিন্ন পছন্দ অনুসারে কিউরেটেড ক্যাটাগরিগুলিতে অ্যাক্সেস পায়।",
            promo_reg_title: "WowBet রেজিস্ট্রেশনের সাথে গেম ক্যাটাগরি",
            promo_reg_p1: "আমাদের প্ল্যাটফর্মের প্রতিটি ক্যাটাগরি অনন্য পেসিং এবং গেমিং স্টাইল দেওয়ার জন্য তৈরি করা হয়েছে। WowBet রেজিস্টার প্রক্রিয়া শেষ করার পরে, ব্যবহারকারীরা কার্ড গেমস, রুলেট, ক্র্যাশ ফরম্যাট এবং থিমযুক্ত লটারিগুলি অন্বেষণ করতে পারেন।",
            promo_li1: "স্লট মেশিন – ঐতিহ্যগত এবং ভিডিও স্লট বৈশিষ্ট্যযুক্ত",
            promo_li2: "টেবিল গেমস – পোকার, ব্ল্যাকজ্যাক এবং অন্যান্য কার্ড-ভিত্তিক বিকল্প",
            promo_li3: "লাইভ ক্যাসিনো – পেশাদারদের দ্বারা হোস্ট করা রিয়েল-টাইম টেবিল",
            promo_li4: "ক্র্যাশ এবং ইনস্ট্যান্ট গেমস – পরিবর্তনশীল পেআউট সহ দ্রুত রাউন্ড",
            providers_title: "পার্টনার স্টুডিও এবং প্রোভাইডার",
            providers_th_name: "প্রোভাইডার", providers_th_type: "গেম ধরণ", providers_th_highlights: "হাইলাইটস",
            providers_type_slots: "স্লট, লাইভ টেবিল", providers_high_v: "উচ্চ অস্থিরতা এবং বৈশিষ্ট্য", providers_type_live: "লাইভ ক্যাসিনো", providers_high_r: "রিয়েল-টাইম স্ট্রিমিং",
            providers_type_slots_tab: "স্লট, টেবিল গেমস", providers_tr_c: "বিশ্বস্ত ক্লাসিক", providers_type_crash: "ক্র্যাশ গেমস", providers_fair: "প্রোভ্যাবলি ফেয়ার মেকানিক্স",
            providers_type_scr_slots: "স্ক্র্যাচকার্ড, স্লট", providers_creative: "সৃজনশীল গেম ডিজাইন", providers_fair_math: "দ্রুত লোড এবং ফেয়ার ম্যাথ",
            community_title: "কমিউনিটি ফেভারিট",
            community_p1: "আমাদের প্ল্যাটফর্মে জনপ্রিয় শিরোনামগুলির মধ্যে \"সুইট বোনানজা\" এবং \"গনজোস কোয়েস্ট\" এর মতো ক্রাউড ফেভারিট অন্তর্ভুক্ত রয়েছে। টেবিল ফ্যানরা প্রায়শই \"লাইভ ব্যাকারেট\" এবং \"লাইটনিং রুলেট\"-এ ফিরে আসেন।",
            reg_title: "WowBet রেজিস্ট্রেশনের মাধ্যমে অ্যাকাউন্ট সেটআপ",
            reg_p1: "WowBet-এ প্রোফাইল তৈরি করা একটি দ্রুত এবং নিরাপদ প্রক্রিয়া। আমাদের টিম ফোন, ইমেইল এবং সোশ্যাল অ্যাকাউন্ট সহ একাধিক সাইন-আপ পদ্ধতি অফার করার জন্য WowBet রেজিস্টার ফ্লো গঠন করেছে।",
            reg_verify_title: "WowBet লগইনের পরে ভেরিফিকেশন পদক্ষেপ",
            reg_verify_p1: "ভেরিফিকেশন সম্পন্ন করা প্ল্যাটফর্মের বৈশিষ্ট্যগুলিতে পূর্ণ অ্যাক্সেস নিশ্চিত করে। প্রাথমিক WowBet লগইনের পরে, খেলোয়াড়দের তাদের অ্যাকাউন্ট সক্রিয় করতে একটি সংক্ষিপ্ত পরিচয় নিশ্চিতকরণের মাধ্যমে পরিচালিত করা হবে:",
            reg_li1: "প্রদত্ত লিঙ্কের মাধ্যমে আপনার ইমেইল ঠিকানা নিশ্চিত করুন",
            reg_li2: "আপনার নিবন্ধিত মোবাইল নম্বরে পাঠানো এসএমএস কোডটি লিখুন",
            reg_verify_p2: "অ্যাকাউন্ট নিরাপত্তা এবং গেমিং বিধি মেনে চলার জন্য এই পদক্ষেপগুলি অপরিহার্য।",
            reg_currency_title: "কারেন্সি সিলেকশন এবং পেমেন্ট সেটআপ",
            reg_currency_p1: "একবার অ্যাকাউন্ট ভেরিফাই হয়ে গেলে, খেলোয়াড়রা তাদের জমার সেটিংস কনফিগার করতে পারে এবং বিডিটি সহ একটি পছন্দের কারেন্সি বেছে নিতে পারে।",
            reg_li3: "ড্রপডাউন তালিকা থেকে আপনার কারেন্সি চয়ন করুন",
            reg_li4: "আমানত সক্রিয় করতে একটি পেমেন্ট অপশন যোগ করুন",
            reg_kyc_note: "আপনার অবস্থান এবং কার্যকলাপের স্তরের উপর ভিত্তি করে অতিরিক্ত পরিচয় পরীক্ষা (KYC) প্রযোজ্য হতে পারে।",
            promo_code_title: "WowBet রেজিস্ট্রেশনের মাধ্যমে প্রোমোশনাল সুবিধা",
            promo_code_p1: "প্রোমো কোডগুলি আমাদের প্ল্যাটফর্মের পুরষ্কার সিস্টেমের একটি গুরুত্বপূর্ণ অংশ এবং আমানত বোনাস, ক্যাশব্যাক বিকল্প এবং ফ্রি স্পিন প্যাকেজের মাধ্যমে অতিরিক্ত মূল অফার করে।",
            promo_code_p2: "প্রোমো কোড ব্যবহার করা একটি সহজ প্রক্রিয়া। WowBet লগইন সম্পন্ন করার পরে, খেলোয়াড়রা বর্তমান অফারগুলি পর্যালোচনা করতে পারে এবং আমানতের সময় উপযুক্ত বিকল্পটি প্রয়োগ করতে পারে।",
            promo_code_li1: "WowBet রেজিস্টার প্রক্রিয়া শেষ করার পরে আপনার অ্যাকাউন্টে সাইন ইন করুন",
            promo_code_li2: "বর্তমান কোডগুলি দেখতে প্রোমোশন এরিয়া খুলুন",
            promo_code_li3: "আপনার খেলার পছন্দের সাথে মেলে এমন একটি অফার নির্বাচন করুন",
            promo_code_li4: "আমানত বা অ্যাক্টিভেশন করার সময় কোডটি প্রবেশ করান",
            promo_code_li5: "পুরষ্কারটি নিশ্চিত করতে এন্ট্রিটি কনফার্ম করুন",
            promo_code_note: "প্রোমো কোডগুলিতে বাজি ধরার নিয়ম, সময়ের সীমাবদ্ধতা এবং উত্তোলনের প্রয়োজনীয়তার মতো শর্তাদি অন্তর্ভুক্ত থাকে।",
            mobile_title: "WowBet লগইনের পরে মোবাইল অ্যাক্সেস",
            mobile_p1: "আমাদের মোবাইল প্ল্যাটফর্মটি স্মার্টফোন বা ট্যাবলেট ব্যবহার করতে পছন্দকারী খেলোয়াড়দের জন্য তৈরি করা হয়েছে। একবার WowBet লগইন সম্পন্ন হলে, ব্যবহারকারীরা একটি রেসপন্সিভ ইন্টারফেসের মাধ্যমে সাইটের প্রতিটি প্রধান কাজ পরিচালনা করতে পারেন।",
            mobile_p2: "রেজিস্ট্রেশন থেকে শুরু করে রিয়েল-মানি গেমপ্লে পর্যন্ত, মোবাইল ভার্সন পেজ ডেস্কটপে দেওয়া ফিচারের পূর্ণ পরিসর সমর্থন করে। বাংলাদেশের খেলোয়াড়রা সরাসরি তাদের ফোন থেকে অ্যাকাউন্ট খুলতে এবং পেমেন্ট পরিচালনা করতে পারে।",
            security_title: "WowBet রেজিস্ট্রেশনে অন্তর্নির্মিত নিরাপত্তা মান",
            security_p1: "অ্যাকাউন্ট সুরক্ষা আমাদের প্ল্যাটফর্মের অবকাঠামোর একটি অপরিহার্য অংশ। WowBet রেজিস্টার প্রক্রিয়ার সময়, ব্যবহারকারীদের আন্তর্জাতিক KYC প্রোটোকল অনুযায়ী ভেরিফাইড তথ্য সরবরাহ করতে হয়।",
            sec_f1_title: "এনক্রিপ্টেড যোগাযোগ", sec_f1_p1: "প্রতিটি পদক্ষেপে ডেটা সুরক্ষা নিশ্চিত করে সমস্ত তথ্য SSL প্রোটোকল দ্বারা সুরক্ষিত থাকে।",
            sec_f2_title: "টু-স্টেপ অ্যাক্সেস", sec_f2_p1: "মাল্টি-ফ্যাক্টর অথেন্টিকেশন সহ প্রতিটি অ্যাকাউন্টের জন্য অতিরিক্ত ভেরিফিকেশন সুরক্ষা যোগ করে।",
            sec_f3_title: "নিয়ন্ত্রক সম্মতি", sec_f3_p1: "অপারেশনগুলি স্বাধীনভাবে পরীক্ষিত RNG সহ আন্তর্জাতিক লাইসেন্সিং মান পূরণ করে।",
            sec_assist_title: "WowBet লগইনের মাধ্যমে খেলোয়াড় সহায়তা",
            sec_assist_p1: "WowBet লগইন সমস্যা, ভেরিফিকেশন স্ট্যাটাস বা অ্যাকাউন্ট আপডেট সহ প্ল্যাটফর্মের যেকোনো বিষয়ে সহায়তা করার জন্য সাপোর্ট ২৪/৭ উপলব্ধ। স্বচ্ছতা নিশ্চিত করার জন্য বহুভাষিক সহায়তা বিকল্প রয়েছে।",
            regu_title: "WowBet লগইন সম্পর্কিত নিয়ন্ত্রক নোট",
            regu_p1: "লাইসেন্সিং আমাদের ক্রিয়াকলাপ জুড়ে স্বচ্ছতা এবং দায়িত্ব বজায় রাখার একটি কেন্দ্রীয় অংশ। WowBet লগইন সম্পন্ন করার আগে, খেলোয়াড়দের লাইসেন্সিং ডাটা পর্যালোচনা করতে উত্সাহিত করা হয়।",
            regu_p2: "একটি স্বীকৃত গেমিং লাইসেন্স দায়িত্বশীল অংশগ্রহণ এবং ফেয়ার-প্লে স্ট্যান্ডার্ডের জন্য কাঠামোগত পদ্ধতি সরবরাহ করে। এটি বয়সের সম্মতিও নিশ্চিত করে এবং নিশ্চিত করে যে বিরোধের চ্যানেলগুলি অ্যাক্সেসযোগ্য থাকে।",
            cta_title: "WowBet ক্যাসিনোতে বড় জয়ের জন্য প্রস্তুত?",
            cta_subtitle: "এখনই নিবন্ধন করুন এবং আপনার স্বাগতম বোনাস দাবি করুন। বিকাশ, নগদ এবং ক্রিপ্টোর মাধ্যমে তাত্ক্ষণিক জমা।",
            faq_section_title: "Wowbet প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)",
            faq_q1: "কিভাবে Wowbet-এ অ্যাকাউন্ট তৈরি করবো?",
            faq_a1: "রেজিস্টার করতে, অফিসিয়াল Wowbet ওয়েবসাইট ভিজিট করুন অথবা অ্যাপ ডাউনলোড করে 'সাইন আপ' বা 'রেজিস্ট্রেশন' বাটনে ক্লিক করুন। দ্রুত রেজিস্ট্রেশনের জন্য 'ওয়ান-ক্লিক' পদ্ধতি বেছে নিতে পারেন।",
            faq_q2: "অ্যান্ড্রয়েডের জন্য Wowbet APK কিভাবে ডাউনলোড করবো?",
            faq_a2: "Google Play Store-এ সীমাবদ্ধতার কারণে, আপনি অফিসিয়াল Wowbet ওয়েবসাইট থেকে সরাসরি APK ডাউনলোড করতে পারেন। 'মোবাইল অ্যাপ' সেকশনে যান এবং 'অজানা সোর্স থেকে ইনস্টল' অনুমতি দিন।",
            faq_q3: "নতুন ব্যবহারকারীদের জন্য Wowbet ওয়েলকাম বোনাস কী?",
            faq_a3: "নতুন খেলোয়াড়রা সাধারণত তাদের প্রথম ডিপোজিটে ১৫০% ওয়েলকাম বোনাস পাওয়ার যোগ্য। কিছু অঞ্চলে এটি ৪৪,০০০ BDT পর্যন্ত হতে পারে। সর্বশেষ প্রোমো কোডের জন্য 'প্রোমোশন' ট্যাব দেখুন।",
            faq_q4: "Wowbet-এ কিভাবে টাকা জমা এবং উত্তোলন করবো?",
            faq_a4: "Wowbet বিভিন্ন স্থানীয় এবং আন্তর্জাতিক পেমেন্ট পদ্ধতি সমর্থন করে: মোবাইল ওয়ালেট (বিকাশ, নগদ), ক্রিপ্টোকারেন্সি (বিটকয়েন, USDT, ইথেরিয়াম), এবং ব্যাঙ্ক ট্রান্সফার।",
            faq_q5: "Wowbet কি বাংলাদেশে বৈধ এবং নিরাপদ?",
            faq_a5: "Wowbet আন্তর্জাতিক গেমিং লাইসেন্সের অধীনে (যেমন আনজুয়ান সরকার) পরিচালিত হয় এবং ব্যবহারকারীর ডেটা সুরক্ষায় উন্নত SSL এনক্রিপশন ব্যবহার করে।",
            faq_q6: "Wowbet-এ কোন কোন খেলায় বাজি ধরতে পারি?",
            faq_a6: "প্ল্যাটফর্মটি ক্রিকেট (আইপিএল, বিপিএল, আইসিসি বিশ্বকাপ), ফুটবল (ইপিএল, লা লিগা, চ্যাম্পিয়ন্স লিগ), ই-স্পোর্টস (ডোটা ২, সিএস:গো), টেনিস, বাস্কেটবল সহ বিস্তৃত স্পোর্টসবুক অফার করে।",
            faq_q7: "Wowbet লগইন পাসওয়ার্ড ভুলে গেলে কী করবো?",
            faq_a7: "লগইন পরে 'পাসওয়ার্ড ভুলে গেছেন?' লিঙ্কে ক্লিক করুন। আপনাকে রিসেট লিঙ্ক বা কোড পেতে আপনার নিবন্ধিত ইমেইল বা ফোন নম্বর দিতে বলা হবে। সমস্যা থাকলে Wowbet-এর ২৪/৭ সাপোর্ট লাইভ চ্যাটে যোগাযোগ করুন।"
        },
        es: {
            nav_about: "Nosotros", nav_games: "Juegos", nav_bonuses: "Bonos", nav_withdrawal: "Retiro", nav_app: "App", nav_security: "Seguridad", nav_faq: "FAQ",
            btn_login: "Iniciar Sesión", btn_registration: "Registro", btn_play: "Juega Ahora", btn_review: "Reseñas",
            hero_title: "Descargar WowBet App APK - Aplicación Móvil Oficial (Android e iOS)",
            hero_subtitle: "Inicie sesión para jugar, depositar y reclamar recompensas. El acceso a la cuenta en WowBet está diseñado para ser rápido y confiable. Nuestra plataforma garantiza que cada inicio de sesión en WowBet sea seguro y sin esfuerzo.",
            payment_title: "Operaciones de Pago mediante WowBet Login",
            payment_p1: "Las transacciones financieras en WowBet están estructuradas para admitir una gestión de cuenta segura y eficiente. Una vez completado el inicio de sesión en WowBet, los usuarios pueden manejar depósitos y retiros con confianza utilizando servicios de pago confiables.",
            payment_p2: "Múltiples rutas de pago están disponibles para adaptarse a las preferencias individuales. Estas incluyen tarjetas bancarias internacionales, servicios financieros móviles regionales y opciones de criptomonedas.",
            payment_th_method: "Método de Pago", payment_th_type: "Tipo", payment_th_min: "Depósito Mínimo (BDT)", payment_th_time: "Tiempo de Procesamiento", payment_instant: "Instantáneo",
            slots_title: "Tragamonedas Populares en WowBet Casino",
            bonuses_title: "Ofertas de Bienvenida con WowBet Register",
            bonuses_p1: "Las nuevas cuentas reciben acceso exclusivo a promociones diseñadas para mejorar sus sesiones de juego. El proceso de registro de WowBet abre inmediatamente la puerta a bonos igualados, giros gratis y reembolsos.",
            bonus_th_type: "Tipo de Bono", bonus_th_game: "Juego", bonus_th_desc: "Descripción del Bono",
            footer_text: "© 2026 WowBet Casino (wowbett.net). Todos los derechos reservados. Solo mayores de 18 años. Juegue de forma responsable.",
            quick_links: "Enlaces Rápidos", info_label: "Información", legal_label: "Legal",
            about_p1: "El acceso a la cuenta en WowBet está diseñado para ser rápido y confiable. Nuestra plataforma garantiza que cada inicio de sesión sea seguro. Hemos diseñado el proceso para que sea simple tanto para jugadores nuevos como habituales.",
            about_th_feature: "Característica", about_th_details: "Detalle", about_cost_label: "Costo", about_cost_val: "Gratis",
            about_version_label: "Versión", about_size_label: "Tamaño", about_licence_label: "Licencia", about_systems_label: "Sistemas Operativos",
            about_services_label: "Servicios", about_services_val: "Casino, Live Casino, Deportes", about_payments_label: "Pagos",
            about_langs_label: "Idiomas", about_security_label: "Seguridad", about_security_val: "Cifrado SSL de 256 bits", about_support_label: "Soporte", about_support_val: "24/7 Chat y Email",
            promo_login_title: "Selección de Juegos tras WowBet Login",
            promo_login_p1: "La variedad de juegos en WowBet combina entretenimiento y rendimiento. Tras completar el WowBet login, acceda a categorías curadas que van desde tragamonedas modernas hasta mesas en vivo.",
            promo_reg_title: "Categorías de Juegos con WowBet Register",
            promo_reg_p1: "Cada categoría ofrece estilos de juego únicos. Tras el WowBet register, los usuarios pueden explorar juegos de cartas, ruletas, formatos crash y loterías temáticas respaldadas por estudios líderes.",
            promo_li1: "Tragamonedas – Con opciones tradicionales y de video",
            promo_li2: "Juegos de Mesa – Póker, blackjack y otras opciones",
            promo_li3: "Live Casino – Mesas en tiempo real con profesionales",
            promo_li4: "Juegos Crash – Rondas rápidas con pagos variables",
            providers_title: "Estudios y Proveedores Asociados",
            providers_th_name: "Proveedor", providers_th_type: "Tipo de Juego", providers_th_highlights: "Destacados",
            providers_type_slots: "Tragamonedas, Mesas", providers_high_v: "Alta Volatilidad", providers_type_live: "Casino en Vivo", providers_high_r: "Streaming en Tiempo Real",
            providers_type_slots_tab: "Tragamonedas, Mesa", providers_tr_c: "Clásicos Confiables", providers_type_crash: "Juegos Crash", providers_fair: "Mecánicas Provably Fair",
            providers_type_scr_slots: "Rasca y Gana, Slots", providers_creative: "Diseño Creativo", providers_fair_math: "Carga Rápida y Matemáticas Justas",
            community_title: "Favoritos de la Comunidad",
            community_p1: "Títulos populares incluyen favoritos como \"Sweet Bonanza\" y \"Gonzo's Quest\". Los fans de las mesas suelen volver a \"Baccarat en Vivo\" y \"Lightning Roulette\".",
            reg_title: "Configuración de Cuenta vía WowBet Register",
            reg_p1: "Crear un perfil en WowBet es rápido y seguro. Hemos estructurado el flujo de registro para ofrecer múltiples métodos como teléfono, email y redes sociales. Los datos están cifrados.",
            reg_verify_title: "Pasos de Verificación tras WowBet Login",
            reg_verify_p1: "La verificación asegura acceso total. Tras el primer WowBet login, será guiado por una confirmación de identidad para activar su cuenta:",
            reg_li1: "Confirme su email mediante el enlace enviado",
            reg_li2: "Ingrese el código SMS enviado a su número",
            reg_verify_p2: "Estos pasos son esenciales para la seguridad y el cumplimiento normativo.",
            reg_currency_title: "Selección de Moneda y Pago",
            reg_currency_p1: "Tras verificar la cuenta, configure sus depósitos y elija su moneda preferida (incluyendo BDT). Los métodos van desde tarjetas hasta billeteras digitales.",
            reg_li3: "Elija su moneda de la lista desplegable",
            reg_li4: "Añada una opción de pago para activar depósitos",
            reg_kyc_note: "Pueden aplicar controles de identidad adicionales (KYC) según su ubicación.",
            promo_code_title: "Beneficios Promocionales con WowBet Register",
            promo_code_p1: "Los códigos promocionales ofrecen valor adicional mediante bonos de depósito, reembolsos y giros gratis. Tras el WowBet register, acceda a los códigos disponibles.",
            promo_code_p2: "Usar códigos es simple. Tras el WowBet login, revise las ofertas y aplique el código al depositar o activar una promoción.",
            promo_code_li1: "Inicie sesión tras finalizar el WowBet register",
            promo_code_li2: "Abra el área de promociones para revisar códigos",
            promo_code_li3: "Seleccione una oferta de su preferencia",
            promo_code_li4: "Ingrese el código al depositar o activar",
            promo_code_li5: "Confirme para finalizar la recompensa",
            promo_code_note: "Los códigos incluyen términos como reglas de apuesta y límites de tiempo.",
            mobile_title: "Acceso Móvil tras WowBet Login",
            mobile_p1: "Nuestra plataforma móvil es ideal para smartphones. Tras el WowBet login, opere cada función del sitio mediante una interfaz responsiva.",
            mobile_p2: "Desde el registro hasta jugar por dinero real, la versión móvil soporta todas las funciones. Los jugadores en Bangladesh pueden abrir cuentas y pagar desde sus teléfonos.",
            security_title: "Estándares de Seguridad en WowBet Register",
            security_p1: "La protección de cuenta es esencial. Durante el WowBet register, se requieren detalles verificados según protocolos KYC. Aplicamos tecnologías de cifrado.",
            sec_f1_title: "Comunicación Cifrada", sec_f1_p1: "Protección mediante protocolos SSL en cada paso.",
            sec_f2_title: "Acceso en Dos Pasos", sec_f2_p1: "Verificación extra mediante autenticación de múltiples factores.",
            sec_f3_title: "Cumplimiento Normativo", sec_f3_p1: "Operaciones bajo estándares internacionales con RNG probado.",
            sec_assist_title: "Asistencia al Jugador vía WowBet Login",
            sec_assist_p1: "Soporte 24/7 disponible para cualquier aspecto de la plataforma. Ofrecemos opciones multilingües para asegurar claridad.",
            regu_title: "Notas Regulatorias sobre WowBet Login",
            regu_p1: "La licencia central asegura transparencia. Antes del WowBet login, se anima a los jugadores a revisar los datos de licencia.",
            regu_p2: "Una licencia reconocida garantiza procedimientos estructurados y juego limpio. También confirma el cumplimiento de edad y canales de disputa.",
            cta_title: "¿Listo para Ganar a lo Grande en WowBet Casino?",
            cta_subtitle: "Regístrese ahora y reclame su bono de bienvenida. Depósitos instantáneos vía bKash, Nagad y cripto.",
            faq_section_title: "Preguntas Frecuentes sobre Wowbet (FAQ)",
            faq_q1: "¿Cómo creo una cuenta en Wowbet?",
            faq_a1: "Para registrarse, visite el sitio oficial de Wowbet o descargue la aplicación y haga clic en 'Registrarse'. Puede elegir el registro con un clic o registrarse con su teléfono o correo electrónico.",
            faq_q2: "¿Cómo descargar el APK de Wowbet para Android?",
            faq_a2: "Puede descargar el APK de Wowbet directamente desde el sitio oficial. Vaya a la sección 'Aplicación Móvil', haga clic en el icono de Android y permita 'Instalar desde fuentes desconocidas' en su configuración.",
            faq_q3: "¿Cuál es el Bono de Bienvenida de Wowbet?",
            faq_a3: "Los nuevos jugadores son elegibles para un Bono de Bienvenida del 150% en su primer depósito. En ciertas regiones, esto puede llegar hasta 44,000 BDT. Consulte la pestaña 'Promociones' para los últimos códigos.",
            faq_q4: "¿Cómo depositar y retirar dinero en Wowbet?",
            faq_a4: "Wowbet admite billeteras móviles (bKash, Nagad), criptomonedas (Bitcoin, USDT, Ethereum) y transferencias bancarias. Los retiros se procesan por el mismo método utilizado para depositar.",
            faq_q5: "¿Es Wowbet legal y seguro en Bangladesh?",
            faq_a5: "Wowbet opera bajo licencias de juego internacionales (como el Gobierno de Anjouan) y utiliza cifrado SSL avanzado para proteger los datos. Verifique las regulaciones locales antes de participar.",
            faq_q6: "¿En qué deportes puedo apostar en Wowbet?",
            faq_a6: "La plataforma ofrece Cricket (IPL, BPL, Copa Mundial ICC), Fútbol (Premier League, La Liga, Champions League), eSports (Dota 2, CS:GO), Tenis, Baloncesto y Tenis de Mesa.",
            faq_q7: "¿Qué hago si olvido mi contraseña de Wowbet?",
            faq_a7: "Haga clic en '¿Olvidó su contraseña?' en la página de inicio de sesión. Recibirá un enlace de restablecimiento por correo o SMS. Si persiste el problema, contacte al soporte 24/7 de Wowbet."
        },
        fr: {
            nav_about: "À propos", nav_games: "Jeux", nav_bonuses: "Bonus", nav_withdrawal: "Retrait", nav_app: "App", nav_security: "Sécurité", nav_faq: "FAQ",
            btn_login: "Connexion", btn_registration: "S'inscrire", btn_play: "Jouer Maintenant", btn_review: "Avis",
            hero_title: "Télécharger WowBet App APK - Application Mobile Officielle (Android & iOS)",
            hero_subtitle: "Connectez-vous pour jouer, déposer et réclamer des récompenses. L'accès au compte sur WowBet est conçu pour être rapide et fiable. Notre plateforme garantit que chaque connexion est sécurisée.",
            payment_title: "Opérations de Paiement via WowBet Login",
            payment_p1: "Les transactions sur WowBet sont structurées pour une gestion sécurisée. Une fois connecté, gérez vos dépôts et retraits en toute confiance avec des services de paiement fiables.",
            payment_p2: "Plusieurs modes de paiement sont disponibles : cartes bancaires, services mobiles régionaux et crypto-monnaies pour plus de flexibilité.",
            payment_th_method: "Méthode", payment_th_type: "Type", payment_th_min: "Dépôt Min (BDT)", payment_th_time: "Temps de Traitement", payment_instant: "Instantané",
            slots_title: "Machines à Sous Populaires au WowBet Casino",
            bonuses_title: "Offres de Bienvenue avec WowBet Register",
            bonuses_p1: "Les nouveaux comptes bénéficient de promotions conçues pour améliorer leurs sessions. Le processus d'inscription WowBet ouvre la porte aux bonus et tours gratuits.",
            bonus_th_type: "Type de Bonus", bonus_th_game: "Jeu", bonus_th_desc: "Description",
            footer_text: "© 2026 WowBet Casino (wowbett.net). Tous droits réservés. 18+ Uniquement. Jouez de manière responsable.",
            quick_links: "Liens Rapides", info_label: "Infos", legal_label: "Légal",
            about_p1: "L'accès au compte sur WowBet est rapide et fiable. Notre plateforme garantit que chaque connexion est sécurisée et fluide pour tous les joueurs.",
            about_th_feature: "Caractéristique", about_th_details: "Détails", about_cost_label: "Coût", about_cost_val: "Gratuit",
            about_version_label: "Version", about_size_label: "Taille", about_licence_label: "Licence", about_systems_label: "Systèmes",
            about_services_label: "Services", about_services_val: "Casino, Live, Sports, Crash", about_payments_label: "Paiements",
            about_langs_label: "Langues", about_security_label: "Sécurité", about_security_val: "Cryptage SSL 256 bits", about_support_label: "Support", about_support_val: "24/7 Chat & Email",
            promo_login_title: "Sélection de Jeux après WowBet Login",
            promo_login_p1: "La variété des jeux sur WowBet allie divertissement et performance. Accédez à des catégories allant des machines à sous modernes aux tables en direct.",
            promo_reg_title: "Catégories de Jeux avec WowBet Register",
            promo_reg_p1: "Chaque catégorie offre des styles de jeu uniques. Explorez les jeux de cartes, roulettes, formats crash et loteries thématiques.",
            promo_li1: "Machines à Sous – Traditionnelles et vidéo",
            promo_li2: "Jeux de Table – Poker, blackjack et plus",
            promo_li3: "Live Casino – Tables en temps réel avec professionnels",
            promo_li4: "Jeux Crash – Rounds rapides avec gains variables",
            providers_title: "Studios et Fournisseurs Partenaires",
            providers_th_name: "Fournisseur", providers_th_type: "Type de Jeu", providers_th_highlights: "Points Forts",
            providers_type_slots: "Slots, Tables Live", providers_high_v: "Haute Volatilité", providers_type_live: "Casino en Direct", providers_high_r: "Streaming Temps Réel",
            providers_type_slots_tab: "Slots, Table", providers_tr_c: "Classiques Reconnus", providers_type_crash: "Jeux Crash", providers_fair: "Mécaniques Provably Fair",
            providers_type_scr_slots: "Grattage, Slots", providers_creative: "Design Créatif", providers_fair_math: "Chargement Rapide",
            community_title: "Favoris de la Communauté",
            community_p1: "Les titres populaires incluent \"Sweet Bonanza\" et \"Gonzo's Quest\". Les fans de tables reviennent souvent vers le \"Baccarat Live\".",
            reg_title: "Configuration du Compte via WowBet Register",
            reg_p1: "Créer un profil est rapide et sécurisé. Inscrivez-vous via téléphone, email ou réseaux sociaux. Toutes les données sont cryptées.",
            reg_verify_title: "Étapes de Vérification après WowBet Login",
            reg_verify_p1: "La vérification assure un accès total. Suivez ces étapes pour activer votre compte après votre première connexion :",
            reg_li1: "Confirmez votre email via le lien envoyé",
            reg_li2: "Entrez le code SMS envoyé sur votre mobile",
            reg_verify_p2: "Ces étapes sont essentielles pour la sécurité et la conformité.",
            reg_currency_title: "Choix de la Devise et Paiement",
            reg_currency_p1: "Une fois vérifié, choisissez votre devise (dont le BDT) et configurez vos dépôts avec nos méthodes variées.",
            reg_li3: "Choisissez votre devise dans la liste",
            reg_li4: "Ajoutez un mode de paiement pour les dépôts",
            reg_kyc_note: "Des contrôles d'identité (KYC) peuvent s'appliquer selon votre région.",
            promo_code_title: "Avantages Promotionnels avec WowBet Register",
            promo_code_p1: "Les codes promo offrent des bonus de dépôt, du cashback et des tours gratuits. Accédez-y après votre inscription.",
            promo_code_p2: "Utilisez les codes facilement : consultez les offres dans votre compte et appliquez-les lors de vos dépôts.",
            promo_code_li1: "Connectez-vous après votre inscription WowBet",
            promo_code_li2: "Consultez la section Promotions pour voir les codes",
            promo_code_li3: "Sélectionnez l'offre de votre choix",
            promo_code_li4: "Entrez le code lors de votre dépôt",
            promo_code_li5: "Confirmez pour recevoir votre récompense",
            promo_code_note: "Les codes incluent des conditions de mise et des limites de temps.",
            mobile_title: "Accès Mobile après WowBet Login",
            mobile_p1: "Notre plateforme est optimisée pour mobile. Gérez tout votre compte via une interface fluide et responsive.",
            mobile_p2: "De l'inscription au jeu en argent réel, retrouvez toutes les fonctionnalités sur votre smartphone ou tablette.",
            security_title: "Normes de Sécurité WowBet Register",
            security_p1: "La protection de vos données est primordiale. Nous appliquons des technologies de cryptage et suivons les protocoles KYC.",
            sec_f1_title: "Communication Cryptée", sec_f1_p1: "Protection par protocoles SSL à chaque étape de votre navigation.",
            sec_f2_title: "Double Authentification", sec_f2_p1: "Protection supplémentaire pour chaque accès au compte.",
            sec_f3_title: "Conformité Réglementaire", sec_f3_p1: "Respect des standards de licence avec des jeux certifiés RNG.",
            sec_assist_title: "Assistance Joueur via WowBet Login",
            sec_assist_p1: "Support 24/7 disponible pour toute question sur la plateforme. Nous offrons une aide multilingue claire.",
            regu_title: "Notes Réglementaires sur WowBet Login",
            regu_p1: "La licence est centrale pour la transparence. Nous encourageons nos joueurs à consulter les détails réglementaires.",
            regu_p2: "Une licence reconnue assure le jeu responsable et l'équité des tirages. Elle garantit aussi l'accès aux recours.",
            cta_title: "Prêt à gagner gros sur WowBet Casino ?",
            cta_subtitle: "Inscrivez-vous et réclamez votre bonus. Dépôts instantanés via bKash, Nagad et crypto.",
            faq_section_title: "Questions Fréquentes sur Wowbet (FAQ)",
            faq_q1: "Comment créer un compte sur Wowbet ?",
            faq_a1: "Pour vous inscrire, visitez le site officiel Wowbet ou téléchargez l'application et cliquez sur 'S'inscrire'. Vous pouvez choisir l'inscription en un clic ou vous inscrire avec votre téléphone ou email.",
            faq_q2: "Comment télécharger l'APK Wowbet pour Android ?",
            faq_a2: "Vous pouvez télécharger l'APK Wowbet directement depuis le site officiel. Allez dans la section 'Application Mobile', cliquez sur l'icône Android et autorisez 'Installation depuis des sources inconnues'.",
            faq_q3: "Quel est le Bonus de Bienvenue Wowbet ?",
            faq_a3: "Les nouveaux joueurs bénéficient d'un Bonus de Bienvenue de 150% sur leur premier dépôt. Dans certaines régions, cela peut aller jusqu'à 44 000 BDT. Consultez l'onglet 'Promotions' pour les derniers codes.",
            faq_q4: "Comment déposer et retirer de l'argent sur Wowbet ?",
            faq_a4: "Wowbet prend en charge les portefeuilles mobiles (bKash, Nagad), les crypto-monnaies (Bitcoin, USDT, Ethereum) et les virements bancaires. Les retraits sont traités par la même méthode utilisée pour le dépôt.",
            faq_q5: "Wowbet est-il légal et sûr au Bangladesh ?",
            faq_a5: "Wowbet opère sous des licences de jeu internationales (comme le Gouvernement d'Anjouan) et utilise un cryptage SSL avancé. Vérifiez les réglementations locales avant de participer.",
            faq_q6: "Sur quels sports puis-je parier sur Wowbet ?",
            faq_a6: "La plateforme propose le Cricket (IPL, BPL, Coupe du Monde ICC), le Football (Premier League, La Liga, Champions League), l'eSport (Dota 2, CS:GO), le Tennis, le Basketball et le Tennis de Table.",
            faq_q7: "Que faire si j'oublie mon mot de passe Wowbet ?",
            faq_a7: "Cliquez sur 'Mot de passe oublié ?' sur la page de connexion. Un lien de réinitialisation sera envoyé à votre email ou téléphone. En cas de problème, le support 24/7 de Wowbet est disponible via le chat en direct."
        }
    };

    const setLanguage = (lang) => {
        console.log("Setting language to:", lang);
        const currentLangSpan = document.getElementById("currentLang");
        if (currentLangSpan) {
            currentLangSpan.textContent = lang.toUpperCase();
        }

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            const text = (translations[lang] && translations[lang][key]) || translations['en'][key];
            
            if (text) {
                console.log(`Updating ${key} to [${text.substring(0,20)}...]`);
                // Special handling for elements that may contain spans or markup
                if (el.querySelector('.glow-text') || el.querySelector('.highlight') || el.querySelector('strong') || el.querySelector('i')) {
                    if (key === 'hero_title') {
                        const parts = text.split('-').map(p => p.trim());
                        if (parts.length > 1) {
                            el.innerHTML = `${parts[0]} - <span class="glow-text">${parts[1]}</span>`;
                        } else {
                            el.textContent = text;
                        }
                    } else if (key === 'payment_title') {
                        let splitter = ' via ';
                        if (lang === 'bn') splitter = ' এর মাধ্যমে ';
                        if (lang === 'es') splitter = ' mediante ';
                        if (lang === 'fr') splitter = ' via ';
                        
                        const parts = text.split(splitter).map(p => p.trim());
                        if (parts.length > 1) {
                            el.innerHTML = `${parts[0]} ${splitter}<span class="highlight">${parts[1]}</span>`;
                        } else {
                            el.textContent = text;
                        }
                    } else if (key === 'slots_title' || key === 'bonuses_title' || key === 'reg_title' || key === 'security_title' || key === 'regu_title' || key === 'providers_title') {
                        const words = text.split(' ');
                        if (words.length >= 2) {
                            const lastTwo = words.slice(-2).join(' ');
                            const rest = words.slice(0, -2).join(' ');
                            el.innerHTML = `${rest} <span class="highlight">${lastTwo}</span>`;
                        } else {
                            el.innerHTML = `<span class="highlight">${text}</span>`;
                        }
                    } else {
                        el.textContent = text;
                    }
                } else {
                    el.textContent = text;
                }
            } else {
                console.warn("Translation missing for key:", key, "in language:", lang);
            }
        });

        localStorage.setItem("preferredLang", lang);
        document.documentElement.lang = lang;
    };

    const autoDetectLanguage = async () => {
        const savedLang = localStorage.getItem("preferredLang");
        if (savedLang) {
            setLanguage(savedLang);
            return;
        }

        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            if (data.country_code === 'BD') {
                setLanguage('bn');
            } else {
                const browserLang = navigator.language.split('-')[0];
                if (translations[browserLang]) {
                    setLanguage(browserLang);
                } else {
                    setLanguage('en');
                }
            }
        } catch (error) {
            console.error("Language detection failed:", error);
            setLanguage('en');
        }
    };

    const langToggle = document.getElementById("langToggle");
    const langDropdown = document.getElementById("langDropdown");

    if (langToggle && langDropdown) {
        langToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle("active");
        });

        document.addEventListener("click", () => {
            langDropdown.classList.remove("active");
        });

        langDropdown.querySelectorAll("a[data-lang]").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const selectedLang = link.getAttribute("data-lang");
                setLanguage(selectedLang);
                langDropdown.classList.remove("active");
            });
        });
    }

    autoDetectLanguage();

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 30px rgba(124, 58, 237, 0.15)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href === "#") return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });

    document.querySelectorAll(".slot-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
        });
    });

    const hero = document.querySelector(".hero");
    if (hero) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement("div");
            particle.style.cssText = `
                position: absolute; width: ${Math.random() * 4 + 2}px; height: ${Math.random() * 4 + 2}px;
                background: rgba(124, 58, 237, ${Math.random() * 0.3 + 0.1}); border-radius: 50%;
                top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;
                animation: float-gentle ${Math.random() * 4 + 3}s ease-in-out infinite; animation-delay: ${Math.random() * 2}s;
                pointer-events: none; z-index: 1;
            `;
            hero.appendChild(particle);
        }
    }
});
