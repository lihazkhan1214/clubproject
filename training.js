const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.mob_navbar')
const close= document.querySelector('.close')


hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
})
close.addEventListener('click', () => {
    nav.classList.toggle('active')
})