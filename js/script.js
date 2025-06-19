// Back to Top Button Logic
window.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Image Slider Logic
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  if (slides.length > 0) {
    setInterval(showNextSlide, 4000); // Change every 4 seconds
  }
});

// //send data to whatsapp
// function sendToWhatsApp(event) {
//       event.preventDefault();
//       const name = document.getElementById("name").value.trim();
//       const phone = document.getElementById("phone").value.trim();
//       const message = document.getElementById("message").value.trim();

//       const text = `Contact Enquiry:\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
//       const whatsappNumber = "919734156506"; // Use your number here
//       const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
//       window.open(url, "_blank");
//     }