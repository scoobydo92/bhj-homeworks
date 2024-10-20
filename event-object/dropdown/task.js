
const dropdownValueEl = document.querySelector('.dropdown__value')

const dropdownListEl = document.querySelector('.dropdown__list')

const dropdownItemsArr = Array.from(
  document.querySelectorAll('.dropdown__item'),
)

dropdownValueEl.addEventListener('click', () => {
  dropdownListEl.classList.toggle('dropdown__list_active')
})

dropdownItemsArr.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    dropdownValueEl.textContent = e.target.textContent
    dropdownListEl.classList.remove('dropdown__list_active')
  })
})