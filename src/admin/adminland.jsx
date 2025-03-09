import React from "react";

const AdminDashboard = () => {
    return (
        <>
            <div>
                <h1>Admin Dashboard</h1>
                <p>Welcome to the admin dashboard. Here you can manage the application.</p>
                <div className="admin-columns">
                    <div className="column">
                        <h2>Messages</h2>
                        {/* Add Messages component or functionality here */}
                    </div>
                    <div className="column">
                        <h2>Member Directory</h2>
                        {/* Add Member Directory component or functionality here */}
                    </div>
                    <div className="column">
                        <h2>Blogs</h2>
                        {/* Add Blogs component or functionality here */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;