import React from "react";

import "./styles.scss";

const CustomImageIcon = ({ img }) => {
    return (
        <div className="custom-icon" >
            <img className="custom-icon__img" src={img} alt="icon" />
        </div>
    );
};

export default CustomImageIcon;
