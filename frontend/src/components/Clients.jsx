import React from 'react'

function Clients() {
    return (
        <div className="container" id="clients">
            <p className="custom-shadow mb-5">Clients</p>
            <div id="carouselExampleControls" className="carousel slide p-5" data-bs-ride="carousel">
                <div className="carousel-inner p-3">
                  <div className="carousel-item active">
                    <div className="row">
                        <div className="col-sm-3 p-3 align-self-center">
                            <img src="abstract-rugby.png" className="img-thumbnail" alt="..." />
                        </div>
                        <div className="col-sm-9 p-5 h-100">
                            <div className="card">
                                <div className="card-body">
                                  <blockquote className="blockquote mb-0">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                  </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                        <div className="col-sm-3 p-3 align-self-center">
                            <img src="abstract-rugby.png" className="img-thumbnail" alt="..." />
                        </div>
                        <div className="col-sm-9 p-5 h-100">
                            <div className="card">
                                <div className="card-body">
                                  <blockquote className="blockquote mb-0">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                  </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                        <div className="col-sm-3 p-3 align-self-center">
                            <img src="abstract-rugby.png" className="img-thumbnail" alt="..." />
                        </div>
                        <div className="col-sm-9 p-5 h-100">
                            <div className="card">
                                <div className="card-body">
                                  <blockquote className="blockquote mb-0">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                  </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
