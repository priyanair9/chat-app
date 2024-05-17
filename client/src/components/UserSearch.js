import React, { useState, useEffect } from 'react';
import ResultCard from './ResultCard';
import axios from 'axios';

function UserSearch(props) {
    const [users, setUsers] = useState([{
        username: '',
        profileColor: ''
    }])

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get('http://localhost:3001/users');
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
            fetchUsers();
        }, []);

    return (
        <div className='search-container'>
            <div className='results-list'>
                {users.map(user => (
                    <div className='card-container' key={user._id}>
                        <div className='search-profile-pic' style={{backgroundColor: user.profileColor}}>
                            <p className='abreviation'>{user.username.substring(0, 1).toUpperCase()}</p>
                        </div>
                        <div className='card-content'>
                            <p className='username-search'>{user.username}</p>
                         </div>
                        {/* Use substring to get the first character of username */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserSearch;