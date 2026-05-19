import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Platform', href: '/platform' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16">
      <div className="max-w-[1240px] mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="nav-logo">
            <img 
              src="/Avagama.AI_Logo.jpg" 
              alt="Avagama AI" 
              className="h-[26px] block"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[0.82rem] font-normal transition-colors hover:text-text-main",
                  location.pathname === link.href ? "text-text-main" : "text-text-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:shivakumar.r@avaali.com?subject=Strategic Inquiry: Avagama AI Demo Request&body=Dear Shivakumar,%0D%0A%0D%0AI am interested in learning more about how Avagama AI can transform our enterprise discovery and automation processes. %0D%0A%0D%0AI would like to request a demo of the platform and discuss potential high-impact use cases for our organization.%0D%0A%0D%0ABest regards,"
              className="bg-brand-primary text-white px-5 py-2 rounded-[7px] text-[0.82rem] font-medium transition-all hover:opacity-88 hover:-translate-y-[1px]"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-muted hover:text-text-main p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface border-b border-subtle overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-sm font-medium transition-colors",
                    location.pathname === link.href ? "text-brand-primary" : "text-text-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:shivakumar.r@avaali.com?subject=Strategic Inquiry: Avagama AI Demo Request&body=Dear Shivakumar,%0D%0A%0D%0AI am interested in learning more about how Avagama AI can transform our enterprise discovery and automation processes. %0D%0A%0D%0AI would like to request a demo of the platform and discuss potential high-impact use cases for our organization.%0D%0A%0D%0ABest regards,"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-bold text-brand-primary py-2"
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
