import React from "react";

import Header from "../header";

const ScrollPageLayout = ({ children, ...rest }) => {
    return (
        <div className="Page--scroll" {...rest}>
            <Header />
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default ScrollPageLayout;
