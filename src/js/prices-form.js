if(document.querySelector('.price')) {
    const form = document.querySelector('.price__form');
    const formButtonsWrapper = document.querySelector('.is-form-buttons-wrapper');
    const formRadioButtonsWrapper = document.querySelector('.is-form-radiobuttons-wrapper');
    const formCheckboxWrapper = document.querySelector('.is-form-checkbox-wrapper')
    const formRange = document.querySelector('.is-form-range');
    const itemTeam = document.querySelector('.item-team');
    const itemServices = document.querySelector('.item-services');
    const itemProducts = document.querySelector('.item-products');
    const itemRange = document.querySelector('.item-range');
    const rangeTop = document.querySelector('.is-form-range');
    const rangeNumTop = document.querySelector('.range-num-drop');
                        

    formButtonsWrapper.addEventListener('click', clickButton);
    formButtonsWrapper.addEventListener('focusout', focusOut);
    formRadioButtonsWrapper.addEventListener('click', clickRadioButton);
    formCheckboxWrapper.addEventListener('change', clickCheckBox);
    formRange.addEventListener('input', changeRange)
    window.addEventListener('DOMContentLoaded', rangeInit)

                                   // clickButton
    function clickButton(e) {
        if(formButtonsWrapper) {
            let target = e.target;
            e.preventDefault();
       if(target.className == 'plus') {
            let newElemText = target.closest('.price__form-item').querySelector('span').textContent;
            let newElemAttr = target.closest('.price__form-item').querySelector('input').id;
                                  // button plus
        target.previousElementSibling.value++;
        let newElemSpanValue = target.previousElementSibling.value
        // let newElemSpanValue = target.closest('.price__form-item').querySelector('input').value;
        if(!document.querySelector(`.is-price__item-text[data=${newElemAttr}] `)) {
          itemTeam.prepend(newElem(newElemSpanValue, newElemText, newElemAttr));
        } else {
           document.querySelector(`.is-price__item-text[data=${newElemAttr}] `).querySelector('span').textContent = newElemSpanValue;
        }
        if(target.previousElementSibling.value != 50) { 
            target.closest('.price__form-item').querySelector('.minus').classList.remove('disabled');
            // let newElemSpanValue = target.closest('.price__form-item').querySelector('input').value;
                                // create new elem
            // if(!document.querySelector(`.is-price__item-text[data=${newElemAttr}] `)) {
            //   itemTeam.prepend(newElem(newElemSpanValue, newElemText, newElemAttr));
            // } else {
            //    document.querySelector(`.is-price__item-text[data=${newElemAttr}] `).querySelector('span').textContent = newElemSpanValue;
            // }
         } else {
           target.classList.add('disabled');
         }
                                 // button minus
       } else if (target.className == 'minus') {
            let newElemAttr = target.closest('.price__form-item').querySelector('input').id;
        target.nextElementSibling.value--
        if(target.nextElementSibling.value != 0) {
            let newElemSpanValue = target.closest('.price__form-item').querySelector('input').value;
            target.closest('.price__form-item').querySelector('.plus').classList.remove('disabled');
            document.querySelector(`.is-price__item-text[data=${newElemAttr}] `).querySelector('span').textContent = newElemSpanValue;
         } else {
           target.classList.add('disabled')
                                  // delete newElem
           document.querySelector(`.is-price__item-text[data=${newElemAttr}] `).remove();
         }                        //
       } 
        }
     }

     function focusOut(e) {
         let target = e.target;
         let newElemText = target.closest('.price__form-item').querySelector('span').textContent;
         let newElemAttr = target.closest('.price__form-item').querySelector('input').id;
         function newElemFocusOut() {
                                       // create new elem
            let newElemSpanValue = target.value;
            if(!document.querySelector(`.is-price__item-text[data=${newElemAttr}] `)) {
              itemTeam.prepend(newElem(newElemSpanValue, newElemText, newElemAttr));
                                      //
            } else {
               document.querySelector(`.is-price__item-text[data=${newElemAttr}] `).querySelector('span').textContent =   newElemSpanValue;
              //  target.closest('.price__form-item').querySelector('span').style.top = '50%';
            }
         }
        if(target.className == 'price__form-input_button') {
            if(target.className == 'price__form-input_button' && target.value == 0 || target.className ==       'price__form-input_button' && target.value == ""){
                target.value = 0;
                target.closest('.price__form-item').querySelector('.minus').classList.add('disabled');
                target.closest('.price__form-item').querySelector('span').style.top = '';
                                  // remove new elem
                if(document.querySelector(`.is-price__item-text[data=${newElemAttr}] `)) {
                  document.querySelector(`.is-price__item-text[data=${newElemAttr}] `).remove();
                }
                                  //
            } else if(target.className == "price__form-input_button" && target.value >= 50){
              target.value = 50;
              target.closest('.price__form-item').querySelector('.plus').classList.add('disabled')
              target.closest('.price__form-item').querySelector('.minus').classList.remove('disabled')
              target.closest('.price__form-item').querySelector('span').style.top = 0;
                                  // paste new elem
              newElemFocusOut()
            }
                                  //
             else if(target.className == "price__form-input_button" && target.value < 50 || target.className ==     "price__form-input_button" && target.value > 0) { 
                target.closest('.price__form-item').querySelector('.minus').classList.remove('disabled');
                target.closest('.price__form-item').querySelector('.plus').classList.remove('disabled');
                target.closest('.price__form-item').querySelector('span').style.top = 0;
                                    // paste new elem
              newElemFocusOut();
                                    //
            }
        }
      }

    function newElem (number,text,attr) {  // create element
                let div = document.createElement('div');
                    div.className = 'is-price__item-text';
                    div.textContent = text;
                    div.setAttribute('data', attr);
                let span = document.createElement('span');
                    span.className = 'is-team-number';
                    span.textContent = number;
                let img = document.createElement('img');
                    img.className = 'is-deleteElement';
                    img.setAttribute('src','../img/price/cross.png');
                    img.style.display = 'inline-block';
                    img.style.marginLeft = "10px";
                    img.style.cursor = 'pointer';
                    let findElemId;
                    img.addEventListener('click', () => { //remove element
                      if(img.closest('.item-team')) {
                        findElemId = img.closest('div').getAttribute('data')
                        document.querySelector('#' + `${findElemId}`).value = 0
                          img.closest('div').remove();
                      } else if(img.closest('.item-products')) {
                        findElemId = img.closest('div').getAttribute('data')
                        document.querySelector('#' + `${findElemId}`).checked = false;
                        img.closest('div').remove();
                      } else if(img.closest('.item-range')) {
                        findElemId = img.closest('div').getAttribute('data')
                        document.querySelector('#' + `${findElemId}`).value = 0;
                        img.closest('div').remove();
                      } else if(img.closest('.item-range')) {
                        findElemId = img.closest('div').getAttribute('data')
                        document.querySelector('#' + `${findElemId}`).value = 0;
                        img.closest('div').remove();
                      }
                    })
                div.prepend(span);
                div.append(img);
                return div;
            }     
            // end clickButton

            // start radioButton
    function clickRadioButton(e) {
                   let target = e.target;
                   let newElemText;
                   let newElemAttr;
                   if(target.className == 'label-service') {
                      newElemText = target.textContent;
                      newElemAttr = target.getAttribute('for')
                   } else if(target.className == 'price__form-input'){
                       newElemText = target.closest('.label-service').textContent;
                       newElemAttr = target.id;
                   }
                   if(!document.querySelector('.item-services .is-price__item-text')) {
                    itemServices.prepend(newElem('', newElemText, newElemAttr));
                  }
                   else {
                       document.querySelector('.item-services .is-price__item-text').remove();
                       itemServices.prepend(newElem('', newElemText, newElemAttr));
                  }
    }
                   // end radioButton

                   // start checkbox
    function clickCheckBox(e) {
                  let target = e.target;
                  let newElemText;
                  let newElemAttr;
                  if(target.checked) {
                    newElemText = target.parentElement.textContent;
                    newElemAttr = target.getAttribute('id');
                    if(!document.querySelector(`.is-price__item-text[data=${newElemAttr}]`)) {
                          itemProducts.prepend(newElem('', newElemText, newElemAttr));
                         }
                  } else {
                    newElemAttr = target.getAttribute('id');
                    document.querySelector(`.is-price__item-text[data=${newElemAttr}]`).remove();
                  }
    }               
                    // end checkbox

                    // start range
    function changeRange(e) {
                  let target = e.target;
                  let newElemAttr = target.getAttribute('id');
                  let newElemValue = target.value;
                  let span = document.createElement('span');
                      span.className = "is-range-number";
                                                // check year and mounths
                    if(!document.querySelector(`.is-price__item-text[data=${newElemAttr}]`)) {
                      itemRange.prepend(newElem(' ', ' Длительность ', newElemAttr));
                      document.querySelector(`.is-price__item-text[data=${newElemAttr}] img`).before(span);
                      document.querySelector(`.is-price__item-text[data=${newElemAttr}] .is-range-number`).textContent = `${Number(newElemValue)}` + ' ' +  'месяц';
                      } else if(Number(newElemValue) == 1) {
                        document.querySelector(`.is-price__item-text[data=${newElemAttr}] .is-range-number`).textContent = `${Number(newElemValue)}` + ' ' +  'месяц';
                      } else if(Number(newElemValue) > 1 && Number(newElemValue) <= 5) {
                        document.querySelector(`.is-price__item-text[data=${newElemAttr}] .is-range-number`).textContent = `${Number(newElemValue)}` + ' ' +  'месяца';
                        } else if(Number(newElemValue) > 5 && Number(newElemValue) < 12) {
                        document.querySelector(`.is-price__item-text[data=${newElemAttr}] .is-range-number`).textContent = `${Number(newElemValue)}` + ' ' +  'месяцев';
                        } else if(+newElemValue == 12 || +newElemValue > 12) {
                          if(+newElemValue % 12) {
                            if(+newElemValue < 24) { // no more 2 year
                              let year = (+newElemValue / 12 );
                            let months = (+newElemValue % 12 );
                            document.querySelector(`.is-price__item-text[data=${newElemAttr}] .is-range-number`).textContent = Math.trunc(year) + "," + months + ' ' +  'года';
                            }
                          } else {
                            let year = +newElemValue / 12;
                            if(year == 1) {
                              document.querySelector(`.is-price__item-text[data=${newElemAttr}] .is-range-number`).textContent = year + ' ' +  'год';
                            } else if(year == 2) {
                              document.querySelector(`.is-price__item-text[data=${newElemAttr}] .is-range-number`).textContent = year + ' ' +  'года';
                            } else if(year > 2) {
                              document.querySelector(`.is-price__item-text[data=${newElemAttr}] .is-range-number`).textContent = 2 + ' ' +  'года';
                            }
                          }
                        } else {
                          document.querySelector('.item-range .is-price__item-text').remove();
                        }
                        // start range get position x
                        let valTop = rangeTop.value;
                        const min = rangeTop.min ? rangeTop.min : 0;
                        const max = rangeTop.max ? rangeTop.max : 100;
                        const newVal = Number(((valTop - min) * 100) / (max - 1.2 - min));
                        rangeNumTop.innerHTML = valTop;
                        if(rangeTop.value > 24) {
                          rangeNumTop.innerHTML = +valTop - 1;
                         } else {
                          rangeNumTop.innerHTML = valTop;
                         }
                        rangeNumTop.style.left = `calc(${newVal - 2.5}% + (${4 - newVal * 0.4}px))`;
                      }

                      // start range init
    function rangeInit() {
      const valTop = rangeTop.value;
      const min = rangeTop.min ? rangeTop.min : 0;
      const max = rangeTop.max ? rangeTop.max : 100;
      rangeNumTop.innerHTML = valTop;
      const newVal = Number(((valTop - min) * 100) / (max - 1.2 - min));
      rangeNumTop.style.left = `calc(${newVal - 2.5}% + (${4 - newVal * 0.4}px))`;
    }

                    // end range init
                    
}     