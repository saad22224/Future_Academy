
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,   // عدد الصور المعروضة في كل مرة
    spaceBetween: 20,    // المسافة بين الصور

    loop: true,          // تكرار السلايدر بشكل مستمر
    autoplay: {
      delay: 3000,       // تأخير تلقائي 3 ثواني بين التبديلات
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // عرض 2 صورة في الشاشات الصغيرة
      },
      480: {
        slidesPerView: 1, // عرض 1 صورة في الشاشات الصغيرة جدًا
      },
      375: {
        slidesPerView: 1, // عرض 1 صورة في الشاشات الصغيرة جدًا
      },
      400: {
        slidesPerView: 1, // عرض 1 صورة في الشاشات الصغيرة جدًا
      },
      350: {
        slidesPerView: 1, // عرض 1 صورة في الشاشات الصغيرة جدًا
      },
    }
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
  sr.reveal(".about_texto" ,  { origin: "top" });
  sr.reveal(".about_img" ,  { origin: "right" });
  sr.reveal(".about_lang" ,  { origin: "left" });
  sr.reveal(".services_texto" ,  { origin: "bottom" });
  sr.reveal(".services_card" ,  { origin: "top" });
  sr.reveal(".addservices_texto" ,  { origin: "top" });
  sr.reveal(".addservices_card" ,  { origin: "bottom" });
  sr.reveal(".why-us_texto" ,  { origin: "bottom" });
  sr.reveal(".why-us_card" ,  { origin: "left" });
  sr.reveal(".our-work_texto" ,  { origin: "right" });
  sr.reveal(".our-work_card" ,  { origin: "left" });
  sr.reveal(".contact" ,  { origin: "bottom" });
  sr.reveal(".copy" ,  { origin: "top" });


