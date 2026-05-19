import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useState } from 'react';

export function Home() {
  return (
    <div className="overflow-hidden bg-bg-base">
      {/* HERO */}
      <section className="relative pt-20 pb-20 px-6 lg:px-20 overflow-hidden">
        <div className="absolute top-[-200px] right-[-150px] w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,rgba(123,47,247,0.07)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,201,167,0.06)_0%,transparent_65%)] pointer-events-none" />
        
        <div className="max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-badge mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
              Purpose-Built Discovery Platform
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-[clamp(2.4rem,4.5vw,3.6rem)] font-extrabold leading-[1.14] tracking-tight text-text-main mb-6"
            >
              Discover. Orchestrate.<br />
              <span className="text-brand-gradient">Automate at Scale.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[1rem] font-light text-text-muted leading-[1.75] max-w-[460px] mb-9"
            >
              Avagama is a purpose-built discovery platform that maps your enterprise processes, identifies automation opportunities, and deploys governed AI agents — all from a single intelligent layer.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
            <Link 
              to="/contact?request=schedule" 
              className="inline-flex items-center gap-2 bg-brand-primary text-white py-3.5 px-7 rounded-lg text-[0.88rem] font-medium shadow-[0_4px_20px_rgba(123,47,247,0.18)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(123,47,247,0.28)] transition-all"
            >
                Schedule a Demo &rarr;
              </Link>
              <Link to="/platform" className="inline-flex items-center gap-2 border border-brand-primary/30 text-brand-primary py-3.5 px-7 rounded-lg text-[0.88rem] font-medium hover:bg-brand-primary/[0.05] hover:border-brand-primary/50 transition-all">
                See the Platform
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="bg-bg-surface border border-medium rounded-[18px] p-7 shadow-[0_8px_48px_rgba(0,0,0,0.07)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-grad" />
              <div className="flex justify-between items-center mb-4.5">
                <span className="font-mono text-[0.65rem] text-text-dim tracking-widest uppercase">Discovery in Progress</span>
                <span className="flex items-center gap-1 font-mono text-[0.62rem] text-[#009e84]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" /> Scanning
                </span>
              </div>
              
              <div className="space-y-2 mb-4.5">
                <HeroStep num="01" label="Process Mapping & Capture" status="✓ Done" type="teal" done />
                <HeroStep num="02" label="Bottleneck Identification" status="✓ Done" type="teal" done />
                <HeroStep num="03" label="Automation Opportunity Scoring" status="Running…" type="primary" active />
                <HeroStep num="04" label="Agent Blueprint Generation" status="Queued" type="muted" />
                <HeroStep num="05" label="Governed Deployment Readiness" status="Queued" type="muted" />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-bg-base border border-subtle rounded-lg p-3 text-center">
                  <span className="font-display text-[1.25rem] font-bold block leading-[1] mb-1 text-brand-gradient">2–4</span>
                  <span className="font-mono text-[0.58rem] text-text-dim tracking-wider uppercase">Weeks to PoC</span>
                </div>
                <div className="bg-bg-base border border-subtle rounded-lg p-3 text-center">
                  <span className="font-display text-[1.25rem] font-bold block leading-[1] mb-1 text-brand-gradient">60%</span>
                  <span className="font-mono text-[0.58rem] text-text-dim tracking-wider uppercase">Faster Discovery</span>
                </div>
                <div className="bg-bg-base border border-subtle rounded-lg p-3 text-center">
                  <span className="font-display text-[1.25rem] font-bold block leading-[1] mb-1 text-brand-gradient">99%+</span>
                  <span className="font-mono text-[0.58rem] text-text-dim tracking-wider uppercase">Governance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LOGOS */}
      <div className="bg-bg-surface border-y border-subtle py-7 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <span className="font-mono text-[0.62rem] text-text-dim tracking-[0.12em] uppercase whitespace-nowrap">Integrates with</span>
          <div className="flex flex-wrap justify-center gap-3">
            {['SAP BTP', 'Salesforce', 'Anthropic Claude', 'Meta Llama', 'Microsoft', 'UiPath', 'LangGraph'].map(l => (
              <span key={l} className="font-display text-[0.73rem] font-semibold text-text-dim px-3.5 py-1.5 border border-medium rounded-md hover:text-text-muted hover:border-black/20 transition-all">{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-bg-base py-24 px-6 lg:px-20 text-center" id="contact">
        <div className="max-w-[900px] mx-auto bg-bg-surface border border-subtle rounded-[24px] py-20 px-6 lg:px-16 relative overflow-hidden shadow-[0_4px_60px_rgba(0,0,0,0.05)]">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-grad" />
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(123,47,247,0.05)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-tight text-text-main mb-3.5 relative z-10 leading-tight">Ready to see what's automatable in your enterprise?</h2>
          <p className="text-[0.95rem] font-light text-text-muted max-w-[480px] mx-auto leading-[1.7] mb-9 relative z-10">Book a 30-minute discovery call. We'll walk through your environment, identify where Avagama can deliver the fastest impact, and outline what a pilot could look like — no commitment required.</p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10 mb-4">
            <Link to="/contact?request=schedule" className="bg-brand-primary text-white py-3.5 px-7 rounded-lg text-[0.88rem] font-medium shadow-[0_4px_20px_rgba(123,47,247,0.18)] hover:-translate-y-0.5 transition-all">Schedule a Demo &rarr;</Link>
            <Link to="/contact" className="bg-bg-surface border border-medium text-text-main py-3.5 px-7 rounded-lg text-[0.88rem] font-normal hover:bg-bg-surface-2 transition-all">Contact Us Form</Link>
          </div>
          <p className="text-[0.75rem] font-light text-text-dim relative z-10">No sales pressure. Just a straight conversation about what's possible.</p>
        </div>
      </section>
    </div>
  );
}

function HeroStep({ num, label, status, type, active, done }: any) {
  return (
    <div className={cn(
      "flex items-center gap-3 p-2.5 rounded-lg border text-[0.78rem] transition-all",
      done ? "border-[#00C9A7]/30 bg-[#00C9A7]/[0.04] text-text-muted" :
      active ? "border-[#7B2FF7]/30 bg-[#7B2FF7]/[0.04] text-text-main" :
      "border-subtle bg-bg-base text-text-muted"
    )}>
      <div className={cn(
        "w-5.5 h-5.5 rounded-md flex items-center justify-center font-mono text-[0.6rem] shrink-0",
        type === 'teal' ? "bg-[#00C9A7]/10 text-[#009e84]" :
        type === 'primary' ? "bg-[#7B2FF7]/10 text-brand-primary" :
        "bg-bg-surface-2 text-text-dim"
      )}>
        {num}
      </div>
      <span className="font-normal truncate">{label}</span>
      <span className={cn(
        "ml-auto font-mono text-[0.6rem]",
        done ? "text-brand-teal" :
        active ? "text-brand-primary" :
        "text-text-dim"
      )}>
        {status}
      </span>
    </div>
  );
}
