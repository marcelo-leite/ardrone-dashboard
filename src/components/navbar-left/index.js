
import React, { Component} from "react";
import {FaTv, FaMapMarkedAlt, FaLocationArrow, FaVideo, FaCog} from 'react-icons/fa';
import { NavbarLeftStyle } from "./styled";
import { Link } from "react-router-dom";

const iconsize = "1.2rem";
class NavbarLeft extends Component{
    render(){
        return(
            <NavbarLeftStyle>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/geral" className="navbar-link">
                            <FaTv size={iconsize}/>
                        </Link>
                    </li>
                    
                    {/* <li className="navbar-item">
                        <Link className="navbar-link">
                            <FaMapMarkedAlt size={iconsize}/>
                        </Link>
                    </li> */}
                    
                    {/* <li className="navbar-item">
                        <Link className="navbar-link">
                            <FaLocationArrow size={iconsize}/>
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link className="navbar-link">
                            <FaVideo size={iconsize}/>
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link className="navbar-link">
                            <FaCog size={iconsize}/>
                        </Link>
                    </li> */}
                    
                </ul>
            </NavbarLeftStyle>
        )
    }
}

export default NavbarLeft;