import { queryKeys } from '@/services/user/query-keys'
import userService from '@/services/user/user-service'
import { getDehydratedQuery } from '@/utils/react-query'
import { HydrationBoundary } from '@tanstack/react-query'
import UserList from './_components/user-list'

export default async function UsersPage() {
  const usersQuery = await getDehydratedQuery({
    queryKey: queryKeys.allUsers,
    queryFn: () => userService.getUsers()
  })

  return (
    <HydrationBoundary state={{ queries: [usersQuery] }}>
      <UserList />
    </HydrationBoundary>
  )
}
