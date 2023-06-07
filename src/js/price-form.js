if(document.querySelector('.price')) {
    const buttonPlus = document.querySelectorAll('#buttonPlus')
    const buttonMinus = document.querySelectorAll('#buttonMinus')

    buttonPlus.forEach(item=> {
        item.addEventListener('click', (e)=> {
        e.preventDefault();
        })
    })
    buttonMinus.forEach(item=> {
        item.addEventListener('click', (e)=> {
            e.preventDefault()
        })
    })
    
}