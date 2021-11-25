import React from 'react'
import '../App.css'
import Spinner from '../pics/Spin.gif'



function Loader() {
    return (
        <>
            <img className='Spinner' src={Spinner} alt="Loading..." />

        </>
    )
}

export default Loader
