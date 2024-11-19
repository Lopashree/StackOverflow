import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li><a href="/"><i className="bi bi-house"></i> Home</a></li>
                <li><a href="/"><i className="bi bi-globe-americas"></i> PUBLIC</a>                </li>
                <ul className='sub-menu'>
                    <li><a href="/">Questions</a></li>
                    <li><a href="/">Tags</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
                <li><a href="/"><i className="bi bi-tags"></i> COLLECTIVES</a></li>
                <ul className='sub-menu'>
                    <li><a href="/">Explore Jobs</a></li>
                </ul>
                <li><a href="/"><i className="bi bi-briefcase"></i> FIND JOBS</a></li>
                <ul className='sub-menu'>
                    <li><a href="/">Jobs</a></li>
                    <li><a href="/">Companies</a></li>
                </ul>
                <li><a href="/"><i className="bi bi-plus-circle"></i> TEAMS</a></li>
                <ul className='sub-menu'>
                    <li><a href="/">+ Create a Team</a></li>
                </ul>
            </ul>
        </aside>
    );
};


export default Sidebar;
