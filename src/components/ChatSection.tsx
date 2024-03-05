import { faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';

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
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const fetchChatMessages = async (page: number) => {
    try {
      const response = await fetch(`https://qa.corider.in/assignment/chat?page=${page}`);
      const data = await response.json();
      setChatMessages((prevMessages) => [...prevMessages, ...data.chats]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
    }
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isLoading) {
        setIsLoading(true);
        setPageNumber((prevPage) => prevPage + 1);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, 
    });

    if (chatContainerRef.current) {
      observer.observe(chatContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  useEffect(() => {
    fetchChatMessages(pageNumber);
  }, [pageNumber]);

  return (
    <>
      <div className='h-full' style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc' }} ref={chatContainerRef}>
        {chatMessages.map((message) => (
          <div className='flex p-3 align-middle shadow-2xl' key={message.id}>
            <div>
              <img className='w-12 h-12 rounded-3xl' src={message.sender.image} alt="" />
            </div>
            <div className='bg-white border w-[80%] border-gray-200 m-3 text-sm rounded-lg font-sans text-gray-900' style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              {message.message}
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <input type="text" className='w-[90%] p-3 text-xl rounded-xl m-2 bg-white' placeholder='Reply to @Rohit Yadav' />
        <div className='absolute mt-6 right-[10%] md:right-[7%] flex space-x-4 text-lg cursor-pointer'>
          <FontAwesomeIcon icon={faPaperclip} />
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </>
  );
};

export default ChatSection;
