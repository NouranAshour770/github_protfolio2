// AOS animations
// AOS animations
AOS.init({ duration: 800, once: true });

// إعادة تهيئة AOS بعد تحميل كل العناصر
window.addEventListener('load', function () {
    AOS.refresh();
});

