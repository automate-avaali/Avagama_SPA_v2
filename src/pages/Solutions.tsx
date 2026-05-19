import { motion } from 'motion/react';
import { Landmark, Truck, Users, Activity, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Solutions() {
  const cases = [
    {
      title: "Finance & GBS",
      icon: <Landmark className="text-brand-primary" />,
      metric: "70%",
      label: "Operational Savings",
      desc: "Architecting zero-touch reconciliation and intelligent ledger orchestration for global finance hubs.",
      examples: ["Invoice Verification Intelligence", "Automated Cash Reconciliation", "Tax Compliance Reporting", "Dynamic Budget Forecasting"]
    },
    {
      title: "Supply Chain",
      icon: <Truck className="text-brand-teal" />,
      metric: "2.4x",
      label: "Cycle Optimization",
      desc: "Synchronizing procurement and logistics through predictive discovery and autonomous agent response.",
      examples: ["Intelligent Order Management", "Predictive Replenishment", "Supplier Risk Assessment", "Autonomous Freight Consolidation"]
    },
    {
      title: "Human Resources",
      icon: <Users className="text-brand-pink" />,
      metric: "60%",
      label: "Efficiency Gain",
      desc: "Enhancing the employee lifecycle through cognitive query orchestration and governed agent support.",
      examples: ["Self-Service Orchestration", "Policy Interpretation Agents", "Lifecycle Event Automation", "Strategic Workforce Analysis"]
    },
    {
      title: "IT & Digital Ops",
      icon: <Activity className="text-indigo-500" />,
      metric: "80%",
      label: "Resolution Speed",
      desc: "Deploying self-healing infrastructure agents and autonomous incident triage layers.",
      examples: ["Autonomous Incident Response", "Change Management Workflows", "Cybersecurity Threat Triage", "Performance Anomaly Detection"]
    }
  ];

  return (
    <div className="overflow-hidden bg-bg-base">
      <section className="relative pt-20 pb-24 px-6 lg:px-20 overflow-hidden">
        <div className="hero-blob-1 opacity-40" />
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-mono text-[0.67rem] tracking-[0.12em] uppercase mb-6"
            >
              Industry Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight text-text-main mb-8"
            >
              Precision Automation <br />
              <span className="text-brand-gradient">for Complex Environments</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[1.05rem] font-light text-text-muted leading-[1.7] max-w-[600px]"
            >
              Avagama focuses on high-volume, high-complexity process areas where traditional RPA fails and human-driven efforts are most constrained.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-32 px-6 lg:px-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((useCase, idx) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[32px] bg-bg-surface border border-subtle shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-brand-primary/20 transition-all group relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-bg-base rounded-bl-[80px] -translate-y-4 translate-x-4 flex items-center justify-center group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500">
                  <div className="scale-125">{useCase.icon}</div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-display text-[1.6rem] font-bold text-text-main mb-4 tracking-tight">{useCase.title}</h3>
                  <p className="text-[0.88rem] text-text-muted leading-relaxed font-light mb-8 max-w-[85%]">
                    {useCase.desc}
                  </p>
                  
                  <div className="flex items-end gap-3 mb-10">
                    <div className="text-[3.2rem] font-extrabold text-brand-gradient leading-[1]">{useCase.metric}</div>
                    <div className="text-[0.67rem] font-bold text-text-dim uppercase tracking-widest mb-2">{useCase.label}</div>
                  </div>

                  <div className="h-px bg-subtle mb-8" />

                  <ul className="space-y-4 mb-10">
                    {useCase.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-3 text-text-muted text-[0.88rem] font-medium">
                        <Check size={16} className="text-brand-teal shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                  

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL IMPACT */}
      <section className="py-24 px-6 lg:px-20 bg-text-main text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 opacity-50" />
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-[2rem] font-bold tracking-tight mb-4">Empowering Excellence Across Every Function</h2>
            <p className="text-text-dim font-light max-w-xl mx-auto">Measurable results delivered through governed architectural precision.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatItem value="30–50%" label="Operational Savings" />
            <StatItem value="3.2x" label="Faster Cycles" />
            <StatItem value="99.9%" label="Accuracy Rate" />
            <StatItem value="Zero" label="Audit Failures" />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ value, label }: any) {
  return (
    <div className="text-center">
      <div className="text-[2.8rem] lg:text-[3.6rem] font-extrabold text-brand-gradient leading-[1.1] mb-2">{value}</div>
      <p className="text-text-dim text-[0.7rem] uppercase font-bold tracking-[0.2em]">{label}</p>
    </div>
  );
}

