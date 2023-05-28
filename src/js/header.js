if(document.querySelector('header')) {
    const header = document.querySelector('.header');
    const headerBurger = document.querySelector('.header__burger');
    const navigation = document.querySelectorAll('.nav__link');

    navigation.forEach(item=>item.addEventListener('click', (e)=> {
        e.preventDefault();
        navigation.forEach(item=>item.classList.remove('active'));
        item.classList.add('active');
    }));

    headerBurger.addEventListener('click', ()=>{
        headerBurger.classList.toggle('active');
        header.classList.toggle('active');
    });
}