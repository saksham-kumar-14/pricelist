import React from 'react';
import '../styles/home.css'
import Nav from './Navbar';
import Sidebar from './SidebarComponent';
import SearchNav from './SearchNav';

function Home() {
    return (
        <div>
            <Nav />
            <div className='main-area'>
                <Sidebar />

                <div className='search-parent-container'>
                    <div className='search-container'>
                        <SearchNav />
                    </div>
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Home
