
import React, { Component} from "react";
// import styled from 'styled-components';
import BaterryMeterStyle from "./styled.js";



const BaterryMeter = (props) => {
    let percent = props.percent;
    return( 
       
        <BaterryMeterStyle>
            <div className="level-shape">
                <div className="level-fill" style={{width: percent + "%"}}></div>
            </div>
            <div className="label-percent">{percent}%</div>
        </BaterryMeterStyle>
    );
};

export default BaterryMeter;