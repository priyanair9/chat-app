import React from 'react';

function ResultCard(props) {
    return (
        <div className='card-container'>
            <div className='profile-pic'>
                <p className='abreviation'>R</p>
            </div>
            <div className='card-content'>
                <p className='username-search'>random.user</p>
            </div>
        </div>
    );
}

export default ResultCard;