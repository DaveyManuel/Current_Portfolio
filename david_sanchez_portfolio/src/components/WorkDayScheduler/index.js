import React from 'react';

function WorkDay(){
    return(
        <div class="col mt-3 bg-dark">
        <h1 class="text-center text-info">Work Day Scheduler</h1>
        <div class="row bg-dark bg-gradient">
          <div class="col-3">
            <a href='https://daveymanuel.github.io/Work_Day_Scheduler/' target='_blank'><img
                src="./Images/workDayScheduler.png" alt="" height="250" width="250"
                class="mt-3 mb-3 border border-white border-4"/></a>
          </div>
          <div class="col-9 text-white mt-3">
            <p class="fs-5">With the completion of this assignment, I was able to implement code via HTML, CSS, and JS in order to
              create a work-day scheduler for a busy client. By using moment.js I grabbed the current day and current
              time and displayed both in the header of the planner. I created 8 columns to represent an 8 hour work day
              that coincides with the current hour of the day. By using the styles 'past', 'present', and 'future' I
              color coded each column grey, red, and green respectively. For each column when the save button is
              pressed, the text that is written in by the user will be saved. When the page is refreshed, the text will
              remain.</p>
          </div>
        </div>
      </div>

    )
}

export default WorkDay;