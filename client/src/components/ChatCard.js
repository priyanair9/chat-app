import React from 'react';

function ChatCard(props) {
    return (
        <div className='card-container'>
            <p className='username'>random.user</p>
            <p className='last-message'>Sent an attatchment</p>
            <div className='profile-pic'>
                <p className='abreviation'>R</p>
            </div>
        </div>
    );
}

export default ChatCard;