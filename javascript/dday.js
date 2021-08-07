const dDay = document.querySelector(".d_day_result");
const dDayInput = document.querySelector(".d_day_input");
const dDayForm = document.querySelector(".d_day");

function inputDDay(event) {
    event.preventDefault();
    const selectDDay = dDayInput.value;
    localStorage.setItem("DDAY",new Date(`${selectDDay}`));
    getDDay();
};

function getDDay() {
    const now = new Date()
    const setDate = new Date(localStorage.getItem("DDAY"))
    const distance = setDate.getTime() - now.getTime()
    const day = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    const HOURS = hours < 10 ? `0${hours}` : hours
    const MINUTES = minutes < 10 ? `0${minutes}` : minutes
    const SECONDS = seconds < 10 ? `0${seconds}` : seconds
    dDay.innerText = `${localStorage.getItem("DDAY")}까지
    ${day}d ${HOURS}h ${MINUTES}m ${SECONDS}s`;
}

function init() {
  setInterval(getDDay, 1000);
}
init()
dDayForm.addEventListener("submit",inputDDay);