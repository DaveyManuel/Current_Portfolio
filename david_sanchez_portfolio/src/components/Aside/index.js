import React from 'react';

function Aside() {
    return(
        <div class="col-sm-5">
        <div class="row">
            <div class="col-6">
                <p class='text-center fs-4 bg-dark text-white bg-gradient'>Peeps and Pubs</p>
                <a href='https://daveymanuel.github.io/Peeps-and-Pubs/' target='_blank'><img src='./assets/PeepsAndPubs.png' alt='' class='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
            <div class="col-6">
                <p class='text-center fs-4 bg-dark text-white bg-gradient'>{'{codePub}'}</p>
                <a href='https://code-pub.herokuapp.com/' target='_blank'><img src='./assets/codePub.png' alt='' class='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
        </div>
        <div class="row mt-1">
            <div class="col-6">
                <p class='text-center fs-4 bg-dark text-white bg-gradient'>#Moods</p>
                <a href='https://lychee-sundae-06249.herokuapp.com/' target='_blank'><img src='./assets/moods.png' alt='' class='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
            <div class="col-6">
                <p class='text-center fs-4 bg-dark text-white bg-gradient'>Weather Dashboard</p>
                <a href='https://daveymanuel.github.io/Weather_Dashboard/' target='_blank'><img src='./assets/WeatherDashboard.png' alt='' class='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
        </div>
        <div class="row mt-1">
            <div class="col-6">
                <p class='text-center fs-4 bg-dark text-white bg-gradient'>Work Day Scheduler</p>
                <a href='https://daveymanuel.github.io/Work_Day_Scheduler/' target='_blank'><img src='./assets/workDayScheduler.png' alt='' class='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
            <div class="col-6">
                <p class='text-center fs-5 bg-dark text-white bg-gradient'>Team Profile Generator</p>
                <a href='https://github.com/DaveyManuel/TeamProfileGenerator' target='_blank'><img src='./assets/teamProfileGenerator.png' alt='' class='m-4 mt-2 rounded border border-dark border-5' height='200' width='200'/></a></div>
        </div>
    </div>

    )
}

export default Aside;