import React from 'react';

const FriendCard = props => {
    return (
        <div>
            {props.friends.map( friend => {
                return (
                    <div>
                        <h1>{friend.name}</h1>
                        <h2>{friend.age}</h2>
                        <h2>{friend.email}</h2>
                    </div>
             )
            })}
        </div>
    )
}

export default FriendCard