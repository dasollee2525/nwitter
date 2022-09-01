import { authService } from "fbase";
import React from "react";
import { Navigate } from "react-router-dom";

export default () => {
    const onLogOutClick = () => {
        authService.signOut();
        Navigate("/");
    }
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};