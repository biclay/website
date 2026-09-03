// pages/index.tsx — the company page
import Head from 'next/head';
import Link from 'next/link';
import { Masthead, Footer } from '@/components/Chrome';

const ORG = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Biclay Labs',
  alternateName: 'Biclay',
  url: 'https://biclay.com/',
  logo: 'https://biclay.com/logo.svg',
  email: 'hello@biclay.com',
  description: 'Biclay Labs builds AI for work where being wrong has consequences.',
  brand: { '@type': 'Brand', name: 'CiteOnly', url: 'https://citeonly.com/' },
  founder: {
    '@type': 'Person',
    name: 'Sushant Daga',
    url: 'https://sushantdaga.com/',
    sameAs: ['https://github.com/SushantDaga', 'https://www.linkedin.com/in/sushant-daga/'],
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Biclay Labs, the company behind CiteOnly</title>
        <meta name="description" content="Biclay Labs builds AI for work where being wrong has consequences. Its product is CiteOnly, an AI that cannot make things up. How it started, and who is behind it." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://biclay.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }} />
      </Head>
      <a className="skip" href="#main">Skip to content</a>
      <Masthead />

      <main id="main">
        <section className="hero">
          <div className="row">
            <div className="main">
              <p className="hero-mark">Biclay Labs</p>
              <h1>The company behind CiteOnly.</h1>
              <p className="deck">Biclay Labs builds AI for work where being wrong has consequences.
              Its product is CiteOnly, an AI that cannot make things up.</p>
              <div className="btn-row">
                <a className="btn" href="https://citeonly.com/" rel="noopener">See CiteOnly</a>
                <Link className="btn btn-quiet" href="/citeonly/">About the product</Link>
              </div>
            </div>
            <aside className="margin">
              <div className="note">
                <b>Where we are</b>
                Early. CiteOnly is in development and running with a small number of pilot partners.
              </div>
            </aside>
          </div>
        </section>

        <section className="tight">
          <div className="row wide">
            <div className="main prose">
              <h2>How it started</h2>
              <p>Biclay Labs started as an applied machine learning consultancy: getting
              language-model products into production, cutting the cost and latency of systems
              already running, standing up self-hosted models where data could not leave the
              building.</p>
              <p>In that work one question kept coming back, from the people whose names went on the
              output: where did this sentence come from? A checker or a citation matcher added on
              top made the system more complicated without making the answer any more defensible.</p>
              <p>CiteOnly is built for that question. Consulting is no longer offered. The company
              builds one product.</p>
            </div>
          </div>
        </section>

        <section className="tight">
          <div className="row">
            <div className="main prose">
              <h2>The product</h2>
              <p>CiteOnly cannot make things up. Each part of an answer is a passage taken word for
              word from your own documents, with its source beside it. When the documents do not
              answer the question, it says so.</p>
              <p className="follow">
                <a href="https://citeonly.com/" rel="noopener">The comparison with a general assistant</a> ·{' '}
                <a href="https://citeonly.com/product/" rel="noopener">What it does</a> ·{' '}
                <a href="https://citeonly.com/industries/" rel="noopener">Where it applies</a> ·{' '}
                <a href="https://citeonly.com/research/" rel="noopener">Research</a>
              </p>
            </div>
            <aside className="margin">
              <div className="note">
                <b>citeonly.com</b>
                Everything about the product is on its own site.
              </div>
            </aside>
          </div>
        </section>

        <section className="cta">
          <div className="row">
            <div className="main prose">
              <h2>The founder</h2>
              <p><strong>Sushant Daga</strong> founded Biclay Labs and builds CiteOnly.</p>
              <p className="follow">
                <a href="https://github.com/SushantDaga" rel="me noopener">GitHub</a> ·{' '}
                <a href="https://www.linkedin.com/in/sushant-daga/" rel="me noopener">LinkedIn</a> ·{' '}
                <a href="https://sushantdaga.com" rel="me noopener">sushantdaga.com</a>
              </p>
              <div className="btn-row">
                <a className="btn" href="mailto:hello@biclay.com">hello@biclay.com</a>
                <a className="btn btn-quiet" href="https://forms.gle/fRiDhCa9L1pwqjHn9" rel="noopener">Contact form</a>
              </div>
            </div>
            <aside className="margin">
              <div className="note">
                <b>Contact</b>
                Email hello@biclay.com and the founder answers.
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
