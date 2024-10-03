import Image from 'next/image'
import Link from 'next/link'
import { Penguin } from '../../public/svgs'
import styles from './page.module.css'

export default async function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image src="/images/avatar.jpeg" alt="avatar image" fill />
      </div>
      <Image src={Penguin} alt="penguin" width={100} />
      <h1 className={styles.title}>Tom&apos;s Boilerplate</h1>
      <Link className={styles.gotoUsers} href="/users">
        jsonplaceholder Users 페이지 이동
      </Link>
    </div>
  )
}
