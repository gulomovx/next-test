import React from 'react'
import { User } from '@/entities'
const UserAccount = ({user}:{user:User}) => {
  return (
      <>
          <h2 className="">User profile</h2>
          {user.isAdmin && <button>Edit</button>}
          <div className="">
              <strong>name:</strong>{user.name}
          </div>
      </>
  )
}

export default UserAccount