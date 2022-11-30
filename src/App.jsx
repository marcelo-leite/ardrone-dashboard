
import React, { Component} from "react";
import { Route, BrowserRouter, Redirect} from "react-router-dom";
import { Link } from "react-router-dom";
import Demo from "./pages/public/demo"
import Login from "./pages/public/login"

import "./style/global.css"
import "./style/style.css"

class App extends Component{
  render(){
    return(
      <div className="wrapper f-col">
        {/* <Login></Login> */}
        <BrowserRouter>
          {/* <div className="f-row f-c">
                <Link to="/login" className="dash-button">
                  Login  
                </Link>
                <Link to="/login" className="dash-button">
                  Demo  
                </Link>
          </div> */}
          <Redirect to="/demo" />
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/demo" exact>
            <Demo></Demo>
          </Route>
          
        </BrowserRouter>
      </div> 
    );
  }
}

export default App;