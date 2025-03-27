import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const AdminRoute = () => {
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const checkAdmin = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            
            if (user) {
                // Fetch user roles from Supabase
                const { data, error } = await supabase
                    .from('profiles') // Make sure you have a "profiles" table with roles
                    .select('role')
                    .eq('id', user.id)
                    .single();

                if (data?.role === 'admin') {
                    setIsAdmin(true);
                }
            }
            setLoading(false);
        };

        checkAdmin();
    }, []);

    if (loading) return <p>Loading...</p>;
    return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
