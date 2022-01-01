import React from 'react'

function Hero() {
    return (
        <div className="container">
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">Melanie Stafford</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa ad eum soluta nihil dignissimos consectetur quam? Nisi sequi sit aspernatur nobis, nihil architecto amet vitae ipsam libero soluta illum!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-dark btn-lg px-4 me-sm-3">Learn More</button>
                    </div>
                    </div>
                    <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
                    <div className="container px-5">
                        <img src="hero_image.jpg" className=" img-fluid border rounded-3 shadow-lg mb-4" alt="hero image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
