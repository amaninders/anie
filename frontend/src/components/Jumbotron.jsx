import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Jumbotron() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios("https://aniebackend.herokuapp.com/api/user-information")
      .then((response) => {
        setData(response.data.data.attributes);
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
    return (
      <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
              <div className="px-4 pt-5 my-5 text-center">
                  <h1 className="display-4 fw-bold">{data.title}</h1>
                  <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">{data.about}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                      <a className="btn btn-outline-dark btn-lg px-4" href={'mailto:' + data.email} >Contact</a>
                    </div>
                  </div>
                  <div className="overflow-hidden" style={{'maxHeight': '30vh'}}>
                    <div className="container px-5">
                      <img src={data.cover_url} className="img-fluid border rounded-3 shadow-lg mb-4" alt="people having discussion" width="700" height="500" loading="lazy"/>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Jumbotron
