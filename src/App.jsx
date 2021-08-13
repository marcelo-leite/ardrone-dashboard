<<<<<<< HEAD
// Copyright 2021 marcelo
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

=======
>>>>>>> b4308357d20342a354dce38e766ca482d8a3c77c
import React, { Component} from "react";
// import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import ROSLIB from 'roslib';

// FRONT END
import Geral from "./pages/private/geral/index"
import Header from "./components/header";
import NavbarLeft from "./components/navbar-left";
import RosLogin from "./pages/public/login/index"

import "./style/global.css";
import './style/style.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      url: 'ws://localhost:9090',
      connected: false,
      error: false,
      x: 5.5,
      y: 5.5
    }
  }

  ROSConnect = () => {
    try {
      const ros = new ROSLIB.Ros({url : this.state.url});
      ros.on('connection', () => {
        console.log('Connected to websocket server.');
        this.setState({ connected:true });
        this.ROSTopic(ros);
      });
      ros.on('error', () => {
        const error = 'Error connecting to websocket server.'
        console.log(error);
        this.setState({ error });
      });
      ros.on('close', () => {
        console.log('Connection to websocket server closed.');
      });
    }
    catch {
      const error = 'Failed to construct websocket. The URL is invalid.'
      console.log(error);
      this.setState({ error });
    }
  }


  ROSTopic = (ros) => {
     // ROS TOPIC
    this.cmdVel = new ROSLIB.Topic({
      ros: ros,
      name : 'turtle1/cmd_vel',
      messageType : 'geometry_msgs/Twist'
    });

    this.listener = new ROSLIB.Topic({
      ros : ros,
      name : 'turtle1/pose',
      messageType : 'turtlesim/Pose'
    });
    
    // ROS SUBSCRIBE 
    this.listener.subscribe((message) => {
      const { x, y } = message;
      if(this.state.x !== x) this.setState({ x });
      if(this.state.y !== y) this.setState({ y });
    });
  }

  changeUrl = (e) => this.setState({url: e.target.value});

  render(){

    if(this.state.connected){
      return(
        <div className="wrapper f-col">
            <Header/>
            <NavbarLeft/>
            <Geral altitude={this.state.y}/>
        </div> 
      );
    }else{
      return(
        <div className="wrapper">
          <RosLogin url={this.state.url} changeUrl={this.changeUrl} ROSConnect={this.ROSConnect}/>
        </div> 
      );
    }    
      
  }
}

export default App;