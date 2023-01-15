// noinspection ES6CheckImport

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {Context} from "../context/Context";

const ProtectedRoute = () => {
    return (
        <Context.Consumer>
            {({user}) => user.isAuth ? <Outlet context={[user]} /> : <Navigate to="/login" />}
        </Context.Consumer>
    )
};

export default ProtectedRoute;