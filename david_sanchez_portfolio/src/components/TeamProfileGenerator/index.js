import React from 'react';

function TeamProfile(){
    return(
        <div className="col mt-3 pb-5 bg-dark">
        <h1 className="text-center text-info">Team Profile Generator</h1>
        <div className="row bg-dark bg-gradient">
          <div className="col-3">
            <a href='https://github.com/DaveyManuel/TeamProfileGenerator' target='_blank'><img
                src="./images/teamProfileGenerator.png" alt="" height="250" width="250"
                className="mt-3 mb-3 border border-white border-4"/></a>
          </div>
          <div className="col-9 text-white mt-3">
            <p className="fs-5">For this project, I created a command-line application that takes in user input and returns an html page.
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