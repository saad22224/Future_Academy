var swiper = new Swiper(".swiper-container", {
  slidesPerView: 5, // عدد الصور المعروضة في كل مرة
  spaceBetween: 20, // المسافة بين الصور

  loop: true, // تكرار السلايدر بشكل مستمر
  autoplay: {
    delay: 3000, // تأخير تلقائي 3 ثواني بين التبديلات
  },
  breakpoints: {
    768: {
      slidesPerView: 4, // عرض 2 صورة في الشاشات الصغيرة
    },
    480: {
      slidesPerView: 3, // عرض 1 صورة في الشاشات الصغيرة جدًا
    },
    375: {
      slidesPerView: 2, // عرض 1 صورة في الشاشات الصغيرة جدًا
    },
    400: {
      slidesPerView: 1, // عرض 1 صورة في الشاشات الصغيرة جدًا
    },
    350: {
      slidesPerView: 1, // عرض 1 صورة في الشاشات الصغيرة جدًا
    },
  },
});

//   SERVICES SWIPER
// تهيئة سوايبر
const swiper1 = new Swiper("#swiper1", {
  loop: true,
  autoplay: {
    delay: 3000,
    spaceBetween: 20,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// تهيئة FancyBox (لمعرض الصور)
$('[data-fancybox="services"]').fancybox({
  buttons: ["zoom", "share", "slideShow", "fullScreen", "close"],
  loop: true,
});
// تهيئة FancyBox (لمعرض الصور)
$('[data-fancybox="gallery"]').fancybox({
  buttons: ["zoom", "share", "slideShow", "fullScreen", "close"],
  loop: true,
});
// تهيئة FancyBox (لمعرض الصور)
$('[data-fancybox="work"]').fancybox({
  buttons: ["zoom", "share", "slideShow", "fullScreen", "close"],
  loop: true,
});

//   scroll

// scroll animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 200,
  // reset:true,  // reset animation
});
// hero
sr.reveal(".hero__text", { origin: "left" });
sr.reveal(".about_texto", { origin: "top" });
sr.reveal(".about_img", { origin: "right" });
sr.reveal(".about_lang", { origin: "left" });
sr.reveal(".services_texto", { origin: "bottom" });
sr.reveal(".services_card", { origin: "top" });
sr.reveal(".addservices_texto", { origin: "top" });
sr.reveal(".addservices_card", { origin: "bottom" });
sr.reveal(".why-us_texto", { origin: "bottom" });
sr.reveal(".why-us_card", { origin: "left" });
sr.reveal(".our-work_texto", { origin: "right" });
sr.reveal(".our-work_card", { origin: "left" });
sr.reveal(".contact", { origin: "bottom" });
sr.reveal(".copy", { origin: "top" });

// whats app button
// وظيفة لإعادة تشغيل اهتزاز الزر كل 10 ثوانٍ
const button = document.querySelector(".whatsapp-button");
setInterval(() => {
  button.classList.add("shake");
  setTimeout(() => button.classList.remove("shake"), 500); // إزالة الاهتزاز بعد انتهاءه
}, 10000);
