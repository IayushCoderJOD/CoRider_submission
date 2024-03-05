import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import NavigationInfoLayer from './components/NavigationInfoLayer';
import BeforeChatSection from './components/MainChatSection';
import ChatSection from './components/ChatSection';

function App() {
  return (
    <>
    <TopNav />
    <NavigationInfoLayer />
    <BeforeChatSection />
    <ChatSection />
    </>
  );  
}

export default App;