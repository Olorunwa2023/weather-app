async function getForecast(cityName){

    const forecastUrl =
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

    try{

        const response =
        await fetch(forecastUrl);

        const data =
        await response.json();

        forecastContainer.innerHTML = "";

        const dailyForecast =
        data.list.filter(item =>
        item.dt_txt.includes("12:00:00"));

        dailyForecast.forEach(day => {

            const date =
            new Date(day.dt_txt);

            const card =
            document.createElement("div");

            card.classList.add("forecast-card");

            card.innerHTML = `

                <h4>
                ${date.toLocaleDateString()}
                </h4>

                <img src=
                "https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">

                <p>
                ${day.main.temp}°C
                </p>

                <p>
                ${day.weather[0].description}
                </p>

            `;

            forecastContainer.appendChild(card);

        });

    }
    catch(error){

        console.log(error);

    }

}


getForecast(cityName);
