import React from 'react'

function Jumbotron(props) {

    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="px-4 pt-5 my-5 text-center">
                    <h1 className="display-4 fw-bold">{props.name}</h1>
                    <div className="col-lg-6 mx-auto">
                      <p className="lead mb-4">{props.about}</p>
                      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <a className="btn btn-outline-dark btn-lg px-4" href={'contact'} >Contact</a>
                      </div>
                    </div>
                    <div className="overflow-hidden" style={{'maxHeight': '30vh'}}>
                      <div className="container px-5">
                        <img src={'imageURL'} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
