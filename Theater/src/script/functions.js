function setImage(arr, string) {
    arr.forEach((item, index) => {
        item.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 100%), url('res/img/${string}/${index + 1}.jpg')`
    })
}

burger.addEventListener('click', () => {
    burger.classList.toggle("header__burger_active")
    if (!burger.classList.contains('header__burger_active')) {
        menu.style.left = "-100%"
    } else {
        menu.style.left = "0"
    }

})
