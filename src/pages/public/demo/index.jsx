import React, { useState, useEffect} from "react";
import { Route, BrowserRouter, Redirect} from "react-router-dom";


import Geral from "./../../private/geral"
import NavbarLeft from "./../../../components/navbar-left";

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const Demo = (props) => {
  const [data, setData] = useState({
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
  });
  
  return( 
    <div className="wrapper f-col">
      <BrowserRouter>
        <NavbarLeft/>
        <Redirect to="/demo/geral" />
        <Route path="/demo/geral" exact>
        
          <Geral        
              navdata={data.navdata}
              gps={data.gps}
          />
        </Route>
        
      </BrowserRouter>
    </div> 
  );
};

export default Demo;
