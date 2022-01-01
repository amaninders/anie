import React from 'react'

function Jumbotron() {
    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="px-4 pt-5 my-5 text-center">
                    <h1 className="display-4 fw-bold">Melanie Stafford</h1>
                    <div className="col-lg-6 mx-auto">
                      <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum est sunt eum. Alias neque dolorum sint, culpa voluptatem consequatur tenetur tempore accusantium earum, optio quis consequuntur! Consectetur delectus praesentium voluptatibus!</p>
                      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact</button>
                      </div>
                    </div>
                    <div className="overflow-hidden" style={{'max-height': '30vh'}}>
                      <div className="container px-5">
                        <img src="hero_image.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
