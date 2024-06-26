import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ChatCard from '../components/ChatCard'
import MessageBubble from '../components/MessageBubble';
import UserSearch from '../components/UserSearch';

function ChatsPage(props) {

  // State to manage visibility of UserSearch
  const [showUserSearch, setShowUserSearch] = useState(false);

  const handleAddButtonClick = (event) => {
    // Toggle the visibility of UserSearch
    setShowUserSearch(!showUserSearch);
  }

    return (
        <div className="chat-container">
        {/* Sidebar for chats */}
        <div className="sidebar">
            <div className="sidebar-header">
                <h3 className='title'>Chats</h3>
                <div onClick={handleAddButtonClick}>
                  <AddIcon className='new-chat-button' />
                </div>
            </div>
          <div className="search-bar">
            <input type="text" placeholder="Search Chats"></input>
            <SearchIcon className='search-icon' style={{ color: 'A19F9F' }}/>
          </div>
          <div className="chat-list">
            {/*  List of chats */}
            {/* <!-- Each chat item should contain profile picture, name, last message, etc. --> */}
            <ChatCard/>
            {showUserSearch && <UserSearch />} {/* Conditionally render UserSearch */}
          </div>
        </div>
        {/* <!-- Main chat area --> */}
        <div className="chat-area">
          {/* <!-- Chat header with user details --> */}
          <div className="chat-header">
            {/* <!-- Display user's profile picture, name, status, etc. --> */}
            <div className='profile-pic'>
                <p className='abreviation'>R</p>
            </div>
            <div className='header-username'>random.user</div>
          </div>
          {/* <!-- Chat messages --> */}
          <div className="messages">
            {/* <!-- Individual message bubbles --> */}
            <MessageBubble message={"Test"}/>
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