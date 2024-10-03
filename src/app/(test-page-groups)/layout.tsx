import { PropsWithChildren } from 'react'

export default async function TestPageGroupsLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>테스트 페이지입니다.</h1>
      {children}
    </div>
  )
}
