import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Components/Form/index"
import Table from "./Components/Tables/index"
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

function App() {

  
   return (
     
      <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/table" component={Table}  />
      </Switch>
    </Router>
      
   );
};
   
export default App;
