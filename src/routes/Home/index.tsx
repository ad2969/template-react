import React from "react";

import Layout from "../../components/layouts/single";

import logo from "../../assets/logo.svg";
import "./styles.scss";

const Home: React.FunctionComponent = () => {
    return (
        <Layout className="Home">
            <h2>Welcome to Public Home</h2>
            <img src={logo} className="React-logo" alt="logo" />
        </Layout>
    );
};

export default Home;
