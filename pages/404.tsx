import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 • lost in the void • ecx2f.dev</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.prompt}>
            <span className={styles.dollar}>$</span> cat 404.txt
          </div>
          <h1 className={styles.title}>lost in the void</h1>
          <p className={styles.description}>
            The page you&apos;re looking for doesn&apos;t exist, was moved, or never made it out of dev. 
            Grab a coffee, double-check the URL, or jump back to a safe sector.
          </p>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              return home →
            </Link>
            <Link href="/blog" className={styles.link}>
              view blog
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}

