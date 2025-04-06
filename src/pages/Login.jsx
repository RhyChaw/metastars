import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import styles from '../styles/Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        // Sign in the user
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (signInError) {
            setError(signInError.message);
            return;
        }

        const userId = signInData.user?.id;

        if (!userId) {
            setError('Unable to fetch user ID.');
            return;
        }

        console.log(`Attempting to fetch profile for user_id: ${userId}`);

        // Check if the user exists in the profiles table
        const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('user_id', userId)  // Ensure user_id is used here
            .maybeSingle();

        if (profileError) {
            console.error('Error fetching profile:', profileError.message);
            setError('Login successful, but failed to verify user profile: ' + profileError.message);
            return;
        }

        console.log('Profile data:', profileData);

        if (!profileData) {
            // If profile doesn't exist, create a new one with default role
            const { error: createProfileError } = await supabase
                .from('profiles')
                .insert([{ user_id: userId, role: 'user' }]); // Default role set to 'user'

            if (createProfileError) {
                console.error('Error creating profile:', createProfileError.message);
                setError('Failed to create user profile: ' + createProfileError.message);
                return;
            }

            console.log('User profile created successfully with default role!');
        }

        // Check if the user has the admin role
        if (profileData?.role === 'admin') {
            console.log('User is an admin, redirecting to admin page');
            navigate('/admin');
        } else {
            setError('You do not have admin access.');
            console.error('User does not have admin role');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h2 className={styles.title}>Admin Login</h2>
                {/* {error && <p className={styles.error}>{error}</p>} */}
                <form onSubmit={handleLogin} className={styles.form}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
