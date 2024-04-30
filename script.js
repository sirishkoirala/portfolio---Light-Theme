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

mobli.forEach((data)=>{
   data.addEventListener("click",function(){
      mobileNav.classList.add("closed-menu");
   })
});


// for Animation





