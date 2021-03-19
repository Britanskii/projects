'use strict'

const fonts = document.querySelectorAll('.constructor__cyrillic *, .constructor__latin *'),
    text = document.querySelector('.constructor__text'),
    sizes = document.querySelectorAll('.constructor__size *'),
    colors = document.querySelectorAll('.constructor__select *'),
    select = document.querySelector('.constructor__select'),
    input = document.querySelector('.constructor__input'),
    images = document.querySelectorAll('.constructor__images *'),
    bg = document.querySelector('.constructor__bg'),
    lang = document.querySelector('.constructor__fontSelect'),
    cyrillic = document.querySelector('.constructor__cyrillic'),
    latin = document.querySelector('.constructor__latin')



fonts.forEach(font => {
    font.addEventListener('change', () => {
        text.style.fontFamily = font.innerHTML;
    });
});

images.forEach(img => {
    img.addEventListener('click', () => {
        bg.style.backgroundImage = `url(${img.src})`
    })
})

sizes.forEach(size => {
    size.addEventListener('click', () => {
        if (size.classList.value.includes('small')) {
            text.style.fontSize = '28px';
        } else if (size.classList.value.includes('medium')) {
            text.style.fontSize = '36px';
        } else if (size.classList.value.includes('big')) {
            text.style.fontSize = '46px';
        }
    });
});

lang.addEventListener('click', () => {
    if (!lang.options.selectedIndex) {
        latin.style.display = 'none'
        cyrillic.style.display = 'flex'
    } else {
        cyrillic.style.display = 'none'
        latin.style.display = 'flex'
    }
});

select.addEventListener('click', () => {
    text.style.textShadow = `0 0 30px ${colors[select.options.selectedIndex].value}, 0 0 30px ${colors[select.options.selectedIndex].value}`;
});

input.addEventListener('keyup', () => {
    text.innerText = input.value
})