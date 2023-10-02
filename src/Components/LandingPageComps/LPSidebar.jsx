import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'
import HomeIcon from '../icons/HomeIcon'
import LogoutIcon from '../icons/LogoutIcon'
import PatientIcon from '../icons/PatientIcon'
import SettingsIcon from '../icons/SettingsIcon'
import ProfileIcon from '../icons/ProfileIcon'
import './lp-sidebar.css'

const LPSidebar = ({ activeTab, SetActiveTab }) => {
    return (
        <div className='lp-sidebar'>
            <div className='logo'>
                <img src="./Logo.png" alt="" />
            </div>
            <div className='nav-items'>
                <NavItem key={0} isSelected={activeTab[0]} OnClick={SetActiveTab} Icon={<HomeIcon />} iconText="Home"></NavItem>
                <NavItem key={1} isSelected={activeTab[1]} OnClick={SetActiveTab} Icon={<ProfileIcon />} iconText="Profile"></NavItem>
                <NavItem key={2} isSelected={activeTab[2]} OnClick={SetActiveTab} Icon={<PatientIcon />} iconText="Patient"></NavItem>
                <NavItem key={3} isSelected={activeTab[3]} OnClick={SetActiveTab} Icon={<LogoutIcon />} iconText="Logout"></NavItem>
                <NavItem key={4} isSelected={activeTab[4]} OnClick={SetActiveTab} Icon={<SettingsIcon />} iconText="Settings"></NavItem>
            </div>
        </div>
    )
}

export default LPSidebar