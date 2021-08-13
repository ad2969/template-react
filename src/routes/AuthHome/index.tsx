import React from "react";

import Layout from "../../components/layouts/single";

import logo from "../../assets/logo.svg";
import "./styles.scss";

const AuthHome: React.FunctionComponent = () => {
    return (
        <Layout className="Page AuthHome">
            <h2>Welcome to Authenticated Home</h2>
            <img src={logo} className="React-logo" alt="logo" />
        </Layout>
    );
};

export default AuthHome;
