import React from "react";
import { Routes, Route } from "react-router-dom";

import DefaultLayout from "components/layout";
import Forbidden from "./Forbidden";
import Home from "./Home";

const App: React.FC = () => {
    return (
        <Routes>
            <DefaultLayout>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<Forbidden/>} />
            </DefaultLayout>
        </Routes>
    );
};

export default App;
