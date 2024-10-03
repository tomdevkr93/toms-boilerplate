'use client'

import { useUsers } from '@/services/user'

export default function UserList() {
  const { data: users } = useUsers()

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
