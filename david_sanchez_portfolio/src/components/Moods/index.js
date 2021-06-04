import React from 'react';

function Moods() {
    return(
        <div class="col mt-3 bg-dark">
        <h1 class="text-center text-info">#Moods</h1>
        <div class="row bg-dark bg-gradient">
          <div class="col-3">
            <a href='https://lychee-sundae-06249.herokuapp.com/' target='_blank'><img src="./assets/moods.png" alt=""
                height="250" width="250" class="mt-3 mb-3 border border-white border-4"/></a>
          </div>
          <div class="col-9 text-white mt-3">
            <p class="fs-5">#Moods is a social media based platform focused on sharing music and your thoughts on certain songs. The
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