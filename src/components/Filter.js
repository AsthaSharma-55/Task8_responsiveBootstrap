import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import Home from "./Home";
import About from "./about";
import Profile from "./profile";
import Layout from "./layout/layout";

const Filter = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [

        {
            path: "/home",
            name: "Home",
            component: <Home />

        },
        {
            path: "/about",
            name: "About",
            component: <About />
        },
        {
            path: "/profile",
            name: "Profile",
            component: <Profile />
        }

    ]
    return (
        <Layout>
            <>
                <div>
                    <div className="container-fluid m-0 p-0">
                        <div className="row m-0 p-0">

                            {/* <div style={{ height: "600px", marginLeft: "-289px", width: isOpen ? "200px" : "50px" }} className="sidebar"> */}
                            <div className="idebar col-xs-12  col-sm-12 col-md-12 col-lg-6 " style={{ backgroundColor: "whitesmoke", height: "615px", width: isOpen ? "200px" : "50px" }}>
                                <div className="top_section">
                                    <h1 style={{ display: isOpen ? "inline-block" : "none" }} className="logo">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdD2Boi3jt_XLBGesRN0inV-tOVDhy9N1OPJL_DK-lF_Q81-nEk1-FDrZR6bBcapsoI0&usqp=CAU"
                                            alt="Bootstrap"
                                            style={{ height: "31px", width: "44px", borderRadius: "50%" }} />
                                    </h1>
                                    <div style={{ display: "inline-block", marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                                        <FaBars onClick={toggle} />
                                    </div>
                                </div>
                                {
                                    menuItem.map((item, index) => (
                                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                            <div className="icon">{item.icon}</div>
                                            <div style={{ color: "black", marginTop: "58px", height: "86px", display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                                        </NavLink>
                                    ))
                                }

                            </div>
                            <main style={{maxWidth:"64%"}}>{children}</main>
                        </div>
                    </div >
                    
                </div>
            </>
        </Layout>

    )
}
export default Filter