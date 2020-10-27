import React from 'react';
import "./navbar.scss";
import Logo from '../../assets/avatar.jpg';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <p className="logo">Mylawlegal</p>
            <h3>
                Lawyer Dashboard
            </h3>
            <div className="nav-links">
                <p className="link">Support</p>
                <p className="link">FAQ</p>
                <div className="greeting">
                    <p>Hello</p>
                    <p>Chimdia Anyiam</p>
                </div>
                <img src={Logo} alt="avatar" className="avatar"/>
            </div>
        </div>
     );
}
 
export default Navbar;