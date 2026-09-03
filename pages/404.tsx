// pages/404.tsx
import Head from 'next/head';
import Link from 'next/link';
import { Masthead, Footer } from '@/components/Chrome';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found, Biclay Labs</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <a className="skip" href="#main">Skip to content</a>
      <Masthead />
      <main id="main">
        <section className="hero">
          <div className="row wide">
            <div className="main">
              <p className="hero-mark">Not found</p>
              <h1>That page is not on this site.</h1>
              <p className="deck">This site has two pages, and the product has its own.</p>
              <div className="btn-row">
                <Link className="btn" href="/">Biclay Labs</Link>
                <Link className="btn btn-quiet" href="/citeonly/">About CiteOnly</Link>
                <a className="btn btn-quiet" href="https://citeonly.com/" rel="noopener">citeonly.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
