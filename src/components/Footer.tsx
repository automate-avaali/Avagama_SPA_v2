import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-subtle bg-bg-surface py-10 px-6 lg:px-20 relative z-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b border-subtle mb-6">
          <div className="space-y-3">
            <Link to="/" className="block">
              <img src="/Avagama.AI_Logo.jpg" alt="Avagama AI" className="h-[22px] block mb-3" />
            </Link>
            <p className="text-[0.78rem] text-text-dim leading-relaxed max-w-[220px] font-light">
              A purpose-built discovery platform for enterprise AI automation. Built by Avaali Solutions.
            </p>
          </div>

          <div>
            <h5 className="font-display font-bold text-[0.78rem] text-text-main mb-3.5">Platform</h5>
            <ul className="flex flex-col gap-2">
              <li><Link to="/platform" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">How it works</Link></li>
              <li><Link to="/solutions" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">Use Cases</Link></li>
              <li><Link to="/platform" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">Integrations</Link></li>
              <li><Link to="/platform" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-bold text-[0.78rem] text-text-main mb-3.5">Company</h5>
            <ul className="flex flex-col gap-2">
              <li><Link to="/about" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">About Avaali</Link></li>
              <li><Link to="/about" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">Careers</Link></li>
              <li><Link to="/about" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-bold text-[0.78rem] text-text-main mb-3.5">Get Started</h5>
            <ul className="flex flex-col gap-2">
              <li><Link to="/contact?request=schedule" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">Request a Demo</Link></li>
              <li><Link to="/contact" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">FAQ</Link></li>
              <li><a href="mailto:hello@avagama.ai" className="text-[0.78rem] text-text-dim hover:text-text-muted transition-colors">hello@avagama.ai</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[0.72rem] text-text-dim">
            &copy; {new Date().getFullYear()} Avaali Solutions Pvt. Ltd. All rights reserved.
          </span>
          <div className="flex gap-6 text-[0.72rem]">
            <a href="#" className="text-text-dim hover:text-text-muted transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-dim hover:text-text-muted transition-colors">Terms of Use</a>
            <a href="#" className="text-text-dim hover:text-text-muted transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
