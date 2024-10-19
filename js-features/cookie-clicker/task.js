
let clickerCounterEl = document.getElementById("clicker__counter");

const cookieImgEl = document.getElementById("cookie");
let clickerCounterSpeedEl = document.getElementById("clicker__counter_speed");

cookieImgEl.addEventListener("click", function () {
    clickerCounterEl.textContent++;
    clickerCounterSpeedEl.textContent = new Date().getMilliseconds() / 100;

    if (clickerCounterEl.textContent % 2 !== 0) {
        cookieImgEl.width = 300;
    } else {
        cookieImgEl.width = 200;
    }
});
