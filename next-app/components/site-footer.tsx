import Link from 'next/link';
import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-column"><Link className="brand brand-footer" href="/"><Image src="/assets/images/pul-global-partners-horizontal.png" alt="PUL Global Partners" width={2835} height={564} /></Link><p>From U.S. contracting to partner-enabled delivery.</p></div>
        <div className="footer-group"><strong>Explore</strong><Link href="/solutions/">Solutions</Link><Link href="/about/">Who We Are</Link><Link href="/insights/">Insights</Link><Link href="/about/#projects">Selected Projects</Link></div>
        <div className="footer-group"><strong>Connect</strong><Link href="/contact/">Partner With Us</Link><a href="mailto:info@pulglobal.com">info@pulglobal.com</a><a href="tel:+15409937496">+1-540-993-7496</a></div>
        <div className="footer-group"><strong>Corporate</strong><Link href="/capability/">Capability Statement</Link><span>Stafford, Virginia</span><span>PUL Global Partners LLC</span></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 PUL Global Partners LLC</span><span>Institutional heritage disclosure applies to selected historical experience.</span></div>
    </footer>
  );
}
