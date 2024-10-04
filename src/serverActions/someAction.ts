'use server'

import { BaseResponse } from '@/models/base-response'

export async function someAction(formData: FormData): Promise<BaseResponse> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    console.log(email, password)
    return { status: 'success', message: '로그인 성공' }
  } catch (error) {
    console.error(error)
    return { status: 'error', message: '로그인 실패', error: '로그인 실패' }
  }
}
