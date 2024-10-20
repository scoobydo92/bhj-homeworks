const tabEls = Array.from(document.querySelectorAll('.tab'))

const tabContentEls = document.querySelectorAll('.tab__content')

tabEls.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    tab = e.target
    let activeInd = tabEls.indexOf(tab)

    tabEls.forEach((tab) => {
      tab.classList.remove('tab_active')
    })
    tab.classList.add('tab_active')

    tabContentEls.forEach((content, i) => {
      i = activeInd
      content = tabContentEls[i]
      tabContentEls.forEach((content) => {
        content.classList.remove('tab__content_active')
      })
      content.classList.add('tab__content_active')
    })
  })
})