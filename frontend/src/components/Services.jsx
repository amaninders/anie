import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Services() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      getData();
    }, []);
  
    async function getData() {
      await axios("https://aniebackend.herokuapp.com/api/services")
        .then((response) => {
          setData(response.data.data.reverse());
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  
    if (loading) return "Loading...";
    if (error) return "Error!";

    console.log(data)
    const services = data.map((item, index) => {

        let desClass = (index % 2 === 0) ? 'col-md-7 align-self-center' : 'col-md-7 order-md-2 align-self-center';
        let imgClass = (index % 2 === 0) ? 'col-md-5' : 'col-md-5 order-md-1';

        return (<div key={index} className="row featurette">
                    <div className={desClass}>
                        <h2 className="featurette-heading">{item.attributes.title}</h2>
                        <p className="lead">{item.attributes.description}</p>
                    </div>
                    <div className={imgClass} style={{'backgroundImage': 'url(\'blob.svg\')', 'backgroundRepeat':'no-repeat'}}>
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img-approach" width="500" height="500" src={item.attributes.image_url} />
                    </div>
                </div>)
    })

    return (
        <div className="container mt-5 p-5" id="services">
            <p className="custom-shadow mb-5">Services</p>
            {services}
        </div>
    )
}

export default Services
