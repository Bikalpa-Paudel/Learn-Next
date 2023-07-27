import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      Hello
      <h1><Link href="/users">Users</Link></h1>
    </main>
  )
}
