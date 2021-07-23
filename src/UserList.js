import React from 'react'
import ProfileCard from './ProfileCard'

const UserList = ({ users }) => {

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '50px 100px', justifyContent: 'center' }}>
            {users.map((el) => (<ProfileCard key={el.id} user={el} />))
            }
        </div>
    )
}

export default UserList
