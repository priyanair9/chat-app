import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ChatCard from '../components/ChatCard'

function ChatsPage(props) {
    return (
        <div className="chat-container">
        {/* Sidebar for chats */}
        <div className="sidebar">
            <div className="sidebar-header">
                <h3 className='title'>Chats</h3>
                <AddIcon className='new-chat-button' />
            </div>
          <div className="search-bar">
            <input type="text" placeholder="Search Chats"></input>
            <SearchIcon className='search-icon' style={{ color: 'A19F9F' }}/>
          </div>
          <div className="chat-list">
            {/*  List of chats */}
            {/* <!-- Each chat item should contain profile picture, name, last message, etc. --> */}
            <ChatCard/>
          </div>
        </div>
        {/* <!-- Main chat area --> */}
        <div className="chat-area">
          {/* <!-- Chat header with user details --> */}
          <div className="chat-header">
            {/* <!-- Display user's profile picture, name, status, etc. --> */}
          </div>
          {/* <!-- Chat messages --> */}
          <div className="messages">
            {/* <!-- Individual message bubbles --> */}
          </div>
          {/* <!-- Message input area --> */}
          <div className="message-input">
            <textarea placeholder="Type your message..."></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    );
}

export default ChatsPage;