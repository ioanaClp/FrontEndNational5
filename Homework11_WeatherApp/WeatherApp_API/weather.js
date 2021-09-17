class Weather {
    constructor() {
    }

    async getData(city) {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${city}`);
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${city}`)

        const weather = await weatherResponse.json();
        const forecast = await forecastResponse.json();

        return {
            weather,
            forecast
        }
    }
}