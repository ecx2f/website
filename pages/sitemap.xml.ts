import { GetServerSideProps } from 'next'
import { getAllPosts } from '@/lib/posts'

const SITE_URL = 'https://ecx2f.dev'

function generateSitemap(posts: Array<{ slug: string }>) {
  const pages = [
    { url: '', priority: '1.0' },
    { url: '/blog', priority: '0.9' },
    { url: '/projects', priority: '0.9' },
  ]

  const postPages = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    priority: '0.8',
  }))

  const allPages = [...pages, ...postPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return sitemap
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const posts = await getAllPosts()
  const sitemap = generateSitemap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap() {
  return null
}

