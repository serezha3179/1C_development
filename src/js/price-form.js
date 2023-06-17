if(document.querySelector('.price')) {
    const buttonsPlus = document.querySelectorAll('#buttonPlus')
    const buttonsMinus = document.querySelectorAll('#buttonMinus')
    const inputs = document.querySelectorAll('input');

    function buttonPlus(e) {
        e.preventDefault();
        let item = e.target;
        if(item.parentElement.querySelector('input').value > 49) {
            item.classList.add('disabled')
        } else {
            if(item.parentElement.querySelector('#buttonMinus').classList.contains('disabled')){
                item.parentElement.querySelector('#buttonMinus').classList.remove('disabled')
            }
            item.parentElement.querySelector('input').value++;
            plusNewElement(e);
        item.previousElementSibling.value = item.parentElement.querySelector('input').value;
       if(item.parentElement.querySelector('input').value > 49) {
        item.classList.add('disabled')
       } 
        }
    }

    function inputFocusOut(e) {
        let item = e.target;
        if(item.value == 50) {
            item.nextElementSibling.classList.add('disabled')
            item.previousElementSibling.classList.remove('disabled')
            inputClick()
        } else {
            if(item.value > 0)
            if(item.previousElementSibling.classList.contains('disabled')){
                item.previousElementSibling.classList.remove('disabled')
            }
       if(item.value > 49) {
        item.nextElementSibling.classList.add('disabled')
       } 
        }
    }

    buttonsPlus.forEach(item => {
        item.addEventListener('click', buttonPlus)
        inputs.forEach(item=> {item.addEventListener('focusout', inputFocusOut)
    })
})

    buttonsMinus.forEach(item=> {
        item.addEventListener('click', (e)=> {
            e.preventDefault()

            if(item.parentElement.querySelector('input').value < 1) {
                item.classList.add('disabled')
            } else {
                if(item.parentElement.querySelector('#buttonPlus').classList.contains('disabled')){
                    item.parentElement.querySelector('#buttonPlus').classList.remove('disabled')
                }
                item.parentElement.querySelector('input').value--;
                minusNewElement(e);
                item.nextElementSibling.value = item.parentElement.querySelector('input').value;
                if(item.parentElement.querySelector('input').value < 1) {
                    item.classList.add('disabled')
                }
            }
        })
    })

    inputs.forEach(item =>
         item.addEventListener('click', inputClick));

    inputs.forEach(item=> 
        item.addEventListener('focusout', inputfocusout));

    inputs.forEach(item=>
        item.addEventListener('focusin', () => {
            item.value = "";
        }))

    function inputClick(e) {
        let target = e.target;
        if(target.getAttribute("type") == 'radio') {
            target.setAttribute("checked","checked")
            let inputText = target.parentElement.textContent;
            let div = document.createElement('div');
            let img = document.createElement('img');
                    img.className = 'is-deleteElement';
                    img.setAttribute('src','../img/price/cross.png');
                    img.style.display = 'inline-block';
                    img.style.marginLeft = "10px";
                    img.style.cursor = 'pointer';
            div.className = 'price__item-text';
            div.textContent = inputText;
            if(document.querySelector('.item-services').querySelector('.price__item-text')) {
                document.querySelector('.item-services').querySelector('.price__item-text').remove();
                document.querySelector('.item-services').append(div);
                document.querySelector('.item-services div').append(img)
                img.addEventListener('click', deleteRadioElement);
            } else {
                document.querySelector('.item-services').append(div);
                document.querySelector('.item-services div').append(img);
            }
        }
    }

    function inputfocusout(e) {
            let target = e.target;
            if(target.getAttribute("type") == 'text') {
                let inputText = target.parentElement.querySelector('span').textContent;
                let div = document.createElement('div');
                let span = document.createElement('span');
                let img = document.createElement('img');
                    img.className = 'is-deleteElement';
                    img.setAttribute('src','../img/price/cross.png');
                    img.style.display = 'inline-block';
                    img.style.marginLeft = "10px";
                    img.style.cursor = 'pointer';
                let dataName = target.id;
                span.textContent = target.parentElement.querySelector('input').value;
                div.className = 'price__item-text';
                div.setAttribute('data', dataName)
                div.textContent = inputText;
                if(target.value > 50) {
                    span.textContent = 50;
                    target.value = 50;
                } else if(target.value == "") {
                    target.value = 0;
                } else if(target.value == 0) {
                    target.value = 0;
                    target.previousElementSibling.classList.add('disabled');
                    target.nextElementSibling.classList.remove('disabled');
                } else {
                }
                
                div.prepend(span);
                div.append(img);

                if(!document.querySelector('.item-team').querySelector(`.price__item-text[data = ${dataName}]`) && target.value != 0 && target.value != "") {
                    document.querySelector('.item-team').append(div);
                    
                    img.addEventListener('click', deleteElement);
                } else {
                    document.querySelector('.item-team').querySelector(`.price__item-text[data = ${dataName}]`).querySelector('span').textContent = target.parentElement.querySelector('input').value;
                }
              }
            }
    
    function plusNewElement(e) {
        let target = e.target;
        if(target.parentElement.querySelector('input').getAttribute("type") == 'text') {
            let inputText = target.parentElement.querySelector('span').textContent;
                let div = document.createElement('div');
                let span = document.createElement('span');
                let img = document.createElement('img');
                    img.className = 'is-deleteElement';
                    img.setAttribute('src','../img/price/cross.png');
                    img.style.display = 'inline-block';
                    img.style.marginLeft = "10px";
                    img.style.cursor = 'pointer';
                let dataName = target.parentElement.querySelector('input').id;
                span.textContent = target.parentElement.querySelector('input').value;
                div.className = 'price__item-text';
                div.setAttribute('data', dataName)
                div.textContent = inputText;
                span.textContent = target.parentElement.querySelector('input').value;
                div.prepend(span);
                div.append(img);
                if(!document.querySelector('.item-team').querySelector(`.price__item-text[data = ${dataName}]`)) {
                    document.querySelector('.item-team').append(div);
                    img.addEventListener('click', deleteElement);
                } else {
                    document.querySelector('.item-team').querySelector(`.price__item-text[data = ${dataName}]`).querySelector('span').textContent = target.parentElement.querySelector('input').value;
                }
        }
    }

    function minusNewElement(e) {
        let target = e.target;
        if(target.parentElement.querySelector('input').getAttribute("type") == "text") {
                let dataName = target.parentElement.querySelector('input').id;
                if(document.querySelector('.item-team').querySelector(`.price__item-text[data = ${dataName}]`)) {
                    if(target.parentElement.querySelector('input').value > 0) { 
                    document.querySelector('.item-team').querySelector(`.price__item-text[data = ${dataName}]`).querySelector('span').textContent = target.parentElement.querySelector('input').value;
                } else {
                    document.querySelector(`.price__item-text[data = ${dataName}]`).remove();
                }
            }
        }
    }

    function deleteElement(e) {
        let target = e.target;
        let getAttributeValue =  target.parentElement.getAttribute('data');
        document.querySelector('#' + getAttributeValue).value = 0;
        document.querySelector('#' + getAttributeValue).previousElementSibling.classList.add('disabled');
        target.parentElement.remove();
    }
}