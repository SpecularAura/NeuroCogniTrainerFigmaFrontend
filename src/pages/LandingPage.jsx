import React from 'react'
import LPNavbar from '../Components/LandingPageComps/LPNavbar'
import LPSidebar from '../Components/LandingPageComps/LPSidebar'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <>
            <LPNavbar></LPNavbar>
            <section className='landing-page'>
                <LPSidebar />
                <div className='text-section'>
                    <div className='text-content'>
                        <span className='lp-heading'>Therapy made Easier</span>
                        <p className='lp-text'>Say goodbye to tiresome therapy procedures!</p>
                        <p className='lp-text' style={{
                            alignSelf: 'flex-start'
                        }}>Find all you need at one place</p>
                    </div>
                </div>
                <div className='image-section'></div>
                <div className='lp-image'>
                    <img src="./LandinPage.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default LandingPage