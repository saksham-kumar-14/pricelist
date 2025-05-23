import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FlagIcon from '@mui/icons-material/Flag';
import '../styles/nav.css'

function Nav() {
    return (
        <nav className='nav-container'>
            <div className='nav-subcontainer-1'>
                <div className='nav-user'>
                    <AccountCircleIcon fontSize="large" />
                </div>
                <div className='nav-user-info'>
                    <span className='nav-user-name'>John Andre</span>
                    <span className='nav-user-desc'>Storfjord AS</span>
                </div>
                <div className='hamburger'>
                    ☰
                </div>
            </div>

            <div className='nav-subcontainer-2'>
                <span>Language</span>
                <img className='flag' src="https://storage.123fakturere.no/public/flags/SE.png" alt="" />
            </div>

        </nav>
    )
}

export default Nav