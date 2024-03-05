import React from 'react'

const MainChatSection = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const date = new Date();
    console.log(date)
    const showDate = date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
  return (
    <div className='flex justify-center'>
        <div>
            <hr />
        </div>
        <div className='mt-16 mb-7 text-gray-400 font-sans font-medium text-xl' >
        {showDate}
        </div>
    </div>
  )
}

export default MainChatSection