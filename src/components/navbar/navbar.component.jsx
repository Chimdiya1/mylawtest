import React,{useState} from 'react';
import "./navbar.scss";
import Logo from '../../assets/avatar.jpg';
const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return ( 
        <div className="navbar">
            <p className="logo">Mylawlegal</p>
            <h3>
                Lawyer Dashboard
            </h3>
            <div className={`nav-links ${visible?`show`:''}` }>
                <p className="link">Support</p>
                <p className="link">FAQ</p>
                <div className="greeting">
                    <p>Hello</p>
                    <p>Chimdia Anyiam</p>
                </div>
                <img src={Logo} alt="avatar" className="avatar"/>
            </div>
            <div className="menu-btn" onClick={()=>setVisible(!visible)}>
              <span className={`menu-btn__burger ${visible?`show`:''} `}></span>
            </div>
        </div>
     );
}
 
export default Navbar;