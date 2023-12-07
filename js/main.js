const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

const accordionHeader = document.querySelectorAll('.accordion-header')

accordionHeader.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event =>{
        accordionHeader.classList.toggle("active")
        const accordionBody = accordionHeader.nextElementSibling
        if(accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
        }
        else{
            accordionBody.style.maxHeight = 0
        }
    })
})

document.addEventListener('DOMContentLoaded', initApp)