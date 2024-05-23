// NavBar.jsx
import './navbar.css';
import { Link } from 'react-router-dom';
import aurangabad from '../../Asset/Nav_Data/aurangabad.jpg';
import mumbai from '../../Asset/Nav_Data/mumbai.jpg';
import nagpur from '../../Asset/Nav_Data/nagpur.jpg';
import nashik from '../../Asset/Nav_Data/nashik.jpg';
import pune from '../../Asset/Nav_Data/pune.jpg';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-icon">
                <Link to="/city/Aurangabad" style={{textDecoration:'none'}}>
                    <img src={aurangabad} alt='aurangabad' className="icon-image"/>
                    <p className="icon-text">Aurangabad</p>
                </Link>
            </div>
            <div className="navbar-icon">
                <Link to="/city/Mumbai"style={{textDecoration:'none'}}>
                    <img src={mumbai} alt='mumbai' className="icon-image"/>
                    <p className="icon-text">Mumbai</p>
                </Link>
            </div>
            <div className="navbar-icon">
                <Link to="/city/Nagpur"style={{textDecoration:'none'}}>
                    <img src={nagpur} alt='nagpur' className="icon-image"/>
                    <p className="icon-text">Nagpur</p>
                </Link>
            </div>
            <div className="navbar-icon">
                <Link to="/city/Nashik"style={{textDecoration:'none'}}>
                    <img src={nashik} alt='nashik' className="icon-image"/>
                    <p className="icon-text">Nashik</p>
                </Link>
            </div>
            <div className="navbar-icon">
                <Link to="/city/Pune"style={{textDecoration:'none'}}>
                    <img src={pune} alt='pune' className="icon-image"/>
                    <p className="icon-text">Pune</p>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
