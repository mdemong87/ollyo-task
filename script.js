function toggleFaq(index) {
    const answer = document.querySelectorAll('.faq-answer')[index];
    const icon = document.getElementById(`icon-${index}`);
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>'; // Minus icon
    } else {
        answer.classList.add('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>'; // Plus icon
    }
}







//header sectinn js code
let header = document.querySelector("#header");

window.addEventListener('scroll', (e) => {
    const hight = scrollY;
    if (hight > 80) {
        header.style.background = "white";
        header.style.borderBottom = "1px solid #E4EAF8";
        header.style.transition = "background .6s";
    } else {
        header.style.background = "transparent";
        header.style.borderBottom = "none";
    }
});





//small screen navber manage js code
let navmenu = document.querySelector("#navmenu");
let smallnav = document.querySelector('#smallnav');
let openspace = document.querySelector("#openspace");
let crossiconsnav = document.querySelector("#crossiconsnav");

navmenu.addEventListener("click", () => {
    smallnav.style.display = "block";
    setTimeout(() => {
        smallnav.classList.add('active');
    }, 10); // Small delay to ensure the transition works
});

openspace.addEventListener("click", () => {
    smallnav.classList.remove('active');
    setTimeout(() => {
        smallnav.style.display = "none";
    }, 300); // Wait for the transition to complete
});

crossiconsnav.addEventListener("click", () => {
    smallnav.classList.remove('active');
    setTimeout(() => {
        smallnav.style.display = "none";
    }, 300);
});


window.addEventListener("resize", (e) => {
    const width = window.innerWidth;
    if (width > 1024) {
        smallnav.style.display = "none";
    }
})













// swiper
var swiper = new Swiper(".workswoper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '#swiper-button-next',
        prevEl: '#swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {

        990: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});