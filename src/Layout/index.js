import Header from "../components/header";
import React from "react";

const Layout = ({ children }) => {
    // console.log(children);
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default Layout;
