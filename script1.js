function fetchWeather() {
  var city = document.getElementById("search");
  console.log(city.value);
  fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=55abcd02053e4c45804112932231402&q=" +
      city.value +
      "&aqi=no&days=7"
  )
    .then((response) => response.json())
    .then((data) => {   
        console.log(data);
      document.getElementById("name").innerHTML = data.location.name;
      document.getElementById("tz_id").innerHTML = data.location.tz_id;
      const icon1 = data.current.condition.icon;
      document.querySelector(".icon1").src = "https:" + icon1;
      document.getElementById("text").innerHTML = data.current.condition.text;
      document.getElementById("temp").innerHTML = " " +
        data.current.temp_c + "°C /" + data.current.temp_f + "°F";
      document.getElementById("humidity").innerHTML = "Humidity " + data.current.humidity + "%";
      document.getElementById("wind").innerHTML =" wind " +
        data.current.wind_kph + "km/h";
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" +
        data.location.name +
        "')";
        document.getElementById("day1").innerHTML = data.forecast.forecastday[1].date;
        const icon2 = data.forecast.forecastday[1].day.condition.icon;
      document.querySelector(".icon2").src = "https:" + icon2;
        document.getElementById("day1tempc").innerHTML = data.forecast.forecastday[1].day.avgtemp_c +"°C";
        document.getElementById("day1tempf").innerHTML = data.forecast.forecastday[1].day.avgtemp_f + "°F";

        document.getElementById("day2").innerHTML = data.forecast.forecastday[2].date;
        const icon3 = data.forecast.forecastday[2].day.condition.icon;
      document.querySelector(".icon3").src = "https:" + icon3;
        document.getElementById("day2tempc").innerHTML = data.forecast.forecastday[2].day.avgtemp_c +"°C";
        document.getElementById("day2tempf").innerHTML = data.forecast.forecastday[2].day.avgtemp_f+ "°F";

        document.getElementById("day3").innerHTML = data.forecast.forecastday[3].date;
        const icon4 = data.forecast.forecastday[3].day.condition.icon;
      document.querySelector(".icon4").src = "https:" + icon4;
        document.getElementById("day3tempc").innerHTML = data.forecast.forecastday[3].day.avgtemp_c +"°C";
        document.getElementById("day3tempf").innerHTML = data.forecast.forecastday[3].day.avgtemp_f+ "°F";

        document.getElementById("day4").innerHTML = data.forecast.forecastday[4].date;
        const icon5 = data.forecast.forecastday[4].day.condition.icon;
      document.querySelector(".icon5").src = "https:" + icon5;
        document.getElementById("day4tempc").innerHTML = data.forecast.forecastday[4].day.avgtemp_c +"°C";
        document.getElementById("day4tempf").innerHTML = data.forecast.forecastday[4].day.avgtemp_f+ "°F";

        document.getElementById("day5").innerHTML = data.forecast.forecastday[5].date;
        const icon6 = data.forecast.forecastday[5].day.condition.icon;
      document.querySelector(".icon6").src = "https:" + icon6;
        document.getElementById("day5tempc").innerHTML = data.forecast.forecastday[5].day.avgtemp_c +"°C";
        document.getElementById("day5tempf").innerHTML = data.forecast.forecastday[5].day.avgtemp_f+ "°F";

        document.getElementById("day6").innerHTML = data.forecast.forecastday[6].date;
        const icon7 = data.forecast.forecastday[6].day.condition.icon;
      document.querySelector(".icon7").src = "https:" + icon7;
        document.getElementById("day6tempc").innerHTML = data.forecast.forecastday[6].day.avgtemp_c +"°C";
        document.getElementById("day6tempf").innerHTML = data.forecast.forecastday[6].day.avgtemp_f+ "°F";
        
    }).catch((error) => alert("Invalid Location"));
}
document.querySelector(".search button")
  .addEventListener("click", function () {
     fetchWeather();
   });
   document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
      fetchWeather();
    }
   });
  