/* Implementing Timers in JavaScript */
/* Task 2 */

let starttime = prompt("Enter time in minutes");
let time = starttime * 60;
let timer = document.getElementById("countdown");

setInterval(countDown, 1000);

function countDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdown.innerHTML = '${minutes}: ${seconds}';
    time--;
}
