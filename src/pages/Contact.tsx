import React from 'react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const countries = [
    "United States", "United Kingdom", "India", "Germany", "France", "Canada", "Australia", "Singapore", "UAE", "Others"
  ];

  const budgets = [
    "< $10k", "$10k - $50k", "$50k - $100k", "$100k - $250k", "$250k+"
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const apiKey = (import.meta as any).env.VITE_FORMINIT_API_KEY || 'sk_Y2Q2NTMwNmMtYzkzNS00M2Y2LTllYTctODkzNmFkM2I3Y2Qx';
    
    // Constructing manual blocks payload for direct fetch with headers
    const blocks: any[] = [
      {
        type: 'sender',
        properties: {
          firstName: formData.get('fi-sender-firstName'),
          lastName: formData.get('fi-sender-lastName'),
          email: formData.get('fi-sender-email'),
          phone: formData.get('fi-sender-phone'),
          company: formData.get('fi-sender-company'),
          position: formData.get('fi-sender-position')
        }
      },
      { type: 'country', name: 'location', value: formData.get('fi-country-location') },
      { type: 'select', name: 'budget', value: formData.get('fi-select-budget') },
      { type: 'checkbox', name: 'preference', value: formData.getAll('fi-checkbox-preference') },
      { type: 'text', name: 'message', value: formData.get('fi-text-message') }
    ];

    console.log("Submitting form with ID: nq0whwkluui", { blocks });
    
    // Create an AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      console.warn("Request timed out after 10 seconds");
      controller.abort();
    }, 10000);

    try {
      // Direct client-side submission with X-API-KEY as requested
      const response = await fetch('https://forminit.com/api/v1/s/nq0whwkluui', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-API-KEY': apiKey
        },
        body: JSON.stringify({ blocks }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      console.log("Response received. Status:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Submission success:", data);
        setStatus('success');
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Submission error details:", errorData);
        setStatus('error');
        setErrorMessage(errorData.message || errorData.error || `Error ${response.status}: The server rejected the request. Please verify your API Key and Form ID.`);
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        console.error("Submission timed out. This usually means the server is not responding or the request was blocked by CORS.");
        setStatus('error');
        setErrorMessage("Request timed out. Please check your network or try again later.");
      } else {
        console.error("Client fetch submission error:", err);
        setStatus('error');
        setErrorMessage("Network error. Please ensure your connection is stable and CORS is supported by the endpoint.");
      }
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center bg-bg-surface border border-subtle p-12 rounded-[32px] shadow-xl"
        >
          <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="font-display text-2xl font-bold text-text-main mb-4">Message Received</h2>
          <p className="text-text-muted font-light leading-relaxed mb-8">
            Thank you for reaching out. Our team has received your inquiry and will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-brand-primary font-bold hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-bg-base min-h-screen py-20 px-6 overflow-hidden relative">
      <div className="hero-blob-1 opacity-30" />
      
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <div className="hero-badge mb-6">Contact Us</div>
              <h1 className="font-display text-[2.8rem] font-extrabold text-text-main leading-[1.1] tracking-tight mb-6">
                Let's Build the <span className="text-brand-gradient">Autonomous Enterprise</span>
              </h1>
              <p className="text-[1.05rem] font-light text-text-muted leading-relaxed">
                Whether you're looking for a demo, have a technical question, or want to discuss a custom pilot—we're ready to talk.
              </p>
            </div>

            <div className="space-y-8">
              <ContactInfoItem 
                icon={<Mail size={20} />} 
                title="Email Us" 
                detail="hello@avagama.ai" 
                sub="General inquiries & support"
              />
              <ContactInfoItem 
                icon={<Phone size={20} />} 
                title="Call Us" 
                detail="+91 80 4370 1234" 
                sub="Mon-Fri, 9am - 6pm IST"
              />
              <ContactInfoItem 
                icon={<MapPin size={20} />} 
                title="Our Office" 
                detail="Bengaluru, India" 
                sub="Global Delivery HQ"
              />
            </div>
          </div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-bg-surface border border-subtle rounded-[32px] p-8 lg:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.04)]"
          >
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-text-main font-display mb-2">Sales Inquiry</h2>
              <p className="text-text-muted font-light text-[0.95rem]">Get in touch with our sales team. We'd love to hear from you.</p>
            </div>

            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <FormGroup label="First Name" required>
                  <input 
                    type="text" 
                    name="fi-sender-firstName" 
                    placeholder="John" 
                    required 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
                <FormGroup label="Last Name" required>
                  <input 
                    type="text" 
                    name="fi-sender-lastName" 
                    placeholder="Doe" 
                    required 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormGroup label="Email" required>
                  <input 
                    type="email" 
                    name="fi-sender-email" 
                    placeholder="john@company.com" 
                    required 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
                <FormGroup label="Phone">
                  <input 
                    type="tel" 
                    name="fi-sender-phone" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormGroup label="Company" required>
                  <input 
                    type="text" 
                    name="fi-sender-company" 
                    placeholder="Acme Ltd" 
                    required 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
                <FormGroup label="Position">
                  <input 
                    type="text" 
                    name="fi-sender-position" 
                    placeholder="Marketing Director" 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormGroup label="Country">
                  <select 
                    name="fi-country-location" 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all appearance-none"
                  >
                    <option value="">Select your country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </FormGroup>
                <FormGroup label="Budget">
                  <select 
                    name="fi-select-budget" 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all appearance-none"
                  >
                    <option value="">Select your budget range</option>
                    {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </FormGroup>
              </div>

              <FormGroup label="Contact Preference">
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" name="fi-checkbox-preference" value="email" className="w-4 h-4 rounded border-subtle text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[0.88rem] text-text-muted group-hover:text-text-main transition-colors">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" name="fi-checkbox-preference" value="whatsapp" className="w-4 h-4 rounded border-subtle text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[0.88rem] text-text-muted group-hover:text-text-main transition-colors">Phone / WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" name="fi-checkbox-preference" value="videocall" className="w-4 h-4 rounded border-subtle text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[0.88rem] text-text-muted group-hover:text-text-main transition-colors">Video call</span>
                  </label>
                </div>
              </FormGroup>

              <FormGroup label="Message" required>
                <textarea 
                  name="fi-text-message" 
                  rows={4} 
                  required 
                  placeholder="Tell us about your project, goals, and how we can help..." 
                  className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all resize-none"
                />
              </FormGroup>

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-[1.05rem] shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FormGroup({ label, children, required }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[0.82rem] font-bold text-text-main uppercase tracking-wider">
        {label} {required && <span className="text-brand-primary">*</span>}
      </label>
      {children}
    </div>
  );
}

function ContactInfoItem({ icon, title, detail, sub }: any) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-subtle flex items-center justify-center text-brand-primary shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-display font-bold text-text-main text-[1.05rem] mb-0.5">{title}</h4>
        <div className="text-text-main font-medium">{detail}</div>
        <div className="text-[0.8rem] text-text-dim font-light">{sub}</div>
      </div>
    </div>
  );
}
