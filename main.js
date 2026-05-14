const API_KEY = 'e3ec7ddff7f6cd4fdc4dcc27540b4db0'

const cityInput = document.getElementById('cityInput')
const searchBtn = document.getElementById('searchBtn')

const cityName = document.getElementById('cityName')
const weatherDesc = document.getElementById('weatherDesc')
const countryFlag = document.getElementById('countryFlag')

const temperature = document.getElementById('temperature')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')

const weatherContenntBox = document.querySelector('.weather-content')

const loader = document.getElementById('loader')

async function fetchWeather(city) {
    if (!city) return

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )

        const data = await response.json()

        if (data.cod !== 200) {
            alert('Денчік такого не знає')
            
            return
        }

        weatherContenntBox.style.display = 'block'

        cityName.textContent = data.name

        countryFlag.src =
            `https://flagsapi.com/${data.sys.country}/flat/64.png`

        temperature.textContent =
            `${Math.round(data.main.temp)}°C`

        humidity.textContent =
            `${data.main.humidity}%`

        wind.textContent =
            `${Math.round(data.wind.speed)} km/h`
    }

    catch (error) {
        console.error(error)
    }
}

searchBtn.addEventListener('click', () => {
    fetchWeather(cityInput.value)
})

cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetchWeather(cityInput.value)
    }
})