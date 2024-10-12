// pages/index.js
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Biclay Labs</title>
        <meta name="description" content="Consulting for all your AI needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logoBox}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.svg`} alt="Biclay Labs Logo" className={styles.logoImageSmall} />
          </div>
          <div className={styles.logo}>Biclay</div>
          <ul className={styles.navList}>
            <li><a href="https://forms.gle/fRiDhCa9L1pwqjHn9" target="_blank" rel="noopener noreferrer">Contact us</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.logoBox}>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.svg`} alt="Biclay Labs Logo" className={styles.logoImage} />
          </div>
          <h1 className={styles.title}>Biclay Labs</h1>
          <p className={styles.subtitle}>Consulting for all your AI needs</p>

          <section className={styles.section}>
            <h2>Why:</h2>
            {/* <p>You are hiring us:</p> */}
            <ul className={styles.list}>
              <li>Your LLMs are too expensive or slow</li>
              <li>You need to self host accurate local LLM</li>
              <li>Your product requires constant updates to LLM pipeline</li>
              <li>Your system needs more accuracy</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>What</h2>
            <p>we have done:</p>
            <ol className={styles.list}>
              <li>Ship LLM products that stays ahead of curve</li>
              <li>Cut costs and optimize latency of AI systems</li>
              <li>Upskill and mentor team members</li>
              <li>Build tools that accelerates PRD-to-launch time for AI powered products</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>How</h2>
            <p>do we help you:</p>
            <ul className={styles.list}>
              <li>Advise you on your ML pipelines and products</li>
              <li>Build relevant models and pipelines for you</li>
              <li>Improve your AI systems’ return on investment</li>
            </ul>
          </section>

          {/* <section className={styles.section}>
            <h2>Services</h2>
            <p>
              See <a href="/services">this page</a> for more info.
            </p>
          </section> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Biclay Labs. All rights reserved.</p>
      </footer>
    </>
  );
}

