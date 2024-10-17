interface ActionSuccessResponse<T> {
  status: 'success'
  data: T
}

interface ActionErrorResponse {
  status: 'error'
  message: string
}

export type ActionResponse<T> = ActionSuccessResponse<T> | ActionErrorResponse
