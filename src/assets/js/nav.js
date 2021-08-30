const openMenu = document.querySelector("#menu-toggle")
const closeMenu = document.querySelector("#close-mobile-menu > button")
const menu = document.querySelector("#menu")
const menuItems = document.querySelectorAll("#menu a")

openMenu.addEventListener('click', () => {
    menu.classList.add('show')
    menu.classList.remove('hide')
    openMenu.setAttribute("aria-expanded", true)
})

closeMenu.addEventListener('click', () => {
    menu.classList.add('hide')
    menu.classList.remove('show')
    openMenu.setAttribute("aria-expanded", false)
})

for (let i = 0; i < menuItems.length; i++) {
    const currentMenuItem = menuItems[i]

    currentMenuItem.addEventListener('click', () => {
        menu.classList.add('hide')
        menu.classList.remove('show')
        openMenu.setAttribute("aria-expanded", false)
    })
}