'use client'

/**
 * Summary. To specifically handle errors in root layout.js
 * 
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs
 */
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}