class UI {
    constructor() {
        this.forecastContainer = document.getElementById('forecast-container');
    }

    showWeather(weatherData) {
        document.getElementById('weather-container').style.visibility = 'visible';

        document.getElementById('description').innerHTML = weatherData.weather[0].description;
        document.getElementById('high-temp').innerHTML = parseInt(weatherData.main.temp_max) + '℃';
        document.getElementById('low-temp').innerHTML = parseInt(weatherData.main.temp_min) + '℃';
        document.getElementById('humidity').innerHTML = weatherData.main.humidity;
        document.getElementById('pressure').innerHTML = weatherData.main.pressure;
        document.getElementById('current-temp').innerHTML = parseInt(weatherData.main.temp) + '℃';
        document.getElementById('temperaturee').innerHTML = parseInt(weatherData.main.temp) + '℃';

        if (weatherData.weather[0].main === 'Clouds') {
            document.getElementById('main-description').innerHTML = 'Clouds';
            document.getElementById('icon-temp').innerHTML = '<i class="bi bi-clouds"></i>';
        } else if (weatherData.weather[0].main === 'Rain') {
            document.getElementById('main-description').innerHTML = 'Rain';
            document.getElementById('icon-temp').innerHTML = '<i class="bi bi-cloud-drizzle"></i>';
        } else if (weatherData.weather[0].main === 'Thunderstorm') {
            document.getElementById('main-description').innerHTML = 'Thunderstorm';
            document.getElementById('icon-temp').innerHTML = '<i class="bi bi-cloud-lightning-rain"></i>';
        } else if (weatherData.weather[0].main === 'Clear') {
            document.getElementById('main-description').innerHTML = 'Clear Sky';
            document.getElementById('icon-temp').innerHTML = '<i class="bi bi-sun"></i>';
        } else if (weatherData.weather[0].main === 'Sun') {
            document.getElementById('main-description').innerHTML = 'Sunny';
            document.getElementById('icon-temp').innerHTML = '<i class="bi bi-sun"></i>';
        } else if (weatherData.weather[0].main === 'Snow') {
            document.getElementById('main-description').innerHTML = 'Snow';
            document.getElementById('icon-temp').innerHTML = '<i class="bi bi-cloud-snow"></i>';
        }
    }

    showForecast(forecastData) {

        let output = `
            <h3 class="my-3 text-center">Forecast</h3>
            <div class="row">
        `;

        forecastData.list.forEach((el) => {
            let secondsFrom1970 = el.dt_txt;

            let date = new Date(secondsFrom1970);
            console.log(date);

            console.log(date.getHours());

            output += `
                <div class="col-sm d-flex flex-column align-items-center mt-3 mx-2">
                    <p>${date.toLocaleDateString('en', { weekday: 'long' })}</p>
                    <p>${date.getHours()}:00</p>
                    <h3>${parseInt(el.main.temp)}℃</h3>
                    <p class="text-warning">${el.weather[0].main}</p>
                </div>
        `
        })

        output += '</div>'

        this.forecastContainer.innerHTML = output;

    }
}