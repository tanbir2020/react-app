import React from 'react'
import './search-box.styles.css';
export const SearchBox  = ({handler}) => (
    <input className="search-box" onChange={handler}/>
);