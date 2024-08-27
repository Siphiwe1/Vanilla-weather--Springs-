function refreshWeather(response){
   let temperatureElement= document.querySelector("#temperature");
   let temperature= response.data.temperature.current;
   let cityElement= document.querySelector("#city");
   let descriptionElement= document.querySelector("#description");
   let humidityElement= document.querySelector("#humidity");
   let windSpeedElement- document.querySelector("#wind-speed");
   let timeElement=document.querySelector("#time");
   let date= newDate(response.data.time*1000);
   let iconElement= document.querySelector("#icon");
   
   cityElement.innerHTML=response.data.city;
   timeElement.innerHTML=formatDate(date);
   descriptionElement.innerHTML= response.data.condition.description;
   humidityElement.innerHTML=`${response.data.temperature.humidity}%`
   windSpeedElement.innerHTML= `${response.data.wind-windSpeed}KM/hr`
   temperatureElement.innerHTML= math.round(temperature);
   iconElement.innerHTML= `img src="${response.data.condition.icon-url}"`;
}

function FormatDate(date){

let minutes= date.getMinutes();
let hours= date.getHours();
let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day= days[date,getDay()];
if (minutes<10){
    minutes=`0${minutes}`;
}
return`${day} ${hours} ${Minutes}`;
}