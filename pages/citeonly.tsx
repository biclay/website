// pages/citeonly.tsx — the pointer page for the product
import Head from 'next/head';
import { Masthead, Footer } from '@/components/Chrome';

export default function CiteOnly() {
  return (
    <>
      <Head>
        <title>CiteOnly, a product of Biclay Labs</title>
        <meta name="description" content="CiteOnly cannot make things up: each part of an answer is a passage from your own documents, with its source beside it. Built by Biclay Labs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://biclay.com/citeonly/" />
      </Head>
      <a className="skip" href="#main">Skip to content</a>
      <Masthead current="/citeonly/" />

      <main id="main">
        <section className="hero">
          <div className="row">
            <div className="main">
              <p className="hero-mark">The product</p>
              <h1>CiteOnly</h1>
              <p className="deck">An AI that cannot make things up. Built by Biclay Labs.</p>
              <div className="btn-row">
                <a className="btn" href="https://citeonly.com/" rel="noopener">See the comparison</a>
                <a className="btn btn-quiet" href="https://citeonly.com/contact/" rel="noopener">Request a pilot</a>
              </div>
            </div>
            <aside className="margin">
              <div className="note">
                <b>Where it stands</b>
                In development and running with a small number of pilot partners. A pilot runs on
                your own documents and the questions your team gets asked.
              </div>
            </aside>
          </div>
        </section>

        <section className="tight">
          <div className="row">
            <div className="main prose">
              <h2>What it does</h2>
              <p>CiteOnly answers questions about a set of documents you supply: a contract and its
              amendments, a policy manual, a case file. Every part of an answer is a passage taken
              word for word from those documents, and each part arrives with the document and the
              place it came from. When the documents do not answer the question, it says so.</p>
              <p>A side-by-side comparison with a general assistant, on the same question and the
              same two documents, is on <a href="https://citeonly.com/" rel="noopener">citeonly.com</a>.</p>
              <h2>Who it is for</h2>
              <p>Work where somebody has to answer for a sentence: legal, financial services,
              healthcare and life sciences, audit, insurance, government. Each sector, with the rule
              that already applies in it, is on{' '}
              <a href="https://citeonly.com/industries/" rel="noopener">the industries page</a>.</p>
              <p className="follow">
                <a href="https://citeonly.com/product/" rel="noopener">What CiteOnly does</a> ·{' '}
                <a href="https://citeonly.com/research/" rel="noopener">Research and writing</a> ·{' '}
                <a href="https://citeonly.com/contact/" rel="noopener">Request a pilot</a>
              </p>
            </div>
            <aside className="margin">
              <div className="note">
                <b>Read more there</b>
                Everything about the product, with sources, is on citeonly.com.
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
