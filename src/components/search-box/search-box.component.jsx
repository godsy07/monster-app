import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, onSearchChange }) => (
    <input 
        className='search'
        type='text' 
        placeholder={placeholder} 
        onChange={onSearchChange}
    />
    );