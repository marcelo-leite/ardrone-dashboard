
import React, { Component} from "react";
import {FaTv, FaMapMarkedAlt, FaLocationArrow, FaVideo, FaCog} from 'react-icons/fa';
import { NavbarLeftStyle } from "./styled";

const iconsize = "1.2rem";
class NavbarLeft extends Component{
    render(){
        return(
            <NavbarLeftStyle>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button className="navbar-link">
                            <FaTv size={iconsize}/>
                        </button>
                    </li>
                    
                    <li className="navbar-item">
                        <button className="navbar-link">
                            <FaMapMarkedAlt size={iconsize}/>
                        </button>
                    </li>
                    
                    <li className="navbar-item">
                        <button className="navbar-link">
                            <FaLocationArrow size={iconsize}/>
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link">
                            <FaVideo size={iconsize}/>
                        </button>
                    </li>

                    <li className="navbar-item">
                        <button className="navbar-link">
                            <FaCog size={iconsize}/>
                        </button>
                    </li>
                    
                </ul>
            </NavbarLeftStyle>
        )
    }
}

export default NavbarLeft;