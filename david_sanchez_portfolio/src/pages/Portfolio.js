import React from 'react';
import CodePub from '../components/codePubProject';
import PeepsAndPubs from '../components/PeepsAndPubsProject';
import WeatherDashboard from '../components/WeatherDashboard';
import Moods from '../components/Moods';
import WorkDay from '../components/WorkDayScheduler';
import TeamProfile from '../components/TeamProfileGenerator';

function Portfolio(){
    return(
        <div className="container">
            <div className="row">
                <CodePub></CodePub>
            </div>
            <div className='row'>
                <PeepsAndPubs></PeepsAndPubs>
            </div>
            <div className='row'>
                <WeatherDashboard></WeatherDashboard>
            </div>
            <div className='row'>
                <Moods></Moods>
            </div>
            <div className='row'>
                <WorkDay></WorkDay>
            </div>
            <div className='row mb-5'>
                <TeamProfile></TeamProfile>
            </div>
        </div>
    )
}

export default Portfolio;