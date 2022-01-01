import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {

  const [approach, setApproach] = useState([]);

  useEffect(() => {
    const requestOne = axios.get('http://localhost:1337/approaches?_locale=fr');
    const requestTwo = axios.get('http://localhost:1337/approaches?_locale=fr');
    const requestThree = axios.get('http://localhost:1337/approaches?_locale=fr');
    
    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
      const responseOne = responses[0].data
      const responseTwo = responses[1].data
      const responesThree = responses[2].data
      // use/access the results 

      setApproach([...responseOne])

    })).catch(errors => {
      // react on errors.
    })
    
  }, []);
  
  return (
    <div className="container-fluid custom">
      {/* <code>{JSON.stringify(data)}</code> */}
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
