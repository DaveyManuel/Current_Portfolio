import React from 'react';

function WeatherDashboard(){
    return(
        <div class="col mt-3 bg-dark">
        <h1 class="text-center text-info">Weather Dashboard</h1>
        <div class="row bg-dark bg-gradient">
          <div class="col-3">
            <a href='https://daveymanuel.github.io/Weather_Dashboard/' target='_blank'><img
                src="./Images/WeatherDashboard.png" alt="" height="250" width="250"
                class="mt-3 mb-3 border border-white border-4"/></a>
          </div>
          <div class="col-9 text-white mt-3">
            <p class="fs-5">In this project, I have built a simple weather application that takes in user input within a form field.
              Said user can input the city of their choice and be shown the current weather for that city at the present
              moment, and a future 5 day forecast of the weather that will show. The city searched will be saved to the
              user's local storage and will appear whenever they type into the form field. Included in the results of
              the search are the general weather conditions, current temperature, highs and lows of the day, how the
              temperature feels like, humidity, wind speed, and UVI index whose color changes based on if the UVI index
              is low, moderate, or high.</p>
          </div>
        </div>
      </div>

    )
}

export default WeatherDashboard;