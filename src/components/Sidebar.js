import React, { useState } from 'react';
// import './Sidebar.css'; // Add your styles here

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(""); // Tracks the currently active menu

    const handleMenuClick = (menu) => {
        setActiveMenu(menu === activeMenu ? "" : menu); // Toggle active menu
    };

    return (
        <aside className="sidebar">
            <ul className="menu">
                <li
                    className={`menu-item ${activeMenu === "home" ? "active" : ""}`}
                    onClick={() => handleMenuClick("home")}
                >
                    <a href="/"><i className="bi bi-house"></i> Home</a>
                </li>

                <li
                    className={`menu-item ${activeMenu === "public" ? "active" : ""}`}
                    onClick={() => handleMenuClick("public")}
                >
                    <a href="#public"><i className="bi bi-globe-americas"></i> PUBLIC</a>
                </li>
                {activeMenu === "public" && (
                    <ul className="sub-menu">
                        <li><a href="/">Questions</a></li>
                        <li><a href="/">Tags</a></li>
                        <li><a href="/">Users</a></li>
                    </ul>
                )}

                <li
                    className={`menu-item ${activeMenu === "collectives" ? "active" : ""}`}
                    onClick={() => handleMenuClick("collectives")}
                >
                    <a href="#collectives"><i className="bi bi-tags"></i> COLLECTIVES</a>
                </li>
                {activeMenu === "collectives" && (
                    <ul className="sub-menu">
                        <li><a href="/">Explore Jobs</a></li>
                    </ul>
                )}

                <li
                    className={`menu-item ${activeMenu === "jobs" ? "active" : ""}`}
                    onClick={() => handleMenuClick("jobs")}
                >
                    <a href="#find-jobs"><i className="bi bi-briefcase"></i> FIND JOBS</a>
                </li>
                {activeMenu === "jobs" && (
                    <ul className="sub-menu">
                        <li><a href="/">Jobs</a></li>
                        <li><a href="/">Companies</a></li>
                    </ul>
                )}

                <li
                    className={`menu-item ${activeMenu === "teams" ? "active" : ""}`}
                    onClick={() => handleMenuClick("teams")}
                >
                    <a href="#teams"><i className="bi bi-plus-circle"></i> TEAMS</a>
                </li>
                {activeMenu === "teams" && (
                    <ul className="sub-menu">
                        <li><a href="/">+ Create a Team</a></li>
                    </ul>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;
