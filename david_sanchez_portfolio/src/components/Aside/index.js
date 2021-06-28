import React from 'react';

function Aside() {
    return(
        <div className="col-sm-5">
        <div className="row">
            <div className="col-6">
                <p className='text-center fs-4 bg-dark text-white bg-gradient'>Peeps and Pubs</p>
                <a href='https://daveymanuel.github.io/Peeps-and-Pubs/' target='_blank'><img src={`${process.env.PUBLIC_URL}/images/PeepsAndPubs.png`} alt='' className='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
            <div className="col-6">
                <p className='text-center fs-4 bg-dark text-white bg-gradient'>{'{codePub}'}</p>
                <a href='https://code-pub.herokuapp.com/' target='_blank'><img src={`${process.env.PUBLIC_URL}/images/codePub.png`} alt='' className='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
        </div>
        <div className="row mt-1">
            <div className="col-6">
                <p className='text-center fs-4 bg-dark text-white bg-gradient'>#Moods</p>
                <a href='https://lychee-sundae-06249.herokuapp.com/' target='_blank'><img src='./images/moods.png' alt='' className='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
            <div className="col-6">
                <p className='text-center fs-4 bg-dark text-white bg-gradient'>Weather Dashboard</p>
                <a href='https://daveymanuel.github.io/Weather_Dashboard/' target='_blank'><img src='./images/WeatherDashboard.png' alt='' className='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
        </div>
        <div className="row mt-1">
            <div className="col-6">
                <p className='text-center fs-4 bg-dark text-white bg-gradient'>Work Day Scheduler</p>
                <a href='https://daveymanuel.github.io/Work_Day_Scheduler/' target='_blank'><img src='./images/workDayScheduler.png' alt='' className='m-4 mt-0 rounded border border-dark border-5' height='200' width='200'/></a></div>
            <div className="col-6">
                <p className='text-center fs-5 bg-dark text-white bg-gradient'>Team Profile Generator</p>
                <a href='https://github.com/DaveyManuel/TeamProfileGenerator' target='_blank'><img src='./images/teamProfileGenerator.png' alt='' className='m-4 mt-2 rounded border border-dark border-5' height='200' width='200'/></a></div>
        </div>
    </div>

    )
}

export default Aside;