import React from 'react';


const Footer = () => {

    const styles = {
        textAlign: 'center',
        marginTop: '20px'
    };
    const p = {
        fontSize: '14px',
    };

    return (
        <div style={styles}>
            <p style={p}>Developed by Rodrigo Dugin</p>
        </div>
    );
}

export default Footer;
