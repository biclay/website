// components/Chrome.tsx — masthead and footer shared by every page
import Link from 'next/link';

const MARK = (
  <svg className="mk" width="22" height="22" viewBox="0 0 200 200" aria-hidden="true">
    <g fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="100" cy="100" r="92" />
      <path d="M 26 78 Q 100 64, 174 78" />
      <path d="M 26 132 Q 100 146, 174 132" />
      <path d="M 100 22 Q 80 100, 56 178" />
      <path d="M 100 22 Q 120 100, 144 178" />
    </g>
  </svg>
);

export function Masthead({ current }: { current?: string }) {
  return (
    <header className="masthead">
      <div className="masthead-in">
        <Link className="wordmark" href="/">{MARK}<span className="in">Biclay Labs</span></Link>
        <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="nav" hidden>Menu</button>
        <nav className="nav" id="nav" aria-label="Main">
          <Link href="/citeonly/" aria-current={current === '/citeonly/' ? 'page' : undefined}>CiteOnly</Link>
          <a href="mailto:hello@biclay.com">Contact</a>
          <a className="btn" href="https://citeonly.com/contact/" rel="noopener">Request a pilot</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="foot-in">
        <div>
          <p className="foot-h">Biclay Labs</p>
          <p>The company behind CiteOnly. Builds AI for work where being wrong has consequences.</p>
        </div>
        <div>
          <p className="foot-h">Product</p>
          <ul>
            <li><a href="https://citeonly.com/" rel="noopener">citeonly.com</a></li>
            <li><Link href="/citeonly/">About CiteOnly</Link></li>
            <li><a href="https://citeonly.com/contact/" rel="noopener">Request a pilot</a></li>
          </ul>
        </div>
        <div>
          <p className="foot-h">Company</p>
          <ul>
            <li><a href="mailto:hello@biclay.com">hello@biclay.com</a></li>
            <li><a href="https://sushantdaga.com" rel="noopener">The founder</a></li>
            <li><a href="https://forms.gle/fRiDhCa9L1pwqjHn9" rel="noopener">Contact form</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-base">
        <span>&copy; 2026 Biclay Labs</span>
      </div>
    </footer>
  );
}
