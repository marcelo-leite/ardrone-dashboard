
import React, { Component} from "react";
import { Route, BrowserRouter, Redirect} from "react-router-dom";
import { Link } from "react-router-dom";
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
      navdata:{
        magX: 0,
        magY: 0,
        magZ: 0,
        battery: 25,
        pressure: 9668,
        rotX: 0,
        rotY: 0,
        rotZ: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        altitude: 0,
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
      },
      serie_accs: {
        ax: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ay: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        az: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
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
    
      // if(this.state.navdata.altitude !== message.altd) this.setState({mavdata.altitude: message.altd});
      // if(this.state.pressure !== message.pressure) this.setState({pressure: message.pressure});
      // if(this.state.altitude !== message.batteryPercent) this.setState({baterry: message.batteryPercent});
      // if(this.state.ax !== message.ax){
      //     this.setState({ax: message.ax});
      //     this.setState({ay: message.ay});
      //     this.setState({az: message.az});
      //     let aux = this.state.serie_accs;
      //     for(let i = (aux.ax.length - 1); i > 0; i--){
      //       aux.ax[i] = parseFloat(aux.ax[i - 1]).toFixed(2);
      //     }
      //     aux.ax[0] = parseFloat(this.state.ax).toFixed(2);

      //     for(let i = (aux.ay.length - 1); i > 0; i--){
      //       aux.ay[i] = parseFloat(aux.ay[i - 1]).toFixed(2);
      //     }
      //     aux.ay[0] = parseFloat(this.state.ay).toFixed(2);

      //     for(let i = (aux.az.length - 1); i > 0; i--){
      //       aux.az[i] = parseFloat(aux.az[i - 1]).toFixed(2);
      //     }
      //     aux.az[0] = parseFloat(this.state.az).toFixed(2);

      //     this.setState({serie_accs: aux});

      // }

      // console.log(this.state.pressure);
      // this.setNavdata({ax: message.ax});
      // this.setState({navdata:{["ax"]: message.ax}});
      // this.setState({navdata:{["ay"]: message.ay}});
      // this.setState({navdata:{["az"]: message.az}});

      // if(this.state.navdata.vx !== message.vx) this.setState({navdata:{["vx"]: message.vx}});
      // if(this.state.navdata.vy !== message.vy) this.setState({navdata:{["vy"]: message.vy}});
      // if(this.state.navdata.vz !== message.vz) this.setState({navdata:{["vz"]: message.vz}});

      // if(this.state.navdata.magX !== message.magX) this.setState({navdata:{["magX"]: message.magX}});
      // if(this.state.navdata.magY !== message.magY) this.setState({navdata:{["magY"]: message.magY}});
      // if(this.state.navdata.magZ !== message.magZ) this.setState({navdata:{["magZ"]: message.magZ}});

      // if(this.state.navdata.rotX !== message.rotX) this.setState({navdata:{["rotX"]: message.rotX}});
      // if(this.state.navdata.rotY !== message.rotY) this.setState({navdata:{["rotY"]: message.rotY}});
      // if(this.state.navdata.rotZ !== message.rotZ) this.setState({navdata:{["rotZ"]: message.rotZ}});
      
      // if(this.state.navdata.motor1 !== message.motor1) this.setState({navdata:{["motor1"]: message.motor1}});
      // if(this.state.navdata.motor2 !== message.motor2) this.setState({navdata:{["motor2"]: message.motor2}});
      // if(this.state.navdata.motor3 !== message.motor3) this.setState({navdata:{["motor3"]: message.motor3}});
      // if(this.state.navdata.motor4 !== message.motor4) this.setState({navdata:{["motor4"]: message.motor4}});

      // if(this.state.navdata.baterry !== message.batteryPercent) this.setState({navdata:{["baterry"]: message.batteryPercent}});
      // if(this.state.navdata.pressure !== message.pressure) this.setState({navdata:{["pressure"]: message.pressure}});
      
      // if(this.state.navdata.altitude !== message.altd) this.setState({navdata:{["altitude"]: message.altd}});
      // if(this.state.navdata.ax !== message.ax) this.setState({navdata:{["ax"]: message.ax}});
      // if(this.state.navdata.ay !== message.ay) this.setState({navdata:{["ay"]: message.ay}});
      // if(this.state.navdata.az !== message.az) this.setState({navdata:{["az"]: message.az}});

      // if(this.state.navdata.vx !== message.vx) this.setState({navdata:{["vx"]: message.vx}});
      // if(this.state.navdata.vy !== message.vy) this.setState({navdata:{["vy"]: message.vy}});
      // if(this.state.navdata.vz !== message.vz) this.setState({navdata:{["vz"]: message.vz}});

      // if(this.state.navdata.magX !== message.magX) this.setState({navdata:{["magX"]: message.magX}});
      // if(this.state.navdata.magY !== message.magY) this.setState({navdata:{["magY"]: message.magY}});
      // if(this.state.navdata.magZ !== message.magZ) this.setState({navdata:{["magZ"]: message.magZ}});

      // if(this.state.navdata.rotX !== message.rotX) this.setState({navdata:{["rotX"]: message.rotX}});
      // if(this.state.navdata.rotY !== message.rotY) this.setState({navdata:{["rotY"]: message.rotY}});
      // if(this.state.navdata.rotZ !== message.rotZ) this.setState({navdata:{["rotZ"]: message.rotZ}});
      
      // if(this.state.navdata.motor1 !== message.motor1) this.setState({navdata:{["motor1"]: message.motor1}});
      // if(this.state.navdata.motor2 !== message.motor2) this.setState({navdata:{["motor2"]: message.motor2}});
      // if(this.state.navdata.motor3 !== message.motor3) this.setState({navdata:{["motor3"]: message.motor3}});
      // if(this.state.navdata.motor4 !== message.motor4) this.setState({navdata:{["motor4"]: message.motor4}});

      // if(this.state.navdata.baterry !== message.batteryPercent) this.setState({navdata:{["baterry"]: message.batteryPercent}});
      // if(this.state.navdata.pressure !== message.pressure) this.setState({navdata:{["pressure"]: message.pressure}});
    });
    
  }

  changeUrl = (e) => this.setState({url: e.target.value});

  render(){

    if(this.state.connected || false){
      return(
        <div className="wrapper f-col">
          <BrowserRouter>
            <NavbarLeft/>
            {/* <Header/> */}
            <Redirect to="/geral" />
            <Route path="/geral" exact>
             
              <Geral 
                // altitude={this.state.altitude} 
                // pressure={this.state.pressure} 
                // baterry={this.state.baterry}
                // serie_accs={this.state.serie_accs}
                 
                  navdata={this.state.navdata}
                  gps={this.state.gps}
              
              />

            </Route>
            
          </BrowserRouter>
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