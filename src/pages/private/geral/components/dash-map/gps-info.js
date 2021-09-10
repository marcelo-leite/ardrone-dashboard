import React, { Component} from "react";

const GpsInfo = (props) => {
    return(
       <div className="gps-info">
           <div className="info-item">
               <label>LATITUDE</label>
               <span>{props.gps.lat}</span>
           </div>
           <div className="info-item">
               <label>LONGITUDE</label>
               <span>{props.gps.lng}</span>
           </div>
           <div className="info-item">
               <label>ELEVAÇAO</label>
               <span>{props.gps.alt} M</span>
           </div>

       </div>
    );
}

export default GpsInfo;
