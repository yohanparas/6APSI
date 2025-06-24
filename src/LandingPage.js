// This is the Home Page of the project
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate(); 
    
    const handleLogin = () => {
    // Redirect to home page after login
    navigate('/login'); 
    };

    return (
        <div className='landing-container'>
            {/* Main title */}
            <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h1 className='landing-title'>Welcome to Home Page</h1>
                <p className='landing-subtitle'>Some text here.</p>
            </header>

            {/* Content */}
            <main style={{ maxWidth: '800px', margin: '0 auto' }}>
                <section style={{ marginBottom: '2rem' }}>
                    <h2 className='landing-title'>About Me</h2>
                    <p className='landing-subtitle'>
                        Paras, Joseph Yohan D. <br/>6APSI CS-401
                    </p>
                </section>
            </main>

            {/* Button */}
            <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button className='landing-button' onClick={handleLogin}>LOGIN</button>
            </footer>
        </div>
    );
};

export default LandingPage;