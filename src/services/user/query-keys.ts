export const queryKeys = {
  allUsers: ['users'] as const,
  oneUser: (userId: number) => ['users', userId] as const
}
