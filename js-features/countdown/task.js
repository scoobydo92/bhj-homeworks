let timerEl = document.getElementById('timer')
let statusEl = document.getElementById('status')
window.onload = function (number) {
  number = timerEl.textContent

  const countDown = () => {
    if (timerEl.textContent <= 0) {
      alert('Вы победили в конкурсе!')
      clearInterval(timerId)
    } else {
      timerEl.textContent--
    }
  }
  const timerId = setInterval(countDown, 1000)
}