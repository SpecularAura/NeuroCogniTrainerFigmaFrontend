import React, { useState } from 'react'
import './LandingPage.css'
const MainContent = ({ activeTab }) => {
    const Sections = [
        "Home",
        "Profile",
        "Patient",
        "Logout",
        "Settings"
    ]


    const [count, SetCount] = useState(0);

    const increment = () => {
        SetCount(prev => prev + 1)
    }
    const idx = activeTab.indexOf(true);
    if (idx == 0) {
        return (
            <>
                <div className='text-section'>
                    <div className='text-content'>
                        <span className='lp-heading'>Therapy made Easier</span>
                        <p className='lp-text'>Say goodbye to tiresome therapy procedures!</p>
                        <p className='lp-text' style={{
                            alignSelf: 'flex-start'
                        }}>Find all you need at one place</p>

                        The Count is: {count}
                        <button onClick={increment}>Increment</button>
                    </div>
                </div>
                <div className='image-section'></div>
                <div className='lp-image'>
                    <img src="./LandinPage.png" alt="" />
                </div>
            </>
        )
    } else {
        return (
            <>

                This is page {Sections[idx]}
            </>
        )
    }
}

export default MainContent