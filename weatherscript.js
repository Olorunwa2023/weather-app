const apiKey = "3323057f5134abe9b7f9f16a9940bb9e";


const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchBtn.addEventListener("click", getWeather);



localStorage.setItem("city", cityName);



async function getWeather() {

    const cityName = cityInput.value;

    if(cityName === ""){
        alert("Please enter a city name");
        return;
    }


    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod !== 200){
            alert("City not found");
            return;
        }

        city.textContent =
            `${data.name}, ${data.sys.country}`;

        temperature.textContent =
            `Temperature: ${data.main.temp} °C`;

        description.textContent =
            `Condition: ${data.weather[0].description}`;

        humidity.textContent =
            `Humidity: ${data.main.humidity}%`;

        wind.textContent =
            `Wind Speed: ${data.wind.speed} m/s`;
        weatherIcon.src =
                    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
    catch(error){

        alert("Error fetching weather data");

        console.log(error);
    }
    weatherIcon.src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}











cityInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        getWeather();
    }

});

window.onload = function(){

    const savedCity =
    localStorage.getItem("city");

    if(savedCity){

        cityInput.value = savedCity;
        getWeather();
    }
}

const weatherIcon =
document.getElementById("weatherIcon");

const forecastContainer =
document.getElementById("forecastContainer");





































