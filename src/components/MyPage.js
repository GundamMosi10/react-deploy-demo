import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Socials from './pages/Socials';
import Resume from './pages/Resume';

export default function MyPage() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Socials') {
            return <Socials />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}