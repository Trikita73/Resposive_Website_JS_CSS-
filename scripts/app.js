// Menu
const burgerMenu = document.querySelector('.mnu-button__menu')

if (burgerMenu) {
    const menuBackground = document.querySelector('.main-menu-background')
    const mainMenu = document.querySelector('.main-menu')

    burgerMenu.addEventListener('click', menu => {
        burgerMenu.classList.toggle('active')

        if(burgerMenu.classList.contains('active')) {
            menuBackground.classList.add('active')
            mainMenu.classList.add('active')
        } else {
            menuBackground.classList.remove('active')
            mainMenu.classList.remove('active')
        }
    })
}


// Parallax
gsap.utils.toArray('[data-parallax-wrapper]').forEach(container => {
    const img = container.querySelector('[data-parallax-target]')

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            scrub: true,
        }
    })

    tl.fromTo(img, {
        yPersent: -15,
        ease: 'none'
    }, {
        yPersent: 15,
        ease: 'none'
    })
})

// accordion

const accordionCol = document.querySelectorAll('.accordion__col')
accordionCol.forEach(col => {
    col.addEventListener('mouseenter', () => {
        accordionCol.forEach(c => {
            c.classList.remove('active')
            col.classList.add('active')
        })
    })
})

