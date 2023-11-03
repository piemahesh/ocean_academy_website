const SlideBar = document.querySelector(".slide-bar");
const MenuBtn = document.querySelector(".menu-btn")
const closeSlide = document.querySelector(".close-slide");

const section2 = document.querySelector(".section2")
console.log(section2)

MenuBtn.addEventListener("click", () => {
    SlideBar.style.right = "2px";

})
closeSlide.addEventListener("click", () => {
    SlideBar.style.right = "-300px";
})


const trackingLine = document.querySelector(".trackingLine");
window.addEventListener('scroll', function () {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / totalHeight) * 100;
    trackingLine.style.width = `${scrolled}%`
});



// ........................slides old student......


