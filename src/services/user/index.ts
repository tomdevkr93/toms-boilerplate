import { useQuery } from '@tanstack/react-query'
import { queryKeys } from './query-keys'
import userService from './user-service'

export function useUsers() {
  return useQuery({
    queryKey: queryKeys.allUsers,
    queryFn: () => userService.getUsers()
  })
}

export function useUser(userId: number) {
  return useQuery({
    queryKey: queryKeys.oneUser(userId),
    queryFn: () => userService.getUser(userId)
  })
}
