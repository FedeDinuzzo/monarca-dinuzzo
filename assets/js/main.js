/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav__toggle','nav__menu')

/*===== REMOVE MENU MOBILE =====*/
const nav__link = document.querySelectorAll('.nav__link')

function linkAction(){
    //Active link
    nav__link.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const nav__menu = document.getElementById('nav__menu')
    nav__menu.classList.remove('show')
}

