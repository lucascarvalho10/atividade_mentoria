/* toggle menu */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(let element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* fechar menu quando clicar em link */
const links = document.querySelectorAll('nav ul li a')

for(let link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* add shadow pro header quando scroll */

const header = document.querySelector("#header")
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
    if(this.window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    } 
}

/* Swiper do Carossel */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });

/* Scroll Reveal */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links, 
    footer .brand, footer .social`, 
    { interval: 100 }
)

/* Button go back up */

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if(this.window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* Menu active according to current section */

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + window.innerHeight / 2 /* Divides window in 8 sections and gets 4 of them. Values achieved by trial and error */

    for (let section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const start = checkpoint >= sectionTop
        const end = checkpoint <= (sectionTop + sectionHeight)

        if (start && end) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}

/* When Scroll */

window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
} )

