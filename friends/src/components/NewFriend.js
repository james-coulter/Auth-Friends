import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';

const NewFriend = () => {
    const [moreFriends, setMoreFriends] = useState({
        name: '',
        age: '',
        email: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = e => {

        setMoreFriends({
            ...moreFriends,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {

        setLoading(true)
        axiosWithAuth().post('/api/friends', moreFriends)
                       .then(() => setLoading(false)) 
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
            {loading === false ? (
            <button type='submit'>Add Friend</button>) : <h3>loading</h3>}
        </form>
    )
}

export default NewFriend;