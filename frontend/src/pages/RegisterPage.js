import React, { useState } from 'react';
import { registerUser } from '../services/api';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = async () => {
        try {
            await registerUser({ username, password, role });
            alert('Registration successful');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
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
            <input 
                type="text" 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Role" 
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default RegisterPage;
