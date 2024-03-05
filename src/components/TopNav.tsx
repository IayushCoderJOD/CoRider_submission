import { faBatteryFull, faCoffee, faSignal, faTowerCell, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const TopNav = () => {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
return (
    <div>
        <ul className='text-md font-bold flex justify-between m-2 ml-6 mr-9'>
            <li className='' >{showTime}</li>
            <li className='flex space-x-3'>
            <li><FontAwesomeIcon icon={faSignal} /></li>
                <li><FontAwesomeIcon icon={faWifi} /></li>
                <li><FontAwesomeIcon icon={faBatteryFull} /></li>
            </li>
        </ul>
    </div>
  )
}

export default TopNav