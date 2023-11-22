import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexHome from "../page/indexHome";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<IndexHome/>} path={'/'}/>

            </Routes>
        </BrowserRouter>
    );
};

export default Router;