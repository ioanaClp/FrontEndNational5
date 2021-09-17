// Init Weather
const weather = new Weather;

// Init UI
const ui = new UI;

// Search input
const searchLocation = document.getElementById('location-input');

// Search input event listener
searchLocation.addEventListener('keyup', (e) => {
    // Get input text
    const locationText = e.target.value;
    console.log(locationText);

    document.getElementById('location').innerHTML = locationText + ' <i class="bi bi-geo-alt" style="font-size: 2rem"></i>';

    if (locationText !== '') {
        // Make http call
        weather.getData(locationText)
            .then(function (data) {
                console.log(data)

                if (data.weather.cod !== '404') {
                    ui.showWeather(data.weather);
                    ui.showForecast(data.forecast);
                }

            })
    }
});