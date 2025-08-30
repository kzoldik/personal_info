let btn=document.querySelector("p")

let bodyBackgroundColor = color => {
    document.body.style.setProperty("background-color", color);
};
altContent = "🌝";
btn.onclick = () => {
    if (document.body.style.backgroundColor === "var(--dark)") {
        bodyBackgroundColor("var(--light)");
        btn.textContent = altContent;
    } else {
        bodyBackgroundColor("var(--dark)");
        btn.textContent = "🌚";
    }
};

// تأثيرات بسيطة عند التمرير
document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll(".skill-card");
    const hobbyCards = document.querySelectorAll(".hobby-card");

    // تأثير عشوائي للبطاقات
    skillCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100);
    });

    hobbyCards.forEach((card, index) => {
        card.style.opacity = "0";
        setTimeout(() => {
            card.style.transition = "opacity 0.5s ease";
            card.style.opacity = "1";
        }, 200 * index);
    });

    // تأثير عند التمرير
    window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section");

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });

    // تهيئة أولية للعناصر
    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    // تشغيل تأثير التمرير عند التحميل
    window.dispatchEvent(new Event("scroll"));
});
