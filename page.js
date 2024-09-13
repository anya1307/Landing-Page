const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");


ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});


CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

/
AOS.init();

gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,