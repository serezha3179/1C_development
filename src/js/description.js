if(document.querySelector('.description')) {
    // const card = document.querySelector('.description__card');
    const data = document.querySelector('.description__item-title[data-card]');
    const titles = document.querySelectorAll('.description__item-title');
    const cards = document.querySelectorAll('.description__card');
    let a = document.querySelector('.description__card.first');

    // window.addEventListener('rechange', ()=> {
    //     document.querySelector('.description__item-title[data-attribute = "first"]').after(document.querySelector('.description__card.first'))
    // })
        window.addEventListener('DOMContentLoaded', screen)
    window.addEventListener('resize', screen)
    function screen() {
        if(window.matchMedia("(max-width: 900px)").matches) {
        document.querySelector('.description__item-title.is-active').after(document.querySelector('.description__card.is-active'))
        } else {
            document.querySelector('.description__item_right').prepend(document.querySelector('.description__card.is-active'));
        }
    }

    titles.forEach(item => item.addEventListener('click', ()=> {
        titles.forEach(item => item.classList.remove('is-active'));
        item.classList.add('is-active');
        const attr = item.getAttribute('data-attribute');
        cards.forEach(item=>item.classList.contains(attr) ? item.classList.add('is-active') : item.classList.remove('is-active'));
        if(window.matchMedia("(max-width: 900px)").matches) {
        // item.after(document.querySelector('.' + attr));
        item.after(document.querySelector('.description__card.is-active'))
        } else {
            // document.querySelector('.description__card-wrapper attr').prepend(document.querySelector('.description__card attr'));
            document.querySelector('.description__item_right').prepend(document.querySelector('.description__card.is-active'));
        }
    }))
}