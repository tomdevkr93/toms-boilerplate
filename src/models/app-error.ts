export enum ErrorType {
  API_ERROR = 'API_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  AUTH_ERROR = 'AUTH_ERROR',
  NOT_FOUND_ERROR = 'NOT_FOUND_ERROR',
  CLIENT_ERROR = 'CLIENT_ERROR',
  SERVER_ERROR = 'SERVER_ERROR'
}

const ERROR_MESSAGES: Record<ErrorType, string> = {
  [ErrorType.API_ERROR]: 'API 오류가 발생했습니다.',
  [ErrorType.NETWORK_ERROR]: '네트워크 오류가 발생했습니다.',
  [ErrorType.UNKNOWN_ERROR]: '알 수 없는 오류가 발생했습니다.',
  [ErrorType.AUTH_ERROR]: '로그인에 실패했습니다.',
  [ErrorType.NOT_FOUND_ERROR]: '요청한 리소스를 찾을 수 없습니다.',
  [ErrorType.CLIENT_ERROR]: '클라이언트 요청에 문제가 있습니다.',
  [ErrorType.SERVER_ERROR]: '서버에 문제가 발생했습니다.'
}

// 상태 코드와 ErrorType을 매핑하는 객체 추가
const STATUS_TO_ERROR_TYPE: Record<number, ErrorType> = {
  401: ErrorType.AUTH_ERROR,
  404: ErrorType.NOT_FOUND_ERROR
}

export class AppError extends Error {
  constructor(public type: ErrorType, public statusCode?: number) {
    super(ERROR_MESSAGES[type])
    this.name = 'AppError'
    this.message = `🚨 [${statusCode}] ${ERROR_MESSAGES[type]}`
  }

  static from(status: number): AppError {
    let errorType: ErrorType

    if (status in STATUS_TO_ERROR_TYPE) {
      errorType = STATUS_TO_ERROR_TYPE[status]
    } else if (status >= 400 && status < 500) {
      errorType = ErrorType.CLIENT_ERROR
    } else if (status >= 500) {
      errorType = ErrorType.SERVER_ERROR
    } else {
      errorType = ErrorType.UNKNOWN_ERROR
    }

    return new AppError(errorType, status)
  }
}
