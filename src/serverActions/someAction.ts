'use server'

import { ActionResponse } from '@/models/server-action-response'

interface SomeActionResult {
  email: string
  password: string
}

export async function someAction(formData: FormData): Promise<ActionResponse<SomeActionResult>> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    console.log(email, password)
    return {
      status: 'success',
      data: {
        email: 'email',
        password: 'password'
      }
    }
  } catch (error) {
    console.error(error)
    return { status: 'error', message: '로그인 실패' }
  }
}
