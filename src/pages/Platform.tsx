import { motion } from 'motion/react';
import { Layers, Search, Cpu, Shield, Database, Zap, Binary, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Platform() {
  const layers = [
    { num: '05', title: 'Experience Layer', desc: 'Intuitive command centers for unified human-AI collaboration and governance.', color: 'from-brand-teal to-brand-primary' },
    { num: '04', title: 'Agent Orchestration', desc: 'Autonomous cognitive units executing complex reasoning and multi-step tasks.', color: 'from-brand-pink to-brand-primary' },
    { num: '03', title: 'Process Ecosystem', desc: 'End-to-end fluid process orchestration layer across disparate enterprise systems.', color: 'from-brand-primary to-indigo-600' },
    { num: '02', title: 'Enterprise Connectors', desc: 'Secure, native integration with SAP, Salesforce, and mission-critical ERP clusters.', color: 'from-indigo-400 to-brand-primary' },
    { num: '01', title: 'Intelligence & Data', desc: 'Foundational layer hosting secure LLMs, private knowledge graphs, and real-time analytics.', color: 'from-brand-secondary to-brand-pink' },
  ];

  return (
    <div className="overflow-hidden bg-bg-base">
      {/* HERO / ARCHITECTURE HEADER */}
      <section className="relative pt-20 pb-24 px-6 lg:px-20 overflow-hidden">
        <div className="hero-blob-1 opacity-60" />
        <div className="hero-blob-2 opacity-50" />
        
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-mono text-[0.67rem] tracking-[0.12em] uppercase mb-6"
            >
              Enterprise Architecture
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight text-text-main mb-8"
            >
              A Unified Layer of <br />
              <span className="text-brand-gradient">Autonomous Intelligence</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[1.05rem] font-light text-text-muted leading-[1.7] max-w-[600px]"
            >
              Avagama integrates into your existing technology stack as a lightweight, high-performance orchestration layer. We don't replace your systems; we empower them with cognitive capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* STACK VISUALIZATION section */}
      <section className="pb-32 px-6 lg:px-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-3">
              {layers.map((layer, idx) => (
                <motion.div
                  key={layer.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center gap-6 p-6 rounded-2xl border border-subtle bg-bg-surface hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all cursor-default"
                >
                  <div className="font-mono text-[0.7rem] font-bold text-text-dim w-6">{layer.num}</div>
                  <div className={cn("w-1 h-12 rounded-full bg-linear-to-b", layer.color)} />
                  <div>
                    <h3 className="font-display font-bold text-text-main text-[1.1rem] mb-1">{layer.title}</h3>
                    <p className="text-[0.88rem] text-text-muted leading-relaxed font-light">{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-bg-surface border border-medium rounded-[32px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-brand-gradient" />
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-mono text-[0.62rem] tracking-[0.1em] uppercase mb-8">
                  The Engine
                </div>
                
                <h3 className="font-display text-[1.8rem] font-bold text-text-main mb-10 leading-tight">
                  From Process Discovery to <br />Governed Execution.
                </h3>
                
                <div className="space-y-12">
                  <CapabilityItem 
                    icon={<Search size={22} className="text-brand-primary" />}
                    title="Cognitive Mapping"
                    description="Automatically surface bottlenecks and high-value transformation opportunities hidden in legacy logs."
                  />
                  <CapabilityItem 
                    icon={<Binary size={22} className="text-brand-teal" />}
                    title="Decision Intelligence"
                    description="Agents that move beyond static rules, reasoning through exceptions and dynamic business conditions."
                  />
                  <CapabilityItem 
                    icon={<Shield size={22} className="text-brand-pink" />}
                    title="Governance Sandbox"
                    description="Simulate and validate agent behaviors in secure environments before touching production data."
                  />
                </div>
              </motion.div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-medium rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <Zap className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-main">4 Weeks</div>
                    <div className="text-[0.75rem] text-text-muted font-medium uppercase tracking-wider">Average PoC Timeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE DIFFERENTIATORS */}
      <section className="py-24 px-6 lg:px-20 bg-bg-surface border-y border-subtle">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-display text-[2.2rem] font-bold tracking-tight text-text-main mb-4">Foundationally Superior.</h2>
            <p className="text-text-muted font-light leading-relaxed">
              Designed for the rigors of global enterprise, Avagama provides the guardrails necessary for safe AI adoption.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <Differentiator 
              icon={<Settings size={28} />}
              title="LLM Agnostic" 
              desc="Deploy with Claude, Llama, or GPT-4. Switch models instantly as technology evolves without rewriting your stack."
            />
            <Differentiator 
              icon={<Shield size={28} />}
              title="Native Compliance" 
              desc="Complete audit trails, PII scrubbing, and role-based access integrated at the core architecture level."
            />
            <Differentiator 
              icon={<Database size={28} />}
              title="Hybrid Data Fabric" 
              desc="Connect to legacy on-prem systems and modern cloud ERPs simultaneously via proprietary zero-trust tunnels."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-20">
        <div className="max-w-[1240px] mx-auto text-center">
          <a href="mailto:shivakumar.r@avaali.com?subject=Strategic Inquiry: Avagama AI Platform Demo&body=Dear Shivakumar,%0D%0A%0D%0AI'm interested in a deep-dive walkthrough of the Avagama AI platform and its architecture. Please let us know when our teams can connect for a demo.%0D%0A%0D%0ABest regards," className="inline-flex items-center gap-3 bg-brand-primary text-white py-5 px-12 rounded-xl text-[1rem] font-bold shadow-[0_10px_30px_rgba(123,47,247,0.2)] hover:-translate-y-[2px] transition-all">
            Experience the Platform &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}

function CapabilityItem({ icon, title, description }: any) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 rounded-xl bg-bg-base border border-subtle flex items-center justify-center shrink-0 shadow-sm mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-display font-bold text-text-main text-[1.05rem] mb-1.5 leading-tight">{title}</h4>
        <p className="text-text-muted text-[0.88rem] leading-relaxed font-light">{description}</p>
      </div>
    </div>
  );
}

function Differentiator({ icon, title, desc }: any) {
  return (
    <div className="p-8 rounded-[24px] border border-subtle bg-bg-surface hover:border-brand-primary/20 transition-all group">
      <div className="text-brand-primary mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-[1.15rem] font-bold text-text-main mb-3.5 font-display tracking-tight">{title}</h4>
      <p className="text-text-muted leading-relaxed text-[0.88rem] font-light">
        {desc}
      </p>
    </div>
  );
}

