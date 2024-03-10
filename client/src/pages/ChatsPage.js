import React from 'react';

function ChatsPage(props) {
    return (
        <div className="chat-container">
        {/* Sidebar for chats */}
        <div className="sidebar">
            <h3 className='title'>Chats</h3>
          <div className="search-bar">
            <input type="text" placeholder="Search chats"></input>
          </div>
          <div className="chat-list">
            {/*  List of chats */}
            {/* <!-- Each chat item should contain profile picture, name, last message, etc. --> */}
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