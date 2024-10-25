const revealEls = Array.from(document.querySelectorAll('.reveal'))

let isInViewport = function (el) {
  const windowHeight = window.innerHeight

  const coords = el.getBoundingClientRect()

  let topVisible = coords.top > 0 && coords.top < windowHeight
  const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0

  return topVisible || bottomVisible
}

function showInVeiwport() {
  for (let reveal of revealEls) {
    if (isInViewport(reveal)) {
      reveal.classList.add('reveal_active')
    }
  }
}

showInVeiwport()
document.onscroll = showInVeiwport