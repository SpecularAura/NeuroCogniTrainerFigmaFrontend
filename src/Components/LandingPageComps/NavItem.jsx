import React, { useEffect, useState } from 'react';
import './navitem.css'

const NavItem = ({ isSelected, OnClick, Icon, iconText }) => {
    const [selected, SetSelected] = useState(isSelected);
    return (
        <div className={`nav-container${selected ? ' highlight' : ''}`} onClick={OnClick}>
            <div className='icon'>
                {Icon}
            </div>
            <div className='nav-item-text'><span>{iconText}</span></div>
        </div>
    )
}

export default NavItem