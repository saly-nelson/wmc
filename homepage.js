// const toggleButton = document.getElementById("toggleButton");
// const temperatureDisplay = document.getElementById("temperatureDisplay");
// let temperature = weather;

// toggleButton.addEventListener("click", () => {
//   if (temperatureDisplay.textContent.includes("°C")) {
 
//     temperature += 273;
//     temperatureDisplay.textContent = `${temperature} K`;
//     toggleButton.textContent = "Celsius";
//     toggleButton.style.fontWeight = "bold";
//     toggleButton.style.fontSize = "18px";
//   } else {

//     temperature -= 273;
//     temperatureDisplay.textContent = `${temperature} °C`;
//     toggleButton.textContent = "Kelvin";
//   }
// });
//from the home page page
 const apiKey = "ad3abf73d1d197c2d8377bc03ec668d6";
      const Musanze = "Musanze";
      const Kigali = "Kigali";   //this is about the city like it was done on others
      const kigali = "kigali";  // this kigali stands for the overall temperature of rwanda in general
      const Gisenyi = "Gisenyi";
      const Rwamagana = "Rwamagana";
      const Muhanga = "Muhanga";
      const Nyabihu = "Mukamira";
      const Huye = "huye";
      const Nyamata = "Nyamata";


      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${kigali}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); 

          document.getElementById("temperatureDisplay").innerHTML = `
         <p> ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("temperatureDisplay").innerHTML = "Error fetching weather data";
        });


      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${kigali}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); 

          document.getElementById("second_temperature").innerHTML = `
         <p>${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("second_temperature").innerHTML = "Error fetching weather data";
        });

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${kigali}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); 

          document.getElementById("the_fills_like_temperature_container").innerHTML = `
         <p> ${weather}</p>
         <p> ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("the_fills_like_temperature_container").innerHTML = "Error fetching weather data";
        });


      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Musanze}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius

          document.getElementById("weather").innerHTML = `
         <h2>Weather in ${Musanze}</h2>
          <p>Current conditions: ${weather}</p>
         <p>Temperature: ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("weather").innerHTML = "Error fetching weather data";
        });

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Kigali}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius

          document.getElementById("gasabo").innerHTML = `
         <h2>Weather in ${Kigali}</h2>
          <p>Current conditions: ${weather}</p>
         <p>Temperature: ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("gasabo").innerHTML = "Error fetching weather data";
        });

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Gisenyi}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius

          document.getElementById("rubavu").innerHTML = `
         <h2>Weather in ${Gisenyi}</h2>
          <p>Current conditions: ${weather}</p>
         <p>Temperature: ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("rubavu").innerHTML = "Error fetching weather data";
        });

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Rwamagana}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius

          document.getElementById("rwamagana").innerHTML = `
         <h2>Weather in ${Rwamagana}</h2>
          <p>Current conditions: ${weather}</p>
         <p>Temperature: ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("rwamagana").innerHTML = "Error fetching weather data";
        });

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Muhanga}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius

          document.getElementById("muhanga").innerHTML = `
         <h2>Weather in ${Muhanga}</h2>
          <p>Current conditions: ${weather}</p>
         <p>Temperature: ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("muhanga").innerHTML = "Error fetching weather data";
        });

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Nyabihu}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius

          document.getElementById("nyabihu").innerHTML = `
         <h2>Weather in ${Nyabihu}</h2>
          <p>Current conditions: ${weather}</p>
         <p>Temperature: ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("nyabihu").innerHTML = "Error fetching weather data";
        });

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Ngororero}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius

          document.getElementById("ngororero").innerHTML = `
         <h2>Weather in ${Ngororero}</h2>
          <p>Current conditions: ${weather}</p>
         <p>Temperature: ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("ngororero").innerHTML = "Error fetching weather data";
        });

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Huye}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius

          document.getElementById("huye").innerHTML = `
         <h2>Weather in ${Huye}</h2>
          <p>Current conditions: ${weather}</p>
         <p>Temperature: ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("huye").innerHTML = "Error fetching weather data";
        });

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Nyamata}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          const weather = data.weather[0].main;
          const temp = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius

          document.getElementById("bugesera").innerHTML = `
         <h2>Weather in ${Nyamata}</h2>
          <p>Current conditions: ${weather}</p>
         <p>Temperature: ${temp}°C</p>
        `;
        })
        .catch((error) => {
          console.error(error);
          document.getElementById("bugesera").innerHTML = "Error fetching weather data";
        });
   
      $(document).ready(function () {
        var currentIndex = 0;
        var images = $("#slideshow img");
        var totalImages = images.length;
        function showImage(index) {
          images.eq(index).fadeIn(1000).siblings().fadeOut(9000);
        }

        function nextImage() {
          showImage(currentIndex);
          currentIndex = (currentIndex + 1) % totalImages;
        }
      });
      document.getElementById("menu").addEventListener("mouseenter", function () {
        var displaying = document.getElementById("display");
        if (displaying.style.display === "none") {
          displaying.style.display = "block";
        } else {
          displaying.style.display = "none";
        }
      });

      //the jquerry part of homepage

        $(document).ready(function () {
          $("#the_middle_list_in_footer").mouseover(function () {
            $(this).slideUp(5000).slideDown(5000).fadeIn();
          });
        });

         $(document).ready(function () {
           $("#ol").mouseover(function () {
             $(this).fadeIn("100");
           });
         });

          $(document).ready(function () {
            $("#partners,#AI").mouseover(function () {
              $(this).slideUp(90000).slideDown(90000);
            });
          });