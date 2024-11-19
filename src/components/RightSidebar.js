import React from 'react';

const RightSidebar = () => {
    return (
        <aside className="right-sidebar">
            <div className="section">
                <h5>The Overflow Blog</h5>
                <ul>
                    <li>The unexpected benefits of mentoring others</li>
                    <li>Podcast 354: Building for AR with Niantic Labs</li>
                </ul>
            </div>
            <div className="section">
                <h5>Hot Meta Posts</h5>
                <ul>
                    <li>Tags (driver) appear to be redundant</li>
                    <li>How to handle dupes where A is closed...</li>
                </ul>
            </div>
            <div className="section">
                <h5>Custom Filter</h5>
                <button>Add Custom Filters</button>
            </div>
        </aside>
    );
};

export default RightSidebar;
