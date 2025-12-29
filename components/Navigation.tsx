import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Navigation.module.css'

export default function Navigation() {
  const router = useRouter()
  const [pathname, setPathname] = useState('')
  
  useEffect(() => {
    setPathname(router.pathname)
  }, [router.pathname])
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname === path || pathname.startsWith(path + '/')
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <Link href="/" className={isActive('/') ? styles.active : ''}>
          <span className={styles.prefix}>./</span>
          <span className={styles.text}>home</span>
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/blog" className={isActive('/blog') ? styles.active : ''}>
          <span className={styles.prefix}>./</span>
          <span className={styles.text}>blog</span>
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/projects" className={isActive('/projects') ? styles.active : ''}>
          <span className={styles.prefix}>./</span>
          <span className={styles.text}>projects</span>
        </Link>
      </div>
    </nav>
  )
}

