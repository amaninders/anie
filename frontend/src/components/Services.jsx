import React from 'react'

function Services() {
    return (
        <div className="container mt-5 p-5" id="services">
            <p className="custom-shadow mb-5">Services</p>
            <div className="row featurette mt-5 p-5">
                <div className="col-md-7 align-self-center">
                    <h2 className="featurette-heading">Workshops</h2>
                    <p className="lead">Whiteness, De-escalation, and Fatphobia</p>
                </div>
                <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-approach" width="500" height="500" src="pablita-911.png" />
                </div>
            </div>
            <div className="row featurette">
                <div className="col-md-7 order-md-2 align-self-center">
                    <h2 className="featurette-heading">Training</h2>
                    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-approach" width="500" height="500" src="pablita-remote-education.png" />
                </div>
            </div>
            <div className="row featurette">
                <div className="col-md-7 align-self-center">
                    <h2 className="featurette-heading">Facilitation</h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-approach" width="500" height="500" src="pablita-workshop.png" />
                </div>
            </div>



        </div>
    )
}

export default Services
