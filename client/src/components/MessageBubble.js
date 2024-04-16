import React from 'react';

function MessageBubble({message}) {
    return (
        <div className='bubble-container'>
            <p className='message'>{message}</p>
        </div>
    );
}

export default MessageBubble;