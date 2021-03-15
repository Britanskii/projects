'use strict';

let offset = 0,
    index = 0,
    performance__items = document.querySelectorAll('.performance__item')

const wrapper = document.querySelector('.slider__wrapper'),
    slider__items = document.querySelectorAll('.slider__item'),
    width = window.getComputedStyle(document.querySelector('.slider')).width

wrapper.style.width = 100 * slider__items.length + '%'

wrapper.addEventListener('click', () => {
    if (index != slider__items.length - 1) {
        index++
        offset += +width.substr(0, width.length - 2)
    } else {
        index = 0
        offset = 0
    }
    wrapper.style.transform = `translateX(-${offset}px)`
})


setImage(slider__items, 'slider')
setImage(performance__items, 'performance')



