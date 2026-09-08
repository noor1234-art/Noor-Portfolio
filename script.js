console.log("JavaScript is connected!");
const viewWorkBtn = document.getElementById("viewWorkBtn");

viewWorkBtn.addEventListener("click", function() {
    console.log("View My Work button clicked!");
});
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const sectionId = link.getAttribute("href");
        const section = document.querySelector(sectionId);

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});
const sections = document.querySelectorAll("section");
const allNavLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }

    });

    allNavLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});