import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'
import HomeIcon from '../icons/HomeIcon'
import LogoutIcon from '../icons/LogoutIcon'
import PatientIcon from '../icons/PatientIcon'
import SettingsIcon from '../icons/SettingsIcon'
import ProfileIcon from '../icons/ProfileIcon'
import './lp-sidebar.css'

const LPSidebar = () => {
    const [activeTab, SetActiveTab] = useState([
        true, false, false, false, false
    ]);

    const setSelected = (idx) => {
        SetActiveTab(prevActiveTab => {
            const newArr = prevActiveTab;
            for(let i = 0; i < prevActiveTab.length; i++) {
                newArr[i] = false;
                if(i === idx) {
                    newArr[i] = true;
                }
            }
            console.log(newArr);
            return newArr
        }
        )
    }

    return (
        <div className='lp-sidebar'>
            <div className='logo'>
                <img src="./Logo.png" alt="" />
            </div>
            <div className='nav-items'>
                <NavItem key={0} isSelected={activeTab[0]} OnClick={() => setSelected(0)} Icon={<HomeIcon />} iconText="Home"></NavItem>
                <NavItem key={1} isSelected={activeTab[1]} OnClick={() => setSelected(1)} Icon={<ProfileIcon />} iconText="Profile"></NavItem>
                <NavItem key={2} isSelected={activeTab[2]} OnClick={() => setSelected(2)} Icon={<PatientIcon />} iconText="Patient"></NavItem>
                <NavItem key={3} isSelected={activeTab[3]} OnClick={() => setSelected(3)} Icon={<LogoutIcon />} iconText="Logout"></NavItem>
                <NavItem key={4} isSelected={activeTab[4]} OnClick={() => setSelected(4)} Icon={<SettingsIcon />} iconText="Settings"></NavItem>
            </div>
        </div>
    )
}

export default LPSidebar