import Link from 'next/link';
import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><Link className="brand brand-footer" href="/"><Image src="/assets/images/pul-global-partners-horizontal.png" alt="PUL Global Partners" width={2835} height={564} /></Link><p>Strategy. Solutions. Execution.</p></div>
        <div><strong>Explore</strong><Link href="/solutions/">Solutions</Link><Link href="/about/">About Us</Link><Link href="/projects/">Projects</Link><Link href="/insights/">Insights</Link></div>
        <div><strong>Connect</strong><Link href="/contact/">Contact</Link><a href="mailto:info@pulglobal.com">info@pulglobal.com</a><a href="tel:+17032232655">+1 703-223-2655</a></div>
        <div><strong>Corporate</strong><Link href="/capability/">Capability Statement</Link><span>Stafford, Virginia</span><span>PUL Global Partners LLC</span></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 PUL Global Partners LLC</span><span>Institutional heritage disclosure applies to selected historical experience.</span></div>
    </footer>
  );
}
