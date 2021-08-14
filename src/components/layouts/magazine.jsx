import React from "react";

import Header from "../header";

const MagazinePageLayout = ({ children, className = "", ...rest }) => {
    return (
        <div className={"Page--magazine " + className} {...rest}>
            <Header />
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default MagazinePageLayout;
