import React, { useEffect, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useMediaQuery } from '@mui/material';

function Content() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [items, setItems] = useState([]);
    const [selectedField, setSelectedField] = useState(null);
    const [selectedIdx, setSelectedIdx] = useState(-1);

    const isDesktop = useMediaQuery('(min-width: 800px)');
    const isTablet = useMediaQuery('(min-width: 480px) and (max-width: 799px)');
    const isPhonePortrait = useMediaQuery('(max-width: 479px) and (orientation: portrait)');
    const isPhoneLandscape = useMediaQuery('(max-width: 812px) and (orientation: landscape)');

    async function fetchItems() {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    useEffect(() => {
        fetchItems();
    }, [BASE_URL]);

    const handleFocus = (item) => {
        setSelectedField({ ...item });
        setSelectedIdx(item.id);
    };

    const handleChange = (key, value) => {
        setSelectedField((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    async function editFields(){
        try {
            const url = `${BASE_URL}/${selectedIdx}`
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedField),
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            fetchItems();
            return result;
        } catch (error) {
            console.error('PUT request failed:', error);
            throw error;
        }
    }

    const handleBlur = () => {
        editFields();
    }

    return (
        <div className="product-table">
            <div className="table-header">
                {isDesktop && (
                    <div className="header-item article-no">
                        <span>Article No.</span>
                        <ArrowDownwardIcon style={{ color: '#67e8f9' }} />
                    </div>
                )}
                <div className="header-item product-service">
                    <span>Product / Service</span>
                    <ArrowDownwardIcon style={{ color: '#4ade80' }} />
                </div>
                {isDesktop && <div className="header-item in-price">In Price</div>}
                <div className="header-item price">Price</div>
                {isDesktop && (
                    <>
                        <div className="header-item unit">Unit</div>
                        <div className="header-item in-stock">In Stock</div>
                        <div className="header-item description">Description</div>
                    </>
                )}
                <div className="header-item"></div>
            </div>

            {items.map((e) => {
                const isSelected = selectedIdx === e.id;

                return (
                    <div key={e.id} className="table-row">
                        {isDesktop && (
                            <input
                                type="text"
                                onFocus={() => handleFocus(e)}
                                onChange={(ev) => handleChange('articleNo', ev.target.value)}
                                onBlur={handleBlur}
                                className="row-item article-no"
                                value={isSelected ? selectedField.articleNo : e.articleNo}
                            />
                        )}
                        <input
                            type="text"
                            onFocus={() => handleFocus(e)}
                            onChange={(ev) => handleChange('product', ev.target.value)}
                            onBlur={handleBlur}
                            className="row-item product-service"
                            value={(isSelected ? selectedField.product : e.product).slice(0, 40)}
                        />
                        {isDesktop && (
                            <input
                                type="number"
                                onFocus={() => handleFocus(e)}
                                onChange={(ev) => handleChange('inPrice', ev.target.value)}
                                onBlur={handleBlur}
                                className="row-item in-price"
                                value={isSelected ? selectedField.inPrice : e.inPrice}
                            />
                        )}
                        <input
                            type="number"
                            onFocus={() => handleFocus(e)}
                            onChange={(ev) => handleChange('price', ev.target.value)}
                            onBlur={handleBlur}
                            className="row-item price"
                            value={isSelected ? selectedField.price : e.price}
                        />
                        {isDesktop && (
                            <>
                                <input
                                    type="text"
                                    onFocus={() => handleFocus(e)}
                                    onChange={(ev) => handleChange('unit', ev.target.value)}
                                    onBlur={handleBlur}
                                    className="row-item unit"
                                    value={isSelected ? selectedField.unit : e.unit}
                                />
                                <input
                                    type="number"
                                    onFocus={() => handleFocus(e)}
                                    onChange={(ev) => handleChange('inStock', ev.target.value)}
                                    onBlur={handleBlur}
                                    className="row-item in-stock"
                                    value={isSelected ? selectedField.inStock : e.inStock}
                                />
                                <input
                                    type="text"
                                    onFocus={() => handleFocus(e)}
                                    onChange={(ev) => handleChange('desc', ev.target.value)}
                                    onBlur={handleBlur}
                                    className="row-item description"
                                    value={(isSelected ? selectedField.desc : e.desc).slice(0, 40)}
                                />
                            </>
                        )}
                        <div className="row-item more-options">
                            <span className="material-icons">...</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Content;
