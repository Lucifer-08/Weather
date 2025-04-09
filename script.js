const search = document.getElementById("Searchbutton")
const city = document.getElementById("input")
const city_name = document.getElementById("city-name")
const city_time = document.getElementById("city-time")
const city_temp = document.getElementById("city-temp")
const city_humidity = document.getElementById("city-humidity")
const city_weather = document.getElementById("city-weather")
const city_wind = document.getElementById("city-wind")

async function getData(cityname) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=097715aaa06341b3b8692159251503&q=${cityname}&aqi=yes`
    )
    return await promise.json()
}

search.addEventListener("click", async function () {
    const value = city.value
    const result = await getData(value)
    city_name.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    city_time.innerText = `${result.location.localtime}`
    city_temp.innerText = `${result.current.temp_c}`
    city_humidity.innerText = `${result.current.humidity}`
    city_wind.innerText = `${result.current.wind_mph}`
    city_weather.innerText = `${result.current.condition.text}`
})
