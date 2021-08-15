
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