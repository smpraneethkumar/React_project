import React from 'react'
import { Link } from 'react-router-dom'
import achieves from "../assets/achievers_logo.png"
import { MdAccountCircle } from "react-icons/md";
import { IoMdCart } from 'react-icons/io';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                        <img src={achieves} alt="" ></img>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Shop" className="nav-link active" aria-current="page" >Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link active" aria-current="page" >Cart</Link>
                            </li>
                            <li className="nav-item">
                                <MdAccountCircle />
                            </li>
                            <li className="nav-item">
                               <IoMdCart />
                            </li>
                              
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header