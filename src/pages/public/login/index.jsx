
import React, { Component} from "react";
import { Route, BrowserRouter, Redirect} from "react-router-dom";
import { Link } from "react-router-dom";

import ROSLIB from 'roslib';

// FRONT END
import Demo from "./../demo"
import Geral from "./../../private/geral"
import NavbarLeft from "./../../../components/navbar-left";
import RosLogin from "./component/ros-login"

class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      url: 'ws://localhost:9090',
      connected: false,
      error: false,
      navdata:{
        magX: 0,
        magY: 0,
        magZ: 0,
        battery: 75,
        pressure: 9668,
        rotX: 0,
        rotY: 0,
        rotZ: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        altitude: 0.2,
        ax: 0,
        ay: 0,
        az: 0,
        motor1: 0, 
        motor2: 0, 
        motor3: 0, 
        motor4: 0
      },
      gps:{
        lat: -5.449284,
        lng: -47.402785,
        alt: 160
      }
    }
    
  }

  ROSConnect = () => {
    // this.setState({ connected:true });
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

    this.navdata = new ROSLIB.Topic({
      ros : ros,
      name : '/ardrone/navdata',
      messageType : 'ardrone_autonomy/Navdata'
    });
    
    // ROS SUBSCRIBE 
    this.navdata.subscribe((message) => {


      if(this.state.navdata.altitude !== message.altd){
        this.setState(prevState => ({
            navdata:{
              ...prevState.navdata,
              ["altitude"]: message.altd/1000.0 //Altitude mm to m
            }
        }));
      }

      if(this.state.navdata.pressure !== message.pressure){
        this.setState(prevState => ({
            navdata:{
              ...prevState.navdata,
              ["pressure"]: message.pressure
            }
        }));
      }

      if(this.state.navdata.battery !== message.batteryPercent){
        this.setState(prevState => ({
            navdata:{
              ...prevState.navdata,
              ["battery"]: message.batteryPercent
            }
        }));
      }

      if(this.state.navdata.motor1 !== message.motor1){
        this.setState(prevState => ({
            navdata:{
              ...prevState.navdata,
              ["motor1"]: message.motor1
            }
        }));
      }

      if(this.state.navdata.motor2 !== message.motor2){
        this.setState(prevState => ({
            navdata:{
              ...prevState.navdata,
              ["motor2"]: message.motor2
            }
        }));
      }

      if(this.state.navdata.motor3 !== message.motor3){
        this.setState(prevState => ({
            navdata:{
              ...prevState.navdata,
              ["motor3"]: message.motor3
            }
        }));
      }
      if(this.state.navdata.motor4 !== message.motor4){
        this.setState(prevState => ({
            navdata:{
              ...prevState.navdata,
              ["motor4"]: message.motor4
            }
        }));
      }

    });
    
  }

  changeUrl = (e) => this.setState({url: e.target.value});

  render(){

    if(this.state.connected){
      return(
        <div className="wrapper f-col">
          <BrowserRouter>
            <NavbarLeft/>
            {/* <Header/> */}
            <Redirect to="/geral" />
            <Route path="/geral" exact>
             
              <Geral        
                  navdata={this.state.navdata}
                  gps={this.state.gps}
              />

            </Route>
            {/* <Route path="/demo">
                <Demo></Demo>
            </Route> */}
            
          </BrowserRouter>
        </div> 
      );
    }else{
      return(
        <div className="wrapper">
          <div cassName="Demo">
              <button>Demo</button>
          </div>
          <RosLogin url={this.state.url} changeUrl={this.changeUrl} ROSConnect={this.ROSConnect}/>
        </div> 
      );
    }    
      
  }
}


export default Login;