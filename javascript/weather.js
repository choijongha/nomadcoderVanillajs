const API_KEY = "074a341bd2e2cb66730184a1f6a065d7";

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    console.dir(position)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
         const weather = document.querySelector("#weather span:nth-child(2)")
         const city = document.querySelector("#weather div:last-child")
         const temp = document.querySelector("#weather span:first-child")
         city.innerText = `@${data.name}`
         weather.innerText = data.weather[0].main
         temp.innerText = `${data.main.temp}도`
    })
}

function onGeoError() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);