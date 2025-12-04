// const primaryBtn = document.querySelector('.primary-btn');

// primaryBtn.addEventListener("mousemove", ()=>{
//     primaryBtn
// })

const swiper = new Swiper(".spcl-offer-slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: "24px",
});

const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("active");
});
