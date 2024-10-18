// let weather = {
//     apiKey: "b3e167df1e364b518b561338231302",
//     fetchWeather: function (city) {
//       fetch(
//        var city=document.getElementById{search}.value,
//     "http://api.weatherapi.com/v1/current.json?key=b3e167df1e364b518b561338231302&q=" + city + "&aqi=no"
//       ),
//         .then((response) => response.json())
//         .then((data) => this.displayWeather(data));
//     },
//     displayWeather: function(data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity} = data.main;
//     const { speed } = data.wind;
//     // console.log(name, icon, description, temp,  humidity, speed);
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon")
//     .src="https://openweathermap.org/img/wn/" + icon + ".png";
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".temp").innerHTML = temp + "°C";
//     document.querySelector(".humidity").innerHTML = "Humidity " + humidity + "%";
//     document.querySelector(".wind").innerHTML = "wind speed " + speed + "km/h";
//     document.querySelector(".weather").classList.remove("loading");
//     document.body.style.backgroundImage =
//         "url('https://source.unsplash.com/1600x900/?" + name + "')";
//     },
//     search: function() {
//       this.fetchWeather(document.querySelector(".search-bar").value);
//     }
//   }; 
//   document.querySelector(".search button")
//   .addEventListener("click", function () {
//      weather.search();
  
//    });
   
//    document.querySelector(".search-bar").addEventListener("keyup", function(event){
//     if(event.key=="Enter"){
//       weather.search();
//     }
//    });
//    weather.fetchWeather("Coimbatore");
  
// let weather={
//     apiKey:"b3e167df1e364b518b561338231302",
//     fetchWeather(){
//         var city = document.getElementById{search}.value;
//         fetch(
//            `http://api.weatherapi.com/v1/current.json?key=b3e167df1e364b518b561338231302&q=${city}`+ "&aqi=no"
//         ).then (ans => ans.json().
//         then (output => console.log(output))
//     }
// }

// // var apikey="b3e167df1e364b518b561338231302";
// function fetchWeather(){
//     var city= document.getElementById("search").value;
//     fetch(`https://api.weatherapi.com/v1/current.json?key=55abcd02053e4c45804112932231402&q=${city}`).then((response) => response.json())
//            .then(data) => 
// {
//         document.getElementById("name").innerHTML = "Weather in " +  data.location.name;
//         document.querySelector("icon")
//         .src="https://openweathermap.org/img/wn/" + data.condition + ".png";
//         document.getElementById("text").innerHTML = data.condition;
//         document.getElementById("temp").innerHTML = data.current + "°C";
//         document.getElementById("humidity").innerHTML = "Humidity " + data.current+ "%";
//         document.getElementById("wind").innerHTML = "wind speed " + data.current + "km/h";
//        // document.("weather").classList.remove("loading");
//         document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + city + "')";
// }
// search:function search() {
//           this.fetchWeather(document.querySelector(".search-bar").value);
//         }
//     }; 
//       document.querySelector(".search button")
//       .addEventListener("click", function () {
//          search();
//          displayWeather();
//        });
       
//        document.querySelector(".search-bar").addEventListener("keyup", function(event){
//         if(event.key=="Enter"){
//           search();
//         }
//        });
    
function fetchWeather(){
        var city= document.getElementById("search").value;
        console.log(city);
        fetch("https://api.weatherapi.com/v1/current.json?key=55abcd02053e4c45804112932231402&q=" + city.value + "&aqi=no") 
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("name").innerHTML = "Weather in " +  data.location.name;
    })
}