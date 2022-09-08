/** Show Menu Navbar **/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show-menu");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/** Remove Menu Mobile **/

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/** Scroll Sections Active Link **/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/** Change Background Header **/

function scrollHeader() {
    const nav = document.getElementById("header");

    if (this.scrollY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/** Show Scroll Top **/

function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");

    if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);
