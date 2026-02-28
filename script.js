document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navList = document.querySelector(".nav-list");
    const header = document.querySelector(".header");

    if (mobileToggle) {
        // Toggle menu on button click
        mobileToggle.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent event from bubbling
            navList.classList.toggle("active");
            // Change icon
            const icon = mobileToggle.querySelector("i");
            if (navList.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            // Check if click is outside the header/nav area
            if (!header.contains(e.target) && navList.classList.contains("active")) {
                navList.classList.remove("active");
                const icon = mobileToggle.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });

        // Close menu when clicking on nav links
        const navLinks = navList.querySelectorAll("a");
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navList.classList.remove("active");
                const icon = mobileToggle.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            });
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-active");
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            // Close other open items (optional, usually better UX)
            faqItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

    // Reviews Slider (Simple)
    const slides = document.querySelectorAll(".review-card");
    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add("active");
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
        nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
    }

    // Stats Counter Animation (optional bonus)
    const statsSection = document.querySelector(".stats");
    let counted = false;

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !counted) {
                // Here we could animate numbers if we had a library or custom logic
                // For now, just ensuring the section is visible is handled by general animations
                counted = true;
            }
        });
        statsObserver.observe(statsSection);
    }

    // Scroll Animation (Kick & Move Down)
    const messiImg = document.querySelector(".hero-messi-img");
    const heroBall = document.querySelector(".hero-ball");
    if (messiImg && heroBall) {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            if (scrollY < 1200) {
                // Optimization
                // Messi moves down
                messiImg.style.transform = `translateY(${scrollY * 0.4}px)`;
                // Ball shoots (Right-Top)
                heroBall.style.transform = `translate(${scrollY * 5}px, -${scrollY * 3}px) rotate(${scrollY * 15}deg)`;
            }
        });
    }

    // Features Tabs logic
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Remove active from all
            tabBtns.forEach((b) => b.classList.remove("active"));
            tabPanes.forEach((p) => p.classList.remove("active"));

            // Activate clicked
            btn.classList.add("active");

            // Show target
            const targetId = btn.getAttribute("data-tab");
            const targetPane = document.getElementById(targetId);
            if (targetPane) targetPane.classList.add("active");
        });
    });

    // ==========================================
    // MULTI-LANGUAGE SYSTEM
    // ==========================================

    const translations = {
        en: {
            "nav.login": "Log In",
            "nav.signup": "Sign Up",
            "hero.title":
                'SIGN UP TODAY AND EARN UP TO <br> <span class="text-primary glow-text block mt-2 mb-2">25%-50% LIFETIME REVENUE SHARE</span> <br> WITH OUR PARTNERS',
            "hero.subtitle":
                "Join Melbet Partners without any investment and start earning lifetime commissions of 30% to 60%. You can withdraw daily as soon as you reach $50. With commission payouts via Bkash, Nagad, and USDT, it's easy to cash in on your referrals. Don't miss this opportunity to monetize your audience with MELBET PARTNERS!",
            "hero.cta": "GET STARTED",
        },
        hi: {
            "nav.login": "लॉग इन",
            "nav.signup": "साइन अप",
            "hero.title":
                'आज साइन अप करें और कमाएं <br> <span class="text-primary glow-text block mt-2 mb-2">25%-50% आजीवन रेवेन्यू शेयर</span> <br> हमारे पार्टनर्स के साथ',
            "hero.subtitle":
                "बिना किसी निवेश के Melbet Partners से जुड़ें और 30% से 60% तक आजीवन कमीशन कमाना शुरू करें। $50 तक पहुंचते ही आप दैनिक निकासी कर सकते हैं। Bkash, Nagad और USDT के माध्यम से भुगतान।",
            "hero.cta": "शुरू करें",
        },
        bn: {
            "nav.login": "লগ ইন",
            "nav.signup": "সাইন আপ",
            "hero.title":
                'আজই সাইন আপ করুন এবং উপার্জন করুন <br> <span class="text-primary glow-text block mt-2 mb-2">২৫%-৫০% আজীবন রেভিনিউ শেয়ার</span> <br> আমাদের অংশীদারদের সাথে',
            "hero.subtitle":
                "কোনো বিনিয়োগ ছাড়াই Melbet Partners-এ যোগ দিন এবং ৩০% থেকে ৬০% আজীবন কমিশন উপার্জন শুরু করুন। $৫০ পৌঁছালেই প্রতিদিন উত্তোলন করতে পারবেন। Bkash, Nagad এবং USDT এর মাধ্যমে পেমেন্ট।",
            "hero.cta": "শুরু করুন",
        },
        pt: {
            "nav.login": "Entrar",
            "nav.signup": "Cadastrar",
            "hero.title":
                'CADASTRE-SE HOJE E GANHE ATÉ <br> <span class="text-primary glow-text block mt-2 mb-2">25%-50% DE PARTICIPAÇÃO DE RECEITA VITALÍCIA</span> <br> COM NOSSOS PARCEIROS',
            "hero.subtitle":
                "Junte-se ao Melbet Partners sem nenhum investimento e comece a ganhar comissões vitalícias de 30% a 60%. Você pode sacar diariamente assim que atingir $50. Com pagamentos via Bkash, Nagad e USDT.",
            "hero.cta": "COMEÇAR",
        },
        es: {
            "nav.login": "Iniciar Sesión",
            "nav.signup": "Registrarse",
            "hero.title":
                'REGÍSTRATE HOY Y GANA HASTA <br> <span class="text-primary glow-text block mt-2 mb-2">25%-50% DE COMISIÓN DE POR VIDA</span> <br> CON NUESTROS SOCIOS',
            "hero.subtitle":
                "Únete a Melbet Partners sin ninguna inversión y comienza a ganar comisiones de por vida del 30% al 60%. Puedes retirar diariamente al llegar a $50. Con pagos vía Bkash, Nagad y USDT.",
            "hero.cta": "EMPEZAR",
        },
    };

    // Country to Language mapping
    const countryLangMap = {
        IN: "hi", // India -> Hindi
        BD: "bn", // Bangladesh -> Bengali
        BR: "pt", // Brazil -> Portuguese
        PT: "pt", // Portugal -> Portuguese
        ES: "es", // Spain -> Spanish
        MX: "es", // Mexico -> Spanish
        AR: "es", // Argentina -> Spanish
        PK: "en", // Pakistan -> English (default)
        US: "en",
        GB: "en",
    };

    function updateContent(lang) {
        const dict = translations[lang] || translations["en"];
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });
        // Update current language display
        const currentLangSpan = document.getElementById("currentLang");
        if (currentLangSpan) {
            currentLangSpan.textContent = lang.toUpperCase();
        }
        // Save preference
        localStorage.setItem("preferredLang", lang);
    }

    // Language Dropdown Toggle
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

        // Language Selection
        langDropdown.querySelectorAll("a[data-lang]").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const selectedLang = link.getAttribute("data-lang");
                updateContent(selectedLang);
                langDropdown.classList.remove("active");
            });
        });
    }

    // Auto-detect location on page load
    const savedLang = localStorage.getItem("preferredLang");
    if (savedLang) {
        updateContent(savedLang);
    } else {
        // Fetch country from IP
        fetch("https://ipapi.co/json/")
            .then((response) => response.json())
            .then((data) => {
                const countryCode = data.country_code || "US";
                const detectedLang = countryLangMap[countryCode] || "en";
                console.log(
                    `Detected country: ${countryCode}, using language: ${detectedLang}`,
                );
                updateContent(detectedLang);
            })
            .catch((err) => {
                console.log("Geo-detection failed, defaulting to English", err);
                updateContent("en");
            });
    }
});
