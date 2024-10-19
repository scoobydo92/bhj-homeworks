let getHole = (index) => document.getElementById(`hole${index}`)
let deadEl = document.getElementById('dead')
let lostEl = document.getElementById('lost')
let holesEl = document.querySelectorAll('.hole')

holesEl.forEach((hole) => {
  hole.onclick = function () {
    if (hole.classList.contains('hole_has-mole')) {
      deadEl.textContent++
    } else {
      lostEl.textContent++
    }
    if (deadEl.textContent == 10) {
      deadEl.textContent = 0
      lostEl.textContent = 0
      console.log('Win!')
    }
    if (lostEl.textContent == 5) {
      lostEl.textContent = 0
      deadEl.textContent = 0
      console.log('Loose!')
    }
  }
})