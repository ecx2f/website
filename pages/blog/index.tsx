import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import styles from '@/styles/Blog.module.css'

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

interface BlogIndexProps {
  posts: Array<{
    slug: string
    title: string
    date: string
  }>
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Blog</h1>
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.postItem}>
              <Link href={`/blog/${post.slug}`}>
                <span className={styles.postTitle}>{post.title}</span>
                <span className={styles.postDate}>{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

