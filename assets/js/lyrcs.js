/*===== MENU SHOW =====*/
const showeMenu = (iconId, lyrcsId) => {
    const icon = document.getElementById(iconId),
    lyrcs = document.getElementById(lyrcsId)

    if(icon && lyrcs){
        icon.addEventListener('click', ()=>{
            lyrcs.classList.toggle('show2')
        })
    }
}

showeMenu('lyrcs__icon','lyrcs__menu')

/*===== REMOVE MENU MOBILE =====*/
const lyrcs__link = document.querySelectorAll('.lyrcs__link')

function linkAction(){
    //Active link
    lyrcs__link.forEach(n => n.classList.remove('active2'))
    this.classList.add('active2')

    //remove menu mobile
    const lyrcs__menu = document.getElementById('lyrcs__menu')
    lyrcs__menu.classList.remove('show2')
}