import React from "react";

import Header from "../header";

const ScrollPageLayout = ({ children, className = "", ...rest }) => {
    return (
        <div className={"Page--scroll " + className} {...rest}>
            <Header />
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default ScrollPageLayout;
