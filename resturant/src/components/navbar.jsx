
import React from 'react'
import logo from "../assets/logo.svg"
export const Navbar = () => {
  return (
    <section classNameName="navbar">
        <div className="container">
            <img className="logo" src={logo} alt=""/>
            <div className="location">
                <span className="city"> Siliguri</span>
                <span className="state">Westbengal, India</span>
            </div>
            <div className="navbar_options">
                <div className="navbar_option">
                    <span className="material-icons"> person outline</span> Sign In
                </div>
                <div className="navbar_option">
                    <span className="material-icons">
                        shopping bag
                        </span> Cart
                </div>
                <div className="navbar_option">
                    <span className="material-icons">support</span> Help
                </div>
                <div className="navbar_option">
                    <span className="material-icons">search</span> Search
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Navbar
