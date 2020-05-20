import React from 'react';
import { axiosWithAuth } from '../axiosWithAuth';

const FriendCard = props => {
    return (
        <div>
            {props.friends.map( friend => {
                return (
                    <div className='friendCard'>
                        <h1>{friend.name}</h1>
                        <h2>{friend.age}</h2>
                        <h2>{friend.email}</h2>
                        <button onClick={() => {
                            axiosWithAuth().delete(`/api/friends/${friend.id}`)
                        }}>Delete Friend</button>
                    </div>
             )
            })}
        </div>
    )
}

export default FriendCard