import React from 'react';

function CodePub() {
    return(

        <div className="col bg-dark">
        <h1 className="text-center text-info">{'{codePub}'}</h1>
        <div className="row bg-dark bg-gradient">
          <div className="col-3">
            <a href='https://code-pub.herokuapp.com/' target='_blank'><img src="./assets/codePub.png" alt=""
                height="250" width="250" className="mt-3 mb-3 border border-white border-4"/></a>
          </div>
          <div className="col-9 text-white mt-3">
            <p className="fs-5">Code Pub is a mock site of a restaurant made with react.js and redux to manage the states. Code Pub
              features user login authentication with json web tokens and the ability to purchase goods from our merch
              store. The store currently uses sandbox mode for PayPal checkout. We post events that users can sign up
              for as see a list of their events on their profile page. Users can also use our fun drink app that
              features a random drink generator using The Cocktail API, as well as a drink roulette wheel. Checkout our
              menu as well. PayPal sandbox requires test info.</p>
          </div>
        </div>
      </div>

    )

}

export default CodePub;