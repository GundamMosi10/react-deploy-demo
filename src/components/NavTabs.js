import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#About"
                   onClick={() => handlePageChange('About')}
                   className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className="nav-item">
                <a href="#Portfolio"
                   onClick={() => handlePageChange('Portfolio')}
                   className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a href="#Socials"
                   onClick={() => handlePageChange('Socials')}
                   className={currentPage === 'Socials' ? 'nav-link active' : 'nav-link'}>Socials</a>
            </li>
            <li className="nav-item">
                <a href="#Contact"
                   onClick={() => handlePageChange('Contact')}
                   className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
        </ul>
    );
}

export default NavTabs; 