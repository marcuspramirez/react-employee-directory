// Where you will build your app
// Import is ES6
import './App.css';
import Title from './Title';


// In react this is a component which is a function that calls UI.  Once you start weaving a bunch of components together, you then have an interface!
// If you look at Title it is coming from Title.js where we have a title function that has a prop with <h1> element.  We exported it in the Title file and imported above
function App() {
  return (
    <div>
      <Title titleText="Welcome to the user directory!" />
      <h3>Use the search tools to find one of our amazing associates!</h3>
    </div>
  )
}




// You import things and you EXPORT things.  This is who you export the function above
export default App;
