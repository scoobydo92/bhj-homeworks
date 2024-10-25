const rotatorEls = Array.from(document.querySelectorAll('.rotator__case'))
let activeInd = 0
let maxInd = rotatorEls.length - 1

rotatorEls.forEach((rotator) => {
  rotator.style.color = rotator.dataset.color
})

function setActiveRotator() {
  setTimeout(() => {
    rotatorEls[activeInd].classList.remove('rotator__case_active')

    activeInd += 1
    if (activeInd > maxInd) {
      activeInd = 0
    }
    rotatorEls[activeInd].classList.add('rotator__case_active')
    setActiveRotator()
  }, 1000)
}

setActiveRotator()