import React, { Component} from "react";
import { FaLink, FaThermometerThreeQuarters } from "react-icons/fa";
import {WiBarometer} from "react-icons/wi"
import Header from "../../../components/header/index.js";
import NavbarLeft from "../../../components/navbar-left/index.js";



// Graphs
import ReviewsBar from '../../../components/circular-progress-bar/index.js';
import BaterryMeter from "../../../components/progress-meter/index.js";

// MAPS API
import MapBox from "../../../components/map-container/google/MapContainer.js";
// import MapBox from "../../../components/map-container/bing/MapContainer.js";
// import MapBox from "../../../components/map-container/open-street-map/MapContainer";




import { GeralStyled } from "./styled";

class Geral extends Component{
    render(){
      return(
        <GeralStyled>
                <div className="dash-board">
                    <div className="dash-info">
                        <div className="dash-title">Ardrone Dash Board </div>
                        <div className="dash-id">
                            <span> <FaLink/> Client ID:</span>
                            <span> AADH872HD98AHA8DHAS89DHADOHA9DOHAS7DYA8DYAD87YD7YA</span>
                        </div> 
                    </div>
                    <div className="dash-data">
                        <div className="box-data box-col">

                        
                            <div className="box-data-1 box-row">
                                <div className="box-col">
                                    <div className="box-baterry box-s">
                                        <div className="box-title">
                                            NIVEL BATERIA
                                        </div>
                                        <BaterryMeter></BaterryMeter>
                                    </div>

                                    <div className="sensor-list box-row">
                                        <div className="box-pressao box-s">
                                            <div className="box-title">
                                                PRESSÃO
                                            </div>
                                            <div className="sensor-value">
                                                    <div>
                                                        97896
                                                    </div>
                                                    
                                                    <span className="sensor-unit">
                                                        Pa
                                                    </span>
                                            </div>
                                        </div>

                                        <div className="box-altitude box-s" style={{flexGrow:2}}>
                                            <div className="box-title">
                                                ALTITUDE
                                            </div>
                                            <div className="sensor-value">
                                                    <div>
                                                        {this.props.altitude.toFixed(2)}
                                                    </div>
                                                    
                                                    <span className="sensor-unit">
                                                        M
                                                    </span>
                                            </div>
                                        </div>

                                        <div className="box-gyro  box-s" style={{flexGrow:3}}>
                                            <div className="box-title">
                                                ORIENTAÇÃO
                                            </div>
                                            <div className="sensor-value" >
                                                
                                                <svg width="63" height="74" viewBox="0 0 63 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M57.8415 1.05455C59.8941 -0.268737 62.5833 1.28387 62.4635 3.72305L59.2001 70.2C59.0555 73.1437 55.1968 74.1361 53.65 71.6273L37.2137 44.9687C36.6835 44.1089 35.7564 43.5736 34.7467 43.5444L3.44149 42.6394C0.495459 42.5542 -0.574495 38.7163 1.90258 37.1193L57.8415 1.05455Z" fill="white"/>
                                                </svg>

                                            </div>
                                        </div>

                                    </div>
                                    

                                </div>
                                
                                <div className="box-speed  box-s">
                                    <ReviewsBar score="60" unit="KM/H"/>

                                </div>
                            </div>
                            <div className="box-pwm  box-s">
                                <div className="box-item">
                                    <ReviewsBar score="40" unit="RPM"/>
                                </div>
                                <div className="box-item">
                                    <ReviewsBar score="60" unit="RPM" />
                                </div>
                                <div className="box-item">
                                    <ReviewsBar score="23" unit="RPM"/>
                                </div>
                                <div className="box-item">
                                    <ReviewsBar score={this.props.altitude.toFixed(1)*10} unit="RPM"/>
                                </div>
                            </div>
                        </div>

                        <div className="box-maps box-s">
                            <div className="map-button">
                                <button className="dash-button active">
                                    MAPS
                                </button>
                                <button className="dash-button">
                                    INFO
                                </button>
                            </div>
                            

                            <MapBox></MapBox>

                        </div>
                        
                        

                    </div>
                </div>


                
                
        

            </GeralStyled>
       

        
        

      );
    }
  }
  
  export default Geral;