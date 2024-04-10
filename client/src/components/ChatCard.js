import React from 'react';

function ChatCard(props) {
    return (
        <div className='card-container'>
            <div className='profile-pic'>
                <p className='abreviation'>R</p>
            </div>
            <div className='card-content'>
                <p className='username'>random.user</p>
                <p className='last-message'>Sent an attatchment</p>
            </div>
        </div>
    );
}

export default ChatCard;