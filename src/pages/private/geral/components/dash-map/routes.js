import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Redirect} from "react-router-dom";
import { Link } from "react-router-dom";


// MAPS API
import MapBox from "../../../../../components/map-container/google/MapContainer.js";
// import MapBox from "../../../../../components/map-container/bing/MapContainer.js";
// import MapBox from "../../../../../components/map-container/open-street-map/MapContainer";

import GpsInfo from "./gps-info.js";


const Routes = (props) => {
    const [clicked, setClicked] = useState('');

    const handleClick = (e) => {
        // Manipulacao DOM (Link Active)
        let childNodes = e.target.parentElement.childNodes;
        for(let i = 0; i < childNodes.length; i++){
            childNodes[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
   return(
       
       <BrowserRouter>
            <div className="map-button">
                <Link to="/geral/maps" className="dash-button active" onClick={handleClick}>
                    MAPS
                </Link>
                <Link to="/geral/info" className="dash-button" onClick={handleClick}>
                    INFO
                </Link>
                
            </div>
            <Redirect to="/geral/maps" />

            <Route  path="/geral/maps" exact>
                <MapBox lat={props.gps.lat} lng={props.gps.lng}/>
            </Route>
            <Route  path="/geral/info">
                <GpsInfo gps={props.gps} />
            </Route>
       </BrowserRouter>
   )
}

export default Routes;