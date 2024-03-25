import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear authentication token from local storage
        localStorage.removeItem('authToken');
        // Redirect to the login page 
        navigate('/');
    };
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/app/home">Home</Link>
                </li>
                <li>
                    <Link to="/app/profile">Profile</Link>
                </li>
                 <li>
                    <button onClick={handleLogout}>Lo</button>
                </li>
            </ul>
</nav>
<Outlet />
    </>
    )
}
export default Layout;