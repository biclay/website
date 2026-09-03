// pages/citeonly.tsx
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function CiteOnly() {
  return (
    <>
      <Head>
        <title>CiteOnly, a product of Biclay Labs</title>
        <meta name="description" content="CiteOnly cannot make things up: each part of an answer is a passage from your own documents, with its source beside it. Built by Biclay Labs." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://biclay.com/citeonly/" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logoBox}>
            <Link href="/"><img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.svg`} alt="Biclay Labs Logo" className={styles.logoImageSmall} /></Link>
          </div>
          <div className={styles.logo}><Link href="/">Biclay</Link></div>
          <ul className={styles.navList}>
            <li><Link href="/citeonly/" aria-current="page">CiteOnly</Link></li>
            <li><a href="https://forms.gle/fRiDhCa9L1pwqjHn9" target="_blank" rel="noopener noreferrer">Contact us</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>CiteOnly</h1>
          <p className={styles.subtitle}>An AI that cannot make things up. Built by Biclay Labs.</p>

          <section className={styles.section}>
            <h2>What it does</h2>
            <p>
              CiteOnly answers questions about a set of documents you supply: a contract and its
              amendments, a policy manual, a case file. Every part of an answer is a passage taken
              word for word from those documents, and each part arrives with the document and the
              place it came from. When the documents do not answer the question, it says so.
            </p>
            <p>
              The full description, with an illustration of what an answer looks like, is on{' '}
              <a href="https://citeonly.com/product/" rel="noopener">citeonly.com</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Who it is for</h2>
            <p>
              Work where somebody has to answer for a sentence: legal, financial services,
              healthcare and life sciences, audit, insurance, government. Each sector, with the
              rule that already applies in it, is on{' '}
              <a href="https://citeonly.com/industries/" rel="noopener">the industries page</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Where it stands</h2>
            <p>
              In development and running with a small number of pilot partners. A pilot runs on
              your own documents and the questions your team gets asked.
            </p>
            <ul className={styles.list}>
              <li><a href="https://citeonly.com/" rel="noopener">citeonly.com</a></li>
              <li><a href="https://citeonly.com/product/" rel="noopener">What CiteOnly does</a></li>
              <li><a href="https://citeonly.com/research/" rel="noopener">Research and writing</a></li>
              <li><a href="https://citeonly.com/contact/" rel="noopener">Request a pilot</a></li>
            </ul>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Biclay Labs. All rights reserved.</p>
      </footer>
    </>
  );
}
