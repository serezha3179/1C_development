import {form} from './price-form.js';
if(document.querySelector('.is-popup') || document.querySelector('.is-popup-thanks')) {
    const buttons = document.querySelectorAll('button');
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup__content');
    const popupForm = document.querySelector('.popup__form');
    const popupButton = document.querySelector('.popup__button');
    const popupTitleRight = document.querySelector('.popup__item_right .popup__item-title');
    const popupListWrapper = document.querySelector('.popup__list-wrapper')
    const popupThanks = document.querySelector('.popup-thanks');
    const popupThanksButton = document.querySelector('.popup-thanks__button');
    const body = document.querySelector('body');
    const closeCross = document.querySelector('.popup__close-cross');

    buttons.forEach(item=>item.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.getAttribute('data-attribute') === 'consultation') {
            popup.querySelector('.popup__item-title').textContent = "Запланировать консультацию";
            openPopup();
        } else if(e.target.getAttribute('data-attribute') === 'price') {
            popup.querySelector('.popup__item-title').textContent = "Получить стоимость";
            openPopup();
        } else if(e.target.getAttribute('data-attribute') === 'call') {
            popup.querySelector('.popup__item-title').textContent = "Заказать звонок";
            popup.querySelector('.popup__label-email').classList.add('hidden');
            popup.querySelector('.popup__label-company').classList.add('hidden'); 
            openPopup();
        }
        
    }))

    window.addEventListener('resize',() => {
        if(window.matchMedia("(max-width: 768px)").matches) {
            popupTitleRight.addEventListener('click', popupListWrapperHeight);
        } else {
            popupTitleRight.removeEventListener('click', popupListWrapperHeight);
        }
    })
    
    function popupListWrapperHeight() {
        if (popupListWrapper.style.height) {
            popupListWrapper.style.height = null;
          } else {
            popupListWrapper.style.height = popupListWrapper.scrollHeight + "px";
          }
    }

    function openPopup() {
        popup.classList.add('is-show');
        body.classList.add('is-lock');
        popupTitleRight.addEventListener('click', popupListWrapperHeight);
        popup.addEventListener('click', closePopup);
        popupButton.addEventListener('click', openThanksPopup);
    }
    function closePopup(e) {
        if(e.target === popupContent || e.target === closeCross) {
            popup.classList.remove('is-show');
            body.classList.remove('is-lock');
            clearInputFields();
            popupForm.querySelectorAll('input').forEach((item) => {
                item.classList.remove('error')
            })
            popupListWrapper.style.height = '';
            popupTitleRight.removeEventListener('click', popupListWrapperHeight);
            closeCross.removeEventListener('click', closePopup);
            if(popup.querySelector('.popup__label-email').classList.contains('hidden')) {
                popup.querySelector('.popup__label-email').classList.remove('hidden')
            };
            if(popup.querySelector('.popup__label-company').classList.contains('hidden')) {
                popup.querySelector('.popup__label-company').classList.remove('hidden')
            };
        }
    }
    // popup-thanks
    function openThanksPopup() {
        addErrorInput();
        let error = validationForm();
        if(error === 0) {
            popupThanks.classList.add('is-show');
            document.querySelectorAll('.is-price__item-text').forEach((item) => item.remove());
            form.querySelectorAll('input').forEach((item) => {
                item.removeEventListener('focusout', focusOutInput);
                if(item.matches('input[type="text"]') || item.matches('input[type="range"]')) {
                    item.value = 0;
                    item.previousElementSibling.classList.add('disabled')
                } else if(item.matches('input[type="checkbox"]')) {
                    item.checked = false;
                } else if(item.matches('input[type="radio"]')) {
                    item.checked = false;
                }
            })
            clearInputFields();
            popup.classList.remove('is-show');
            popupThanksButton.addEventListener('click', closeThanksPopup);
        }
        
        
    }
    function closeThanksPopup() {
        popupThanks.classList.remove('is-show');
            popup.classList.remove('is-show');
            body.classList.remove('is-lock');
            if(popupListWrapper.classList.contains('is-open')) {
                popupListWrapper.classList.remove('is-open');
                popupListWrapper.removeEventListener('click', popupListWrapperHeight)
            }
            closeCross.removeEventListener('click', closePopup);
            if(popup.querySelector('.popup__label-email').classList.contains('hidden')) {
                popup.querySelector('.popup__label-email').classList.remove('hidden')
            };
            if(popup.querySelector('.popup__label-company').classList.contains('hidden')) {
                popup.querySelector('.popup__label-company').classList.remove('hidden');
            };
            popupThanksButton.removeEventListener('click', closeThanksPopup);
    }
    function addErrorInput() {
        popupForm.querySelectorAll('input').forEach((item) => {
            if(item.matches('.popup__input') && item.value === '' && item.parentElement.classList.contains('hidden') === false) {
                item.classList.add('error');
            } else if(item.matches('.popup__input-checkbox') && item.checked === false) {
                item.classList.add('error');
            } 
        })
    }
    function validationForm() {
        let error = 0;
        popupForm.querySelectorAll('input').forEach((item) => {
            if(item.classList.contains('error')) {
                error++;
            }
        })
        return error;
    }
    function clearInputFields() {
        popupForm.querySelectorAll('input').forEach((item) => {
            if(item.matches('.popup__input')) {
                item.value = "";
                item.nextElementSibling.style.top = "";
            } else if(item.matches('.popup__input-checkbox')) {
                item.checked = '';
            }
        })
    }
        popupForm.querySelectorAll('input').forEach((item) => {
            item.addEventListener('focusout', focusOutInput);
        });

    function focusOutInput(e) {
        if(e.target.value.length > 0 && e.target.matches('input[type="email"]') === false) {
           e.target.nextElementSibling.style.top = "-10px";
           e.target.classList.remove('error');
        } else if(e.target.value.length > 0 && e.target.matches('input[type="email"]') === true) {
            if(emailText(e.target)) {console.log('aaaa')
                e.target.nextElementSibling.style.top = "-10px";
                e.target.classList.add('error');
            } else { console.log('vvvvv')
                e.target.nextElementSibling.style.top = "-10px";
                e.target.classList.remove('error');
            }
        } else {
            e.target.nextElementSibling.style.top = "";
        }
        
    }
    function emailText(email) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value)
    }
}