import React from "react";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>{children}</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default DefaultLayout;
