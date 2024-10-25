const fontSizeEls = document.querySelectorAll('.font-size')
const bookEl = document.querySelector('.book')

fontSizeEls.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault()

    fontSizeEls.forEach((item) => item.classList.remove('font-size_active'))
    evt.target.classList.add('font-size_active')

    let itemHasData = item.getAttribute('data-size')

    if (itemHasData) {
      bookEl.className = `book_fs-${itemHasData}`
    } else {
      bookEl.className = 'book'
    }
  })
})