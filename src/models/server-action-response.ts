type ActionStatus = 'success' | 'error'

export interface ActionResponse<T> {
  status: ActionStatus
  message: string
  data?: T
}

export type ActionResult<T> = Promise<ActionResponse<T>>
