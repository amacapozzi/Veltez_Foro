import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import TableToken from "../pages/TableToken";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route exact path="/admin" element={<Admin/>}/>
                <Route exact path="/admin/tokens" element={<TableToken/>}/>
                <Route exact path="*" element={<Error/>}/>

            </Routes>
        </BrowserRouter>

    )
}
 
export default Router;
 
