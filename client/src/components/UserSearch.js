import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard';

function UserSearch(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Failed to fetch users');
                }
            })
            .then(jsonRes => {
                setUsers(jsonRes);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []); // Add an empty dependency array to ensure useEffect runs only once

    return (
        <div className='search-container'>
            <div className='results-list'>
                {users.map(user => (
                    <div className='story' key={user._id}>
                        <p className='username'>{user.username}</p>
                        {/* Use substring to get the first character of username */}
                        <p className='initial'>{user.username.substring(0, 1)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserSearch;