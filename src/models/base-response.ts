type BaseResponseStatus = 'success' | 'fail' | 'error'

export interface BaseResponse<T = undefined> {
  status: BaseResponseStatus
  message: string

  // 성공일 경우는 data 객체 또는 배열 (페이지네이션 정보도 포함)
  data?: T

  // 실패일 경우는 error
  error?: string
}
