import Head from 'next/head'
import Link from 'next/link'
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

  // Get all posts sorted by date (newest first)
  const allPosts = await getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  
  const previousPost = currentIndex < allPosts.length - 1 
    ? allPosts[currentIndex + 1] 
    : null
  
  const nextPost = currentIndex > 0 
    ? allPosts[currentIndex - 1] 
    : null

  return {
    props: {
      post: {
        ...post,
        slug,
      },
      previousPost: previousPost ? {
        slug: previousPost.slug,
        title: previousPost.title,
      } : null,
      nextPost: nextPost ? {
        slug: nextPost.slug,
        title: nextPost.title,
      } : null,
    },
  }
}

interface PostProps {
  post: {
    slug: string
    title: string
    date: string
    readingTime: number
    contentHtml: string
    heroImage?: string
  }
  previousPost: {
    slug: string
    title: string
  } | null
  nextPost: {
    slug: string
    title: string
  } | null
}

export default function Post({ post, previousPost, nextPost }: PostProps) {
  const siteUrl = 'https://ecx2f.dev'
  const postUrl = `${siteUrl}/blog/${post.slug}`
  const title = `${post.title} • ecx2f.dev`
  
  // Extract plain text from HTML for description (first 160 chars)
  const plainText = post.contentHtml
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const description = plainText.length > 160 
    ? plainText.substring(0, 160) + '...' 
    : plainText

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={postUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="article:published_time" content={post.date} />
        {post.heroImage && (
          <meta property="og:image" content={`${siteUrl}${post.heroImage}`} />
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content={post.heroImage ? "summary_large_image" : "summary"} />
        <meta name="twitter:url" content={postUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description} />
        {post.heroImage && (
          <meta name="twitter:image" content={`${siteUrl}${post.heroImage}`} />
        )}
      </Head>
      <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.prompt}>
          <span className={styles.dollar}>$</span> cat posts/{post.slug}/index.md
        </div>
        <article className={styles.article}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.readingTime}>{post.readingTime} min read</span>
          </div>
          {post.heroImage && (
            <div className={styles.heroImage}>
              <img
                src={post.heroImage}
                alt={post.title}
                className={styles.heroImg}
              />
            </div>
          )}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        {(previousPost || nextPost) && (
          <nav className={styles.postNavigation}>
            {previousPost ? (
              <Link href={`/blog/${previousPost.slug}`} className={styles.navLink}>
                <span className={styles.navLabel}>← previous</span>
                <span className={styles.navTitle}>{previousPost.title}</span>
              </Link>
            ) : (
              <div className={styles.navLink}></div>
            )}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className={`${styles.navLink} ${styles.navLinkNext}`}>
                <span className={styles.navLabel}>next →</span>
                <span className={styles.navTitle}>{nextPost.title}</span>
              </Link>
            ) : (
              <div className={styles.navLink}></div>
            )}
          </nav>
        )}
      </main>
    </div>
    </>
  )
}

