const button = document.querySelector(".change_button");
const clock = document.querySelector(".clock");
const dDayAll = document.querySelector(".d_day");

function dDayView() {
    clock.classList.add(HIDDEN)
    dDayAll.classList.remove(HIDDEN)
}
function clockView() {
    dDayAll.classList.add(HIDDEN)
    clock.classList.remove(HIDDEN)
}
if(clock.classList.contains(HIDDEN)) {
    button.addEventListener("click", clockView)
}else {
    button.addEventListener("click", dDayView)
};