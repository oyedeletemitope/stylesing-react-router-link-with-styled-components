import React from "react";
import { Link } from "react-router-dom";
import {NavbarContainer,NavbarLinkContainer,NavbarLink} from '../styles/NavStyle';
export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props) => {
    return (
    
        <NavbarContainer>
            <NavbarLinkContainer>
               <NavbarLink className="nav-link active" to="/home">
                    Home
                </NavbarLink>
                <NavbarLink className="nav-link" to="/about">
                    About Us
                </NavbarLink>
                <NavbarLink className="nav-link" to="/contact">
                    Contact Us
                </NavbarLink>
               
         </NavbarLinkContainer>
        </NavbarContainer>
    )
}
export default Navbar;

