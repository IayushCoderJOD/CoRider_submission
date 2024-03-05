import { faEllipsisVertical, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NavigationInfoLayer = () => {
  return (
    <>

    <div className='flex justify-between p-4 m-2 font-semibold text-3xl'>
        <h1> {"<-"} Trip 1 </h1>
        <h1><FontAwesomeIcon icon={faPenToSquare}  /></h1>
    </div>
    <div className='flex justify-between ml-3 mr-3 text-lg'>
        <div className='flex'>
        <img src="" alt="no img" />
        <h1 className='text-gray-500 font-medium'>
            From <span className='text-black font-semibold'>IGI Airport, T3</span>
            <br />
            To <span className='text-black font-semibold'>Sector 28</span>
        </h1>
        </div>
        <button>
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
    </div>
    <hr className='mt-3' />
    </>
  )
}

export default NavigationInfoLayer