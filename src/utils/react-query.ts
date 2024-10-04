import { cache } from 'react'
import { dehydrate, QueryClient, QueryKey } from '@tanstack/react-query'
import { isEqual } from './isEqual'

interface QueryProps<ResponseType = unknown> {
  queryKey: QueryKey
  queryFn: () => Promise<ResponseType>
}

export const getQueryClient = cache(() => new QueryClient())

export async function getDehydratedQuery<Q extends QueryProps>({ queryKey, queryFn }: Q) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey, queryFn })

  const { queries } = dehydrate(queryClient)
  const [dehydratedQuery] = queries.filter(query => isEqual(query.queryKey, queryKey))
  return dehydratedQuery
}

export async function getDehydratedQueries<Q extends QueryProps[]>(queries: Q) {
  const queryClient = getQueryClient()
  await Promise.all(queries.map(query => queryClient.prefetchQuery(query)))
  return dehydrate(queryClient).queries
}
