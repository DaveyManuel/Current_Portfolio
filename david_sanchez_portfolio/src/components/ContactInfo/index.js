import React from 'react';

function ContactInfo(){
    return(

        <div className="col-sm-8 mb-4  p-5">
            <section className="card mt-5 border border-4 border-success">
                <div className="card-body bg-dark bg-gradient text-light">
                    <header className="row fs-1">
                        <h3>Contact</h3>
                          <small className="text-muted">Send me a message!</small>
                    </header>
                    <div className="fs-2"><i className="fab fa-linkedin"></i><a className="text-info"
                      href="https://www.linkedin.com/in/david-sanchez-784014183/" target="_blank"> Connect With Me on
                      LinkedIn </a><i className="fab fa-linkedin"></i></div>
                    <div className="fs-2"><i className="fab fa-github"></i><a className="text-warning"
                          href="https://github.com/DaveyManuel" target="_blank"> Connect With Me on
                          GitHub </a><i className="fab fa-github"></i></div>

                </div>
            </section>
        </div>

    )
}

export default ContactInfo;