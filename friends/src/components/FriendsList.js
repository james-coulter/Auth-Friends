import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '..//axiosWithAuth';
import FriendCard from './FriendCard';
import NewFriend from './NewFriend';
import './Login.css';

const FriendsList = props => {
    const [friends, setFriends] = useState([]);

    useEffect( () => {
        axiosWithAuth().get('/api/friends')
                       .then(res => {
                           console.log(res)
                           setFriends(res.data)
                       })
    }, [])

    return (
        <div className='friendsList'>
            <NewFriend />
            <FriendCard className='friendCardParent' key={friends.id} friends={friends} />
        </div>
    )
}

export default FriendsList;
