import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const AdminRoute = () => {
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const { data: { user }, error: userError } = await supabase.auth.getUser();
                
                if (userError) {
                    navigate('/login');
                    setError('Error fetching user data');
                    return;
                }

                if (user) {
                    // Fetch user roles from Supabase
                    const { data, error: roleError } = await supabase
                        .from('profiles') // Make sure you have a "profiles" table with roles
                        .select('role')
                        .eq('user_id', user.id) // Ensure user_id matches your profile column name
                        .single();

                    if (roleError) {
                        setError('Error fetching role');
                        return;
                    }

                    if (data?.role === 'admin') {
                        setIsAdmin(true);
                    } else {
                        setIsAdmin(false);
                    }
                } else {
                    setIsAdmin(false); // User is not logged in
                }
            } catch (err) {
                console.error(err);
                setError('An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };

        checkAdmin();
    }, []);

    if (loading) return <p>Loading...</p>; // Loading state while checking user and role
    if (error) return <p>{error}</p>; // Display errors if any

    // Redirect to login page if not admin
    return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
