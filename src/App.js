// Where you will build your app
// Import is ES6
import './App.css';
import Namesearch from './components/Namesearch.js';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EmailSearch from "./components/Emailsearch";
import FetchRandomUser from "./components/FetchRandomUser";


// In react this is a component which is a function that calls UI.  Once you start weaving a bunch of components together, you then have an interface!
// If you look at Title it is coming from Title.js where we have a title function that has a prop with <h1> element.  We exported it in the Title file and imported above
function App() {
  return (
    <div>
      <Header />
      <Navbar/>
      <Namesearch/>
      <EmailSearch/>     
      <FetchRandomUser/>
      <FetchRandomUser/>
      <FetchRandomUser/>
      <FetchRandomUser/>
      <FetchRandomUser/>
      <FetchRandomUser/>
      <FetchRandomUser/>
      <FetchRandomUser/>
      
    </div>
  )
}




// You import things and you EXPORT things.  This is who you export the function above
export default App;
