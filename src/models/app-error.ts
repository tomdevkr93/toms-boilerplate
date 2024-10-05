export type ErrorType = 'API_ERROR' | 'NETWORK_ERROR' | 'UNKNOWN_ERROR'

const ERROR_MESSAGES: Record<ErrorType, string> = {
  API_ERROR: 'API 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  NETWORK_ERROR: '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.',
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
}

export class AppError extends Error {
  constructor(public type: ErrorType, public statusCode?: number) {
    super(ERROR_MESSAGES[type])
    this.name = 'AppError'
  }
}
