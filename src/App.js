import React, { Component} from "react";
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Geral from "./pages/geral/index"

// import ToggleConnect from "./ROS/toggleconnect.js"
// import ToggleConnect from "./ROS/react-ros/src/components/examples/ToggleConnect"

// import Menu from "./components/menu/index";
// import Tools from "./pages/tools/index";

import "./style/global.css";
import './style/style.css';

class App extends Component{
  render(){
    return(
      // <ToggleConnect></ToggleConnect>
      <Geral></Geral>
      
      

    );
  }
}

export default App;