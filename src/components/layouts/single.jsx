import React from "react";

import Header from "../header";

const SinglePageLayout = ({ children, ...rest }) => {
    return (
        <div className="Page--single" {...rest}>
            <Header />
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default SinglePageLayout;
