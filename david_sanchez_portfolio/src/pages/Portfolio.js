import React from 'react';
import CodePub from '../components/codePubProject';
import PeepsAndPubs from '../components/PeepsAndPubsProject';
import WeatherDashboard from '../components/WeatherDashboard';

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
        </div>
    )
}

export default Portfolio;