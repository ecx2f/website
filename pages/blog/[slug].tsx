import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts, getPostBySlug, getPostSlugs } from '@/lib/posts'
import styles from '@/styles/Post.module.css'

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs()
  const paths = slugs.map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}

interface PostProps {
  post: {
    title: string
    date: string
    contentHtml: string
  }
}

export default function Post({ post }: PostProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.date}>{post.date}</div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </main>
    </div>
  )
}

