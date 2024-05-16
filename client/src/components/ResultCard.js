import React from 'react';

function ResultCard(username, abreviation, color) {
    return (
        <div className='card-container'>
            <div className='profile-pic' style={{backgroundColor: {color}}}>
                <p className='abreviation'>{abreviation}</p>
            </div>
            <div className='card-content'>
                <p className='username-search'>{username}</p>
            </div>
        </div>
    );
}

export default ResultCard;