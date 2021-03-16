'use strict'

const fonts = document.querySelectorAll('.constructor__choise *'),
    text = document.querySelector('.constructor__text'),
    sizes = document.querySelectorAll('.constructor__size *'),
    colors = document.querySelectorAll('.constructor__select *'),
    select = document.querySelector('.constructor__select'),
    input = document.querySelector('.constructor__input'),
    images = document.querySelectorAll('.constructor__images *'),
    bg = document.querySelector('.constructor__bg')


fonts.forEach(font => {
    font.addEventListener('click', () => {
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
        if (size.innerHTML == 'Мелкий') {
            text.style.fontSize = '28px';
        } else if (size.innerHTML == 'Средний') {
            text.style.fontSize = '36px';
        } else if (size.innerHTML == 'Большой') {
            text.style.fontSize = '46px';
        }
    });
});


select.addEventListener('click', () => {
    console.log(colors[select.options.selectedIndex].value);
    text.style.color = colors[select.options.selectedIndex].value;
    text.style.textShadow = `0 0 30px ${colors[select.options.selectedIndex].value}`;
});

input.addEventListener('keyup', () => {
    text.innerText = input.value
})