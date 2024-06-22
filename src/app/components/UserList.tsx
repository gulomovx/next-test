import React from 'react'
import { User } from '@/entities'
const UserList = ({ users }: { users: User[] }) => {
    if (users.length === 0) return <p>No users available</p>
    return (
        <ul>
            {users.map((user) => {
                return (
                    <li key={user.id}>
                        <a href={`/users/${user.id}`}>{user.name}</a>
                </li>
                    
                )
            })}
         </ul>
     )
}

export default UserList