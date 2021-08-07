const time = document.querySelector(".clock_time");
const timeSecond = document.querySelector(".clock_time_second");
const clockDate = document.querySelector(".date");

function getClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const HOURS = hours < 10 ? `0${hours}` : hours;
    const MINUTES = minutes < 10 ? `0${minutes}` : minutes;
    const SECONDS = seconds   < 10 ? `0${seconds  }` : seconds ;
    time.innerText = `${HOURS}시 ${MINUTES}분`;
    timeSecond.innerText = `${SECONDS}`;
};
function getDate() {
    const sevenDay = ["일","월", "화", "수", "목", "금", "토"]
    const date = new Date();
    const YEARS = date.getFullYear()
    const MONTH = date.getMonth()
    const DATE = date.getDate()
    const DAY = sevenDay[date.getDay()]
    clockDate.innerText = `${YEARS}. ${MONTH+1}. ${DATE} ${DAY} `
    console.dir(DAY)
}
getDate(); 
getClock();
setInterval(getClock, 1000);