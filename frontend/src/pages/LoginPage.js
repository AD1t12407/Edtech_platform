import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../services/api';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const response = await loginUser({ username, password });
            dispatch({ type: 'LOGIN', payload: response.data });
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" 
            />
            <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
