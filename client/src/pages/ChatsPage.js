import React from 'react';

function ChatsPage(props) {
    return (
        <div class="chat-container">
        {/* Sidebar for chats */}
        <div class="sidebar">
          <div class="search-bar">
            <input type="text" placeholder="Search chats"></input>
          </div>
          <div class="chat-list">
            {/*  List of chats */}
            {/* <!-- Each chat item should contain profile picture, name, last message, etc. --> */}
          </div>
        </div>
        {/* <!-- Main chat area --> */}
        <div class="chat-area">
          {/* <!-- Chat header with user details --> */}
          <div class="chat-header">
            {/* <!-- Display user's profile picture, name, status, etc. --> */}
          </div>
          {/* <!-- Chat messages --> */}
          <div class="messages">
            {/* <!-- Individual message bubbles --> */}
          </div>
          {/* <!-- Message input area --> */}
          <div class="message-input">
            <textarea placeholder="Type your message..."></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    );
}

export default ChatsPage;