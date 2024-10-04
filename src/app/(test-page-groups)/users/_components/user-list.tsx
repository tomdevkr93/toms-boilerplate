'use client'

import { useUsers } from '@/services/user'

export default function UserList() {
  const { data: users, error, isLoading } = useUsers()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>죄송합니다. 유저 리스트를 불러올 수 없습니다.</div>

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
