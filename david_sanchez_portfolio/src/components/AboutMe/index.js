import React from 'react';

function AboutMe () {
    return (
        <div className="col-sm-7 mb-5">
         <section className="card border border-5 border-dark mb-5">
            <div className="card-body text-white bg-dark bg-gradient">
                <header className="row">
                    <h1 className="card-title text-center">About Me</h1>
                </header>
                <div className="row">
                    <section className="col-sm mb-2">
                        <img src="./images/meMiami.jpg"
                            alt="picture of myself standing with palm trees in the background"
                            className="rounded img-fluid"/>
                    </section>
                    <article className="col-sm">
                        <p>Hello world! My name is David Sanchez, and I am a 26 year old graduate of the Trilogy Full-Stack Web Development Coding Bootcamp from the University of Miami. I also have a Bachelor's of Applied Science from the College of
                            Charleston with a major in International Business, and minor in Spanish. During the course of my bootcamp, I applied both my web development skills along with my presentation skills for all three of my final projects, which are showcased to the right (CodePub, Peeps and Pubs, and #Moods).
                            In all three of these projects, I was the designated the role to design and showcase the final product. In doing so, I utilized presentation applications such as Canva, and Prezi.</p>
                        </article>
                </div>
                <div className="row">
                    <article className="col-sm">
                        <p> 
                        
                        </p>
                    </article>
                </div>
            </div>
        </section>
    </div>

    )
}

export default AboutMe;