import { motion } from 'motion/react';
import { Award, Target, Users2, Building2, ExternalLink } from 'lucide-react';

export function About() {
  return (
    <div className="overflow-hidden bg-bg-base">
      <section className="relative pt-20 pb-24 px-6 lg:px-20 overflow-hidden">
        <div className="hero-blob-2 opacity-50" />
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-mono text-[0.67rem] tracking-[0.12em] uppercase mb-6">
                Our Heritage
              </div>
              
              <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-text-main mb-8">
                Built by Practitioners. <br />
                <span className="text-brand-gradient">Driven by Vision.</span>
              </h1>
              
              <div className="space-y-6 text-[1.05rem] font-light text-text-muted leading-[1.75]">
                <p>
                  Avaali Solutions is a premier enterprise technology firm specializing in intelligent automation and digital transformation. With over a decade of experience delivering complex SAP and RPA ecosystems for global leaders, we identified a fundamental gap in the market.
                </p>
                <p>
                  <strong className="text-text-main font-bold">Avagama</strong> was born from that insight: the need for a unified discovery and orchestration engine that doesn't just automate, but strategically transforms how work happens within the enterprise.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <AboutStat value="150+" label="Transformations delivered" />
              <AboutStat value="10yrs+" label="Tech Expertise" />
              <AboutStat value="50+" label="Global Clients" />
              <AboutStat value="GBS" label="Shared services specialist" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-20 bg-bg-surface border-y border-subtle">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="font-display text-[2.2rem] font-bold text-text-main mb-6">The Avaali Advantage</h2>
             <p className="text-text-muted font-light leading-relaxed">
               We don't just provide software; we provide a consultancy-led partnership that ensures long-term strategic success through architectural integrity.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <AdvantageBlock 
              title="Execution Focused" 
              text="Our results speak through measurable cost reductions, cycle time improvements, and tangible ROI within months." 
            />
            <AdvantageBlock 
              title="Domain Expertise" 
              text="Deep understanding of complex finance, supply chain, and IT governance in multi-billion dollar enterprise environments." 
            />
            <AdvantageBlock 
              title="Governance First" 
              text="Architected for strict compliance, security, and auditability in highly regulated global industries." 
            />
          </div>
        </div>
      </section>
      
      {/* PARENT COMPANY LINK */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-[1240px] mx-auto bg-bg-surface border border-medium rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <div className="space-y-2">
            <h3 className="font-display text-[1.5rem] font-bold text-text-main">Part of the Avaali Ecosystem</h3>
            <p className="text-text-muted font-light">Explore our full suite of enterprise transformation services.</p>
          </div>
          <a href="https://avaali.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-brand-primary/30 text-brand-primary py-4 px-8 rounded-xl text-[0.88rem] font-bold hover:bg-brand-primary/5 transition-all">
            Visit Avaali.com <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

function AboutStat({ value, label }: any) {
  return (
    <div className="bg-bg-surface border border-subtle rounded-xl p-6 hover:-translate-y-1 transition-transform">
      <span className="font-display text-[1.9rem] font-extrabold text-brand-gradient block leading-[1] mb-1.5">{value}</span>
      <p className="text-[0.78rem] font-light text-text-muted leading-[1.4]">{label}</p>
    </div>
  );
}

function AdvantageBlock({ title, text }: any) {
  return (
    <div className="p-8 rounded-3xl border border-transparent hover:border-subtle hover:bg-bg-base/50 transition-all">
      <h4 className="font-display text-[1.25rem] font-bold text-text-main mb-4">{title}</h4>
      <p className="text-text-muted text-[0.92rem] leading-relaxed font-light">
        {text}
      </p>
    </div>
  );
}

