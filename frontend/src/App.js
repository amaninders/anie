import axios from "axios";
import { useEffect, useState } from "react";
import Approach from "./components/Approach";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Resources from "./components/Resources";
import Services from "./components/Services";


function App() {

  const [userData, setUserData]     = useState()
  const [approaches, setApproaches] = useState([])
  const [services, setServices]     = useState([])
  const [clients, setClients]       = useState([])

  useEffect(() => {
    const requestOne    = axios.get('https://aniebackend.herokuapp.com/user-information');
    const requestTwo    = axios.get('https://aniebackend.herokuapp.com/approaches?_locale=en');
    const requestThree  = axios.get('http://aniebackend.herokuapp.com/approaches?_locale=en');
    const requestFour   = axios.get('http://aniebackend.herokuapp.com/approaches?_locale=en');
    
    axios.all([requestOne, requestTwo, requestThree, requestFour]).then(axios.spread((...responses) => {
      const responseOne   = responses[0]
      const responseTwo   = responses[1].data
      const responesThree = responses[2].data
      const responesFour  = responses[3].data

      // use/access the results 
      setUserData(responseOne)
      setApproaches([...responseTwo])
      setServices([...responesThree])
      setClients([...responesFour])

    })).catch(errors => {
      // react on errors.
    })
    
  }, []);
  
  return (
    <div className="container-fluid p-0">
      <code>{JSON.stringify(userData)}</code>
      <Header />
      <Jumbotron />
      <Services />
      <Approach />
      <Clients />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
