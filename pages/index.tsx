import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.prompt}>
          <span className={styles.dollar}>$</span> whoami
        </div>
        <h1 className={styles.name}>ecx</h1>
        <p className={styles.tagline}>low-level, backend, and random notes</p>
        <nav className={styles.links}>
          <Link href="/blog">./blog</Link>
          <Link href="/projects">./projects</Link>
        </nav>
      </main>
    </div>
  )
}

