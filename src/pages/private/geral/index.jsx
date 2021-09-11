
import React, { Component} from "react";
import { FaLink, FaThermometerThreeQuarters } from "react-icons/fa";
import {WiBarometer} from "react-icons/wi"
import Header from "../../../components/header/index.js";
import NavbarLeft from "../../../components/navbar-left/index.js";

// Graphs
import ReviewsBar from '../../../components/circular-progress-bar/index.js';
import BaterryMeter from "../../../components/progress-meter/index.js";
import ChartContainer from "../../../components/chart-container/index.js";
// import Chart from "react-apexcharts";








import { GeralStyled } from "./styled";
import { Color } from "@antv/attr";
import DashMap from "./components/dash-map/index";

class Geral extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            series: []
            
        };
    }

    
    render(){
      return(
        <GeralStyled>
                <div className="dash-board">
                    <div className="dash-info">
                        <div className="dash-title">Ardrone Dashboard </div>
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
                                        <BaterryMeter percent={this.props.navdata.battery.toFixed(0)}></BaterryMeter>
                                    </div>

                                    <div className="sensor-list box-row">
                                        <div className="box-pressao box-s">
                                            <div className="box-title">
                                                PRESSÃO
                                            </div>
                                            <div className="sensor-value">
                                                    <div>
                                                        {this.props.navdata.pressure}
                                                    </div>
                                                    
                                                    <span className="sensor-unit">
                                                        Pa
                                                    </span>
                                            </div>
                                        </div>

                                        <div className="box-altitude box-s">
                                            <div className="box-title">
                                                ALTITUDE
                                            </div>
                                            <div className="sensor-value">
                                                    <div>
                                                        {this.props.navdata.altitude.toFixed(2)}
                                                    </div>
                                                    
                                                    <span className="sensor-unit">
                                                        M
                                                    </span>
                                            </div>
                                        </div>

                                        <div className="box-gyro  box-s"  >
                                            <div className="box-title">
                                                ORIENTAÇÃO
                                            </div>
                                            <div className="sensor-value">
                                                
                                                <svg width="63" height="74" viewBox="0 0 63 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M57.8415 1.05455C59.8941 -0.268737 62.5833 1.28387 62.4635 3.72305L59.2001 70.2C59.0555 73.1437 55.1968 74.1361 53.65 71.6273L37.2137 44.9687C36.6835 44.1089 35.7564 43.5736 34.7467 43.5444L3.44149 42.6394C0.495459 42.5542 -0.574495 38.7163 1.90258 37.1193L57.8415 1.05455Z" fill="white"/>
                                                </svg>
                                                
                                            </div>
                                        </div>

                                    </div>
                                    

                                </div>
                                
                                <div className="box-speed  box-s">
                                    <ReviewsBar score="2" color="white" max={100} label="SPEED" unit="M/S"/>

                                </div>
                            </div>
                            <div className="box-pwm  box-s">
                                <div className="box-title">
                                    MOTORES
                                </div>
                               <div className="rmp-value">
                                
                                
                                    <div className="box-item">
                                        <ReviewsBar score="40" color="red" unit="RPM" max={500} label="MOTOR 1"/>
                                    </div>
                                    <div className="box-item">
                                        <ReviewsBar score="60" color="#A30CFF" unit="RPM" max={500} label="MOTOR 2"/>
                                    </div>
                                    <div className="box-item">
                                        <ReviewsBar score="23" color="#FF6D1B" unit="RPM" max={500} label="MOTOR 3"/>
                                    </div>
                                    <div className="box-item">
                                        <ReviewsBar score="25" color="rgb(115,211,19)" max={500} unit="RPM" label="MOTOR 4"/>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <DashMap gps={this.props.gps}></DashMap>

                    </div>

                    {/* <div className="dash-data">
                        <div className="box-acess box-s">
                            <div className="box-title">
                                ACELEROMETRO
                            </div>
                            <div className="box-chart">
                                <ChartContainer serie={this.props.serie_accs}>

                                </ChartContainer>
                                
                            </div>
                         
                        </div> 
                    </div> */}
                
                </div>
            </GeralStyled>
       

        
        

      );
    }
  }
  
  export default Geral;