import React from "react";

import Header from "../header";

const SinglePageLayout = ({ children, className = "", ...rest }) => {
    return (
        <div className={"Page--single " + className} {...rest}>
            <Header />
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default SinglePageLayout;
