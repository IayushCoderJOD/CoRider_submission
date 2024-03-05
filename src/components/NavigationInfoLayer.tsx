import React, { useState } from 'react'
import { faEllipsisVertical, faPenToSquare, faPerson, faPhone, faSquarePollHorizontal, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import group from "../assets/group.png"

const NavigationInfoLayer = () => {
    const [toggleSettings,setToggleSettings]=useState(false);
  return (
    <>

    <div className='flex justify-between p-4 m-2 font-semibold text-3xl'>
        <h1> {"<-"} Trip 1 </h1>
        <h1><FontAwesomeIcon icon={faPenToSquare}  /></h1>
    </div>
    <div className='flex justify-between ml-3 mr-3 text-lg'>
        <div className='flex'>
        <img className='h-12 m-2' src={group} alt="no img" />
        <h1 className='text-gray-500  font-semibold  '>
            From <span className='text-black  font-bold'>IGI Airport, T3</span>
            <br />
            To <span className='text-black  font-bold'>Sector 28</span>
        </h1>
        </div>
        <button onClick={()=>{
            setToggleSettings(!toggleSettings)
        }} className='text-xl'>
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
        {
            toggleSettings && <div className='absolute right-3 mt-11 border cursor-pointer border-gray-400 rounded-xl shadow-2xl p-3'>
            <ul>
            <li className=' hover:bg-gray-100 p-2 text-xl font-medium' > <FontAwesomeIcon icon={faUserGroup} /> Members</li>
            <hr />
            <li className=' hover:bg-gray-100 p-2 text-xl font-medium' > <FontAwesomeIcon icon={faPhone} /> Share Numbers</li>
            <hr />
            <li className=' hover:bg-gray-100 p-2 text-xl font-medium' > <FontAwesomeIcon icon={faSquarePollHorizontal} />Report</li>
            </ul>
        </div>
        }
    </div>
    <hr className='mt-3' />
    </>
)
}

export default NavigationInfoLayer