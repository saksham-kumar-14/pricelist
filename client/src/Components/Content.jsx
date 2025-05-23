import React, { useEffect, useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useMediaQuery } from '@mui/material';

function Content() {

    const BASE_URL = import.meta.env.VITE_BASE_URL
    function getItems(){
        try {
            fetch(BASE_URL)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        } catch (error) {
            console.error('Error fetching texts:', error);
        }
    }

    useEffect(() => {
        getItems();
    }, []);

    const [items, setItems] = useState([]);
    const isDesktop = useMediaQuery('(min-width: 800px)');
    const isTablet = useMediaQuery('(min-width: 480px) and (max-width: 799px)');
    const isPhonePortrait = useMediaQuery('(max-width: 479px) and (orientation: portrait)')
    const isPhoneLandscape = useMediaQuery('(max-width: 812px) and (orientation: landscape)')

    return (
        <div className="product-table">
            <div className="table-header">
                {
                    isDesktop && 
                                <div className="header-item article-no">
                                    <span>Article No.</span>
                                    <ArrowDownwardIcon style={{color: '#67e8f9'}} />
                                </div>
                }
                <div className="header-item product-service">
                    <span>Product / Service</span>
                    <ArrowDownwardIcon style={{color: '#4ade80'}} />
                </div>
                {
                    isDesktop && <div className="header-item in-price">In Price</div>
                }
                <div className="header-item price">Price</div>

                {
                    isDesktop && 
                                <>
                                    <div className="header-item unit">Unit</div>
                                    <div className="header-item in-stock">In Stock</div>
                                    <div className="header-item description">Description</div>
                                </>
                }
                <div className="header-item"></div> 
            </div>

            {
                items.map((e) => {
                    return(
                        <div key={e.id} className='table-row'>
                            {
                                isDesktop && <div className='row-item article-no'>{e.articleNo}</div>
                            }
                            <div className='row-item product-service'>{e.product}</div>
                            {
                                isDesktop && <div className='row-item in-price'>{e.inPrice}</div>
                            }
                            <div className='row-item price'>{e.price}</div>
                            {
                                isDesktop && <>
                                                <div className='row-item unit'>{e.unit}</div>
                                                <div className='row-item in-stock'>{e.inStock}</div>
                                                <div className='row-item description'>{e.desc.slice(0, 40)}</div>
                                            </>
                            }
                            <div className="row-item more-options">
                                <span className="material-icons">...</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Content;