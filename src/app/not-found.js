/**
 * Summary.
 *
 * Description. The not-found file is used to render UI when the notFound function is thrown within a route segment. Along with serving a custom UI, Next.js will also return a 404 HTTP status code.
 *
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */

import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  )
}