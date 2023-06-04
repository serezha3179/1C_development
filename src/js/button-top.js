const body = document.querySelector('body');
const buttonTop = document.querySelector('.button-top');

if(body) {
    window.addEventListener('scroll', ()=> {
    const scrollY = window.scrollY || document.documentElement.scrollTop; 
        if(scrollY > 600) {
    buttonTop.classList.add('scroll')
   } else {
    buttonTop.classList.remove('scroll')
   }
    })
    if(window.scrollY > 600) {
        buttonTop.classList.add('scroll')
    }
   buttonTop.addEventListener('click', ()=> {
    body.scrollIntoView({block: "start", behavior: "smooth"})
   })
}