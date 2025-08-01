import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ title, description, children, canonical }) {
  const pageTitle = title ? `${title} | Thirst Trap Lemonade` : 'Thirst Trap Lemonade'
  const pageDesc = description || 'Fresh-squeezed lemonade full of flavour with good vibes and cotton-candy swirls.'
  const canonicalUrl = canonical || ''
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <link rel="icon" href="/favicon.ico" />
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-Q9KgW60pZ+Z5eS7higZ3gXOnC4WFeP0AKrypMaG46JwGXRmpUvDYdNCS6tL9ZQbXyGPrtZqDWRK/TbEfcOg/Vw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}