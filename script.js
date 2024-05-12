// for project slider

const leftArrow = document.querySelector(".icon-tabler-arrow-left");
const rightArrow = document.querySelector(".icon-tabler-arrow-right");
const projectSet = document.querySelector(".projectSet");

leftArrow.addEventListener('click', function () {
   projectSet.scrollLeft -= 350;
   console.log("clicked legt");
});

rightArrow.addEventListener('click', function () {
   projectSet.scrollLeft += 350;
});


// for mobile nav bar

const mobileMenu = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");
const tablerIcon = document.querySelector(".tabler-icon");
const mobli = document.querySelectorAll(".mob-li");

mobileMenu.addEventListener("click", function () {
   mobileNav.classList.toggle("closed-menu");
});
tablerIcon.addEventListener("click", function () {
   mobileNav.classList.add("closed-menu");
});

mobli.forEach((data) => {
   data.addEventListener("click", function () {
      mobileNav.classList.add("closed-menu");
   })
});


// for footer

const footerDate = document.querySelector(".footer-date");

footerDate.innerText = `Copyright © ${new Date().getFullYear()},  All rights are reserved.`