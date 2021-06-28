import React from 'react';

function Moods() {
    return(
        <div className="col mt-3 bg-dark">
        <h1 className="text-center text-info">#Moods</h1>
        <div className="row bg-dark bg-gradient">
          <div className="col-3">
            <a href='https://lychee-sundae-06249.herokuapp.com/' target='_blank'><img src="./images/moods.png" alt=""
                height="250" width="250" className="mt-3 mb-3 border border-white border-4"/></a>
          </div>
          <div className="col-9 text-white mt-3">
            <p className="fs-5">#Moods is a social media based platform focused on sharing music and your thoughts on certain songs. The
              app will feature the ability to listen to music and add songs to playlists. You will also be able to write
              note entries almost like diary entries or posts on social media. The notes will be able to be linked to a
              song of your choice if you choose to so when you later look at notes, you can listen to that song again
              easily. You can add friends and view their posts as well as chat (direct messages currently in
              developement).</p>
          </div>
        </div>
      </div>

    )
}

export default Moods;