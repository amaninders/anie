import Approach from "./components/Approach";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Resources from "./components/Resources";
import Services from "./components/Services";


function App() {
  return (
    <div className="container-fluid p-0">
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
