import React from "react";
import Footer from "../Footer";
import Header from "../nav";
import Filter from "../Filter";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
           
            {children}
            <Footer />
        </>
    )
}
export default Layout;