// This is the Home Page of the project
import React from 'react';
import './styles/LandingPage.css';

const LandingPage = () => {
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
        </div>
    );
};

export default LandingPage;