import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';

const NewFriend = () => {
    const [moreFriends, setMoreFriends] = useState({
        name: '',
        age: '',
        email: '',
    })

    const handleChange = e => {
        e.preventDefault();
        setMoreFriends({
            ...moreFriends,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/friends', moreFriends)
                       .then(res => {
                           console.log('Post Response Success', res)
                           setMoreFriends({name: '', age: '', email: ''})
                       })
    }

    return(
        <form className='friendForm' onSubmit={handleSubmit}>
            <h2>Add a new friend here.</h2>
            <input 
            type="text"
            required
            name='name'
            placeholder='Name'
            onChange={handleChange}
            value={moreFriends.name}/>
            
            <input 
            type="text"
            required
            name='age'
            placeholder='Age'
            onChange={handleChange}
            value={moreFriends.age}/>

            <input 
            type="text"
            required
            name='email'
            placeholder='Email'
            onChange={handleChange}
            value={moreFriends.email}/>

            <button type='submit'>Add Friend</button>
        </form>
    )
}

export default NewFriend;