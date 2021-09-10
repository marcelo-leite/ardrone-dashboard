import React, { Component} from "react";


import Routes from "./routes";
import "./styled.scss"


const DashMap = (props) => {
    return(
        <div className="box-maps box-s">
            <Routes gps={props.gps}></Routes>
        </div>
    );
}

export default DashMap;
