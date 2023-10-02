import React, { useState } from 'react'
import LPNavbar from '../Components/LandingPageComps/LPNavbar'
import LPSidebar from '../Components/LandingPageComps/LPSidebar'
import './LandingPage.css'
import MainContent from './MainContent'

const LandingPage = () => {
    const [activeTab, SetActiveTab] = useState([
        true, false, false, false, false
    ]);
    const setSelected = (idx) => {
        SetActiveTab(prevActiveTab => {
            const newArr = [...prevActiveTab];
            for (let i = 0; i < prevActiveTab.length; i++) {
                newArr[i] = false;
                if (i === idx) {
                    newArr[i] = true;
                }
            }
            console.log(newArr);
            return newArr
        }
        )
    }
    return (
        <>
            <LPNavbar></LPNavbar>
            <section className='landing-page'>
                <LPSidebar activeTab={activeTab} setSelected={setSelected}/>
                <MainContent activeTab={activeTab}/>
            </section>
        </>
    )
}

export default LandingPage