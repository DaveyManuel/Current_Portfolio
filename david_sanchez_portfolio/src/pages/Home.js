import React from "react";
import AboutMe from '../components/AboutMe';
import Aside from '../components/Aside';

function Home() {
    return(
        <div className='container'>
            <div className='row'>
            <AboutMe></AboutMe>
            <Aside></Aside>

            </div>
        
        </div>
    )

}

export default Home