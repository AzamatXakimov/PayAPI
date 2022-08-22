var elOpenNavBar = document.querySelector(".js-open-navbar");
var elCloseNavBar = document.querySelector(".js-close-navbar");

elOpenNavBar.addEventListener("click", function(){
    elOpenNavBar.closest(".site-header").classList.add("navbar-open");
});

elCloseNavBar.addEventListener("click", function(){
    elCloseNavBar.closest(".site-header").classList.remove("navbar-open");
});

