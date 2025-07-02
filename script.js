
const cityElement= document.querySelector('.city')
const temprature= document.querySelector('.temp')
const windSpeed= document.querySelector('.windSpeed')
const humidity= document.querySelector('.humidity')
const visibility= document.querySelector('.visibilityDistance')
const description= document.querySelector('.description')
const date= document.querySelector('.date');
const descriptionIcon= document.querySelector('.description i')
const searchBtn= document.querySelector('.searchBtn')
const apiKey='fb736152bea917f93473a92fb66448d1';



 async function fetchWeatherData(city){
try{
    // returns a promise so store it in veriable to use
   
    const response=  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

        if(!response.ok){

            throw new Error('unable to fetch  weatherdata')
        }
    //convert into jasson formate
    const data= await response.json();
    console.log(data);
    // console.log(data.main.temp);
    // console.log(data.name)

    updateWeatherUi(data);
    }

    catch(error){
        console.log('error')
    }
}


// fetchWeatherData();

function updateWeatherUi(data){
    cityElement.textContent= data.name;
    temprature.textContent= `${Math.round(data.main.temp)} °`;
    windSpeed.textContent= `${Math.round(data.wind.speed)} Km/H`;

    humidity.textContent= `${Math.round(data.main.humidity)} %`;
    visibility.textContent= `${Math.round(data.visibility/1000)} Km/H`;

    description.textContent= data.weather[0].description;

    const currentDate= new Date();
    date.textContent= currentDate.toDateString();
    const weatherIconName = getWeatherIconName(data.weather[0].main);
    descriptionIcon.innerHTML= `<i class="material-icons">${weatherIconName}</i>`;

}

const formElement= document.querySelector('.searchForm');
const inputElement= document.querySelector('.cityInput');

formElement.addEventListener('submit',function(e){

    e.preventDefault();
    const city= inputElement.value
    if(city !== ''){
        fetchWeatherData(city);
        inputElement.value= ''
    }

});

function getWeatherIcon(weatherConditio){
const iconMap={

    clear:" wb_sunny",
    clouds: "wb_cloudy",
    Rain: "umbrella",
    Thuderstorm: "flesh_on",
    Drizzle: "grain",
    Snow: "ac_unit",
    MIst: "clouds",
    Smoke: "cloud",
    Haze: "cloud",
    Fog:"cloud"
};
return iconMap[weatherConditio] ||help

}
