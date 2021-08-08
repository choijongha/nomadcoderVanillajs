const dDay = document.querySelector(".d_day_result");
const dDayInput = document.querySelector(".d_day_input");
const dDayForm = document.querySelector(".d_day_form");
const changeTime = document.querySelector(".change_time");

function inputDDay(event) {
    event.preventDefault()
    const selectDDay = dDayInput.value
    localStorage.setItem("DDAY",new Date(`${selectDDay}`))
    dDayForm.classList.add(HIDDEN)
    dDay.classList.remove(HIDDEN)
    changeTime.classList.remove(HIDDEN)
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
    dDay.innerText = `${localStorage.getItem("DDAY")}
    까지
    ${day}일 ${HOURS}시간 ${MINUTES}분 ${SECONDS}초 남음`
};
function removeTime() {
    localStorage.removeItem("DDAY");
    dDayForm.classList.remove(HIDDEN);
    dDay.classList.add(HIDDEN);
    changeTime.classList.add(HIDDEN);
}

function init() {
  setInterval(getDDay, 1000);
}
init()

if(localStorage.getItem("DDAY")) {
    dDayForm.classList.add(HIDDEN)
    dDay.classList.remove(HIDDEN)
}else{
    dDayForm.classList.remove(HIDDEN)
    dDay.classList.add(HIDDEN)
    dDayForm.addEventListener("submit",inputDDay)
    changeTime.classList.remove(HIDDEN);
}
changeTime.addEventListener("click", removeTime);