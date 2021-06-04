import React from 'react';

function PeepsAndPubs(){
    return(
        <div class="col mt-3 bg-dark">
        <h1 class="text-center text-info">Peeps and Pubs</h1>
        <div class="row bg-dark bg-gradient">
          <div class="col-3">
            <a href='https://daveymanuel.github.io/Peeps-and-Pubs/' target='_blank'><img src="./assets/PeepsAndPubs.png"
                alt="" height="250" width="250" class="mt-3 mb-3 border border-white border-4"/></a>
          </div>
          <div class="col-9 text-white mt-3">
            <p class="fs-5">Peeps and Pub's LLC., Is an interactive tool with the power to customize real world experiences in
              local neighborhood with local business. This tool is created with the user in mind. When a user or users (Peeps) decide to pick an area where they
              want to spend time in they will be able to find the perfect eatery to enjoy themselves in. And once there, if the conversation lacks, or the mood dampens, they'll be able to enjoy drinking games
              that will surely make the night more exciting.</p>
          </div>
        </div>
      </div>

    )
}

export default PeepsAndPubs;