import { faCamera, faClipboard, faPaperPlane, faPaperclip, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

interface ChatMessage {
    id: string;
    message: string;
    sender: {
      image: string;
      is_kyc_verified: boolean;
      self: boolean;
      user_id: string;
    };
    time: string;
  }

const ChatSection = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const response = await fetch('https://qa.corider.in/assignment/chat?page=0');
        const data = await response.json();
        console.log(data);
        console.log(data.chats[4].message);
        setChatMessages(data.chats);
      } catch (error) {
        console.error('Error fetching chat messages:', error);
      }
    };
    fetchChatMessages();
  }, []);

  return (
    <>
    <div className='h-full'  style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc' }}>
      {chatMessages.map((message) => (
          <div className='flex p-3 align-middle shadow-2xl '>
        <div>
            <img className=' w-12 h-12 rounded-3xl'  src={message.sender.image} alt="" />
        </div>
        <div className='bg-white border w-[80%] border-gray-200  m-3 text-sm rounded-lg font-sans text-gray-900'  key={message.id} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
          {message.message} 
        </div>
        </div>
      ))}

    </div>
    <div className='flex justify-center'>
      <input type="text" className='w-[90%] p-3 text-xl rounded-xl m-2 bg-white ' placeholder='Reply to @Rohit Yadav' />
      <div className='absolute mt-6 right-[10%] md:right-[7%] flex space-x-4 text-lg cursor-pointer'>
        <FontAwesomeIcon icon={faPaperclip} />
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
      </>
  );
};

export default ChatSection;
