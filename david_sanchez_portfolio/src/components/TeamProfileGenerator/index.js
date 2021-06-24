import React from 'react';

function TeamProfile(){
    return(
        <div class="col mt-3 pb-5 bg-dark">
        <h1 class="text-center text-info">Team Profile Generator</h1>
        <div class="row bg-dark bg-gradient">
          <div class="col-3">
            <a href='https://github.com/DaveyManuel/TeamProfileGenerator' target='_blank'><img
                src="./images/teamProfileGenerator.png" alt="" height="250" width="250"
                class="mt-3 mb-3 border border-white border-4"/></a>
          </div>
          <div class="col-9 text-white mt-3">
            <p class="fs-5">For this project, I created a command-line application that takes in user input and returns an html page.
              This project is designed for teams who need to keep track of all of members in an efficient yet simple
              manner. The application takes in input from the user such as name, email, employee ID, role, and depending
              on your role will ask further questions. Once the user is finished adding all of their team members it
              will create an html page which shows all of the members with their pertinent role, name, email, employee
              ID, manager office number, intern's school, and engineer's GitHub.</p>
          </div>
        </div>
      </div>

    )
}

export default TeamProfile;