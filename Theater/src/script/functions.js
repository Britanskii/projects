function setImage(arr, string) {
    arr.forEach((item, index) => {
        item.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 100%), url('res/img/${string}/${index + 1}.jpg')`
    })
}