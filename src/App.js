
import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Navbar from './Components/Layers/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './Components/Main/Main';
import ProductList from './Components/Products/ProductsList';
import NewsList from './Components/News/NewsList';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Layers/Footer';

function App() {
  React.useEffect(()=>{
    M.AutoInit()
  },[])
  return (
    <div className="App" >    
     <div className="wrapper"> 
        <div className="content">
          <Router>
            <Navbar/>
            <Switch>          
              <Route exact path="/" component={Main}/>
              <Route exact path="/products" component={ProductList}/>
              <Route exact path="/news" component={NewsList}/>
              <Route exact path="/contacts" component={Contacts}/>
            </Switch>          
          </Router>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
