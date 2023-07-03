if(document.querySelector('header')) {
    const header = document.querySelector('.header');
    const headerBurger = document.querySelector('.header__burger');
    const navigation = document.querySelectorAll('.nav__link');
    const body = document.querySelector('body');

    navigation.forEach(item=>item.addEventListener('click', (e)=> {
        e.preventDefault();
        navigation.forEach(item=>item.classList.remove('is-active'));
        item.classList.add('is-active');
        if(header.classList.contains('is-active')) {
            getCoordinates(e, 'instant');
            header.classList.remove('is-active');
            headerBurger.classList.remove('is-active');
            body.classList.remove('is-lock');
            
        } else {
        getCoordinates(e,'smooth');
        }
    }));

    headerBurger.addEventListener('click', ()=>{
        headerBurger.classList.toggle('is-active');
        header.classList.toggle('is-active');
        body.classList.toggle('is-lock');
    });

    function getCoordinates(e,behavior) {
        e.preventDefault();
        let target = e.target.getAttribute('data-attribute');
            let getSectionCoordinates = document.getElementById(`${target}`).offsetTop;
            const headerHeight = document.querySelector('.header').clientHeight;
            window.scrollTo({
                top: getSectionCoordinates - headerHeight,
                behavior: behavior
            })
    }
}