const burgerMenu = document.querySelector('.mnu-button__menu')

if (burgerMenu) {
    const menuBackground = document.querySelector('.main-menu-background')
    const mainMenu = document.querySelector('.main-menu')

    burgerMenu.addEventListener('click', menu => {
        burgerMenu.classList.toggle('active')
    })
}