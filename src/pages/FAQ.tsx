import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function FAQ() {
  const faqs = [
    {
      question: "What makes Avagama unique for enterprise discovery?",
      answer: "Unlike traditional assessment tools that rely on manual interviews, Avagama maps your actual process trails through your ERP and CRM systems. This data-driven approach surfaces bottlenecks and high-impact transformation opportunities that are often invisible to human observers."
    },
    {
      question: "How long is the typical implementation lifecycle?",
      answer: "We focus on rapid value. A standard assessment and functional PoC usually take 2–4 weeks. A full-scale enterprise deployment for a high-complexity process typically ranges between 8–12 weeks, depending on the scale and integration surface."
    },
    {
      question: "Do we need to replace our existing ERP or RPA systems?",
      answer: "No. Avagama acts as an intelligent orchestration layer that sits on top of your current infrastructure. It integrates natively with systems like SAP, Salesforce, and Microsoft Dynamics, while empowering existing RPA tools with cognitive agent capabilities."
    },
    {
      question: "Is the platform LLM-agnostic?",
      answer: "Yes. Avagama is architected to work with leading LLMs including Claude, Llama 3, and GPT-4. This flexibility allows you to upgrade to more capable models instantly without needing to rebuild your orchestration pipelines."
    },
    {
      question: "How is data security and governance handled?",
      answer: "Security is built into our foundational layer. We provide full audit trails for every agent action, PII scrubbing, role-based access controls, and strict data residency compliance. Our sandbox-first deployment model ensures every agent behavior is validated before touching production data."
    }
  ];

  return (
    <div className="overflow-hidden bg-bg-base min-h-screen">
      <section className="relative pt-20 pb-24 px-6 lg:px-20 overflow-hidden">
        <div className="hero-blob-1 opacity-40" />
        <div className="max-w-[800px] mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-mono text-[0.67rem] tracking-[0.12em] uppercase mb-6"
          >
            Insights & Support
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,5vw,3.6rem)] font-extrabold leading-[1.1] tracking-tight text-text-main mb-6"
          >
            Common Questions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[1.05rem] font-light text-text-muted leading-[1.7] max-w-[600px] mx-auto"
          >
            Everything you need to know about our platform, orchestration layers, and enterprise partnership model.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 px-6 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 rounded-[32px] bg-text-main text-white relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px]" />
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="font-display text-[1.5rem] font-bold mb-2">Have a technical inquiry?</h3>
                  <p className="text-text-dim font-light text-[0.95rem] max-w-sm">
                    Schedule a deep-dive session with our solutions architects to discuss your specific infrastructure.
                  </p>
                </div>
                <Link to="/contact?request=expert" className="bg-brand-primary text-white py-4 px-8 rounded-xl text-[0.88rem] font-bold shadow-[0_4px_20px_rgba(123,47,247,0.18)] hover:-translate-y-[2px] transition-all whitespace-nowrap">
                  Talk to an Expert
                </Link>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-subtle">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex justify-between items-center group transition-all"
      >
        <span className="font-display font-bold text-text-main text-[1.1rem] leading-tight pr-8 group-hover:text-brand-primary transition-colors">{question}</span>
        <div className={cn(
          "w-6 h-6 rounded-full border border-medium flex items-center justify-center shrink-0 transition-all text-text-dim",
          isOpen && "rotate-45 bg-brand-primary/10 text-brand-primary border-brand-primary/30"
        )}>
          <Plus size={14} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="pb-6 text-text-muted leading-[1.7] text-[0.95rem] font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

