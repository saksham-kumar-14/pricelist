import React from 'react'
import { SearchRounded, NewLabel, More, Print } from '@mui/icons-material'
import { useMediaQuery } from '@mui/material';

function SearchNav() {

    const utilsMenu = [
        {
            name: "New Product",
            icon: <NewLabel style={{color: '#34d399'}} />
        },{
            name: "Print List",
            icon: <Print style={{color: '#60a5fa'}} />
        },{
            name: "Advanced",
            icon: <More style={{color: '#7dd3fc'}} />
        }
    ]

    const isDesktop = useMediaQuery('(min-width: 800px)');
    const isTablet = useMediaQuery('(min-width: 480px) and (max-width: 799px)');
    const isPhonePortrait = useMediaQuery('(max-width: 479px) and (orientation: portrait)')
    const isPhoneLandscape = useMediaQuery('(max-width: 812px) and (orientation: landscape)')

    return (
        <div className='search-container'>
            <div className='search-input-parent-container'>
                <div className='search-input-container'>
                    <input type="text" placeholder='Search Article No' />
                    <SearchRounded className='search-icon' />
                </div>
                <div className='search-input-container'>
                    <input type="text" placeholder='Search Product' />
                    <SearchRounded className='search-icon'/>
                </div>
            </div>

            <div className='utils-container'>
                {
                    utilsMenu.map((e, idx) => {
                        return (
                            <div key={idx} className='utils-btn'>
                                {
                                    isDesktop && <span>{e.name}</span>
                                }
                                {e.icon}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SearchNav