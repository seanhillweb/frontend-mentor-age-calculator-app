import Link from "next/link"

export default function PageExamples() {
  return (
    <div className="container">
      <main id="main" className="main">
        <h1>Examples</h1>
        <p>A list of reusable components available in this starter project.</p>
        <h2>Components</h2>
        <ul>
          <li><Link href="/examples/accordion">Accordion</Link></li>
        </ul>
        <h2>Forms</h2>
        <ul>
          <li><Link href="/examples/form">Form</Link></li>
        </ul>
      </main>
    </div>
  )
}
