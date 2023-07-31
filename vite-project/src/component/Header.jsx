// import React from 'react';
import Logo from '../assets/Logo.jpg';
import { Link } from "react-router-dom";

const Header = ()=>{    
    return(
        <>
        <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor:"grey",
                padding:" 0 12px",
                boxaShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
            <img src={Logo} className=" flex "  />
            <div className="navarItems  ">
                     <Link to="/" className="navLink">home</Link> 
                     <Link to="/cart" className="navLink">cart</Link> 
                     <span className='cartCount' >cart items: 0</span>
            </div>
        </div>
        
        </>

    );
}
 export default Header;