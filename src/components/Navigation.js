import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to = "/profile">My Profile</Link>
            </li>
            <li>
                <Link to = "/">Home</Link>
            </li>
        </ul>
    </nav>
);
export default Navigation;