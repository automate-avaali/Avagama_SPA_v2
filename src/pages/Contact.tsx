import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Calendar as CalendarIcon, Clock, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval,
  isBefore,
  startOfDay,
  setHours,
  setMinutes
} from 'date-fns';

export function Contact() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [selectedSlots, setSelectedSlots] = useState<Date[]>([]);
  
  // Calendar State
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const isScheduleRequest = searchParams.get('request') === 'schedule';

  useEffect(() => {
    const requestType = searchParams.get('request');
    if (requestType === 'demo') {
      setMessage("I would like to request a demo of the Avagama AI platform. We are specifically interested in discovering high-impact automation use cases within our organization.");
    } else if (requestType === 'expert') {
      setMessage("I have some technical questions regarding Avagama AI's integration with our existing infrastructure and would like to talk to an expert solutions architect.");
    } else if (requestType === 'schedule') {
      const baseMessage = "I would like to schedule a demo with your team.";
      if (selectedSlots.length > 0) {
        const slotsText = selectedSlots
          .sort((a, b) => a.getTime() - b.getTime())
          .map((s, i) => `${i + 1}. ${format(s, 'PPP p')}`)
          .join('\n');
        setMessage(`${baseMessage}\n\nMy preferred time slots are:\n${slotsText}`);
      } else {
        setMessage(`${baseMessage}\n\nMy preferred time slots are:\n[Select 3 slots using the interactive picker above]`);
      }
    }
  }, [searchParams, selectedSlots]);

  const toggleSlot = (slot: Date) => {
    setSelectedSlots(prev => {
      const exists = prev.find(s => s.getTime() === slot.getTime());
      if (exists) {
        return prev.filter(s => s.getTime() !== slot.getTime());
      }
      if (prev.length >= 3) return prev;
      return [...prev, slot];
    });
  };

  const removeSlot = (slot: Date) => {
    setSelectedSlots(prev => prev.filter(s => s.getTime() !== slot.getTime()));
  };

  const availableHours = [9, 10, 11, 12, 14, 15, 16, 17]; // 9am to 5pm, skipping 1pm for lunch

  const timeSlots = useMemo(() => {
    return availableHours.map(hour => setMinutes(setHours(startOfDay(selectedDate), hour), 0));
  }, [selectedDate]);

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
    
    // Web3Forms Setup
    formData.append("access_key", "e60df560-6640-40ce-9e7b-6d352dda8f41");
    formData.append("subject", "New Sales Inquiry from Avagama AI Website");
    formData.append("from_name", "Avagama AI Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        console.log("Submission success:", data);
        setStatus('success');
      } else {
        console.error("Submission error details:", data);
        setStatus('error');
        setErrorMessage(data.message || "Submission failed. Please verify your access key and form configuration.");
      }
    } catch (err: any) {
      console.error("Web3Forms submission error:", err);
      setStatus('error');
      setErrorMessage("Something went wrong. Please check your connection and try again.");
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
          <h2 className="font-display text-3xl font-bold text-text-main mb-4">Thank You!</h2>
          <p className="text-text-muted font-light leading-relaxed mb-8">
            We've received your message. Our team will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-bg-base min-h-screen py-20 px-6 overflow-hidden relative">
      <div className="hero-blob-1 opacity-30" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className={`grid ${isScheduleRequest ? 'lg:grid-cols-[280px_1fr]' : 'lg:grid-cols-[1fr_2fr]'} gap-12 lg:gap-16 items-start`}>
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
                detail="080 49 60 2727" 
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
                    name="first_name" 
                    placeholder="John" 
                    required 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
                <FormGroup label="Last Name" required>
                  <input 
                    type="text" 
                    name="last_name" 
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
                    name="email" 
                    placeholder="john@company.com" 
                    required 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
                <FormGroup label="Phone">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormGroup label="Company" required>
                  <input 
                    type="text" 
                    name="company" 
                    placeholder="Acme Ltd" 
                    required 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
                <FormGroup label="Position">
                  <input 
                    type="text" 
                    name="position" 
                    placeholder="Marketing Director" 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all" 
                  />
                </FormGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormGroup label="Country">
                  <select 
                    name="country" 
                    className="w-full bg-bg-base border border-subtle rounded-xl px-4 py-3 text-[0.95rem] focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all appearance-none"
                  >
                    <option value="">Select your country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </FormGroup>
                <FormGroup label="Budget">
                  <select 
                    name="budget" 
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
                    <input type="checkbox" name="contact_preference[]" value="email" className="w-4 h-4 rounded border-subtle text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[0.88rem] text-text-muted group-hover:text-text-main transition-colors">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" name="contact_preference[]" value="whatsapp" className="w-4 h-4 rounded border-subtle text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[0.88rem] text-text-muted group-hover:text-text-main transition-colors">Phone / WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" name="contact_preference[]" value="videocall" className="w-4 h-4 rounded border-subtle text-brand-primary focus:ring-brand-primary" />
                    <span className="text-[0.88rem] text-text-muted group-hover:text-text-main transition-colors">Video call</span>
                  </label>
                </div>
              </FormGroup>

              {isScheduleRequest && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-subtle rounded-[32px] overflow-hidden shadow-2xl shadow-brand-primary/5 mb-12"
                >
                  <div className="flex flex-col lg:flex-row min-h-[620px]">
                    {/* Left: Meeting Info & Selection Summary */}
                    <div className="lg:w-[220px] p-8 bg-bg-base/30 border-r border-subtle flex flex-col shrink-0 text-left">
                      <div className="mb-10 text-left">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-lg shadow-brand-primary/20 mb-4">
                          <CalendarIcon size={20} />
                        </div>
                        <h3 className="font-display font-bold text-lg text-text-main tracking-tight leading-tight">30-Min Discovery Call</h3>
                        <p className="text-xs text-text-muted font-medium mt-1">Avagama Team</p>
                      </div>

                      <div className="space-y-4 mb-10 text-left">
                        <div className="flex items-center gap-2.5 text-text-muted">
                          <Clock size={14} className="text-brand-primary" />
                          <span className="text-xs">30 min</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-text-muted">
                          <MapPin size={14} className="text-brand-primary" />
                          <span className="text-xs">Web Link</span>
                        </div>
                      </div>

                      <div className="mt-auto text-left">
                        <div className="flex items-center justify-between mb-4 border-t border-subtle pt-6">
                          <label className="text-[0.65rem] font-bold text-brand-primary uppercase tracking-widest text-left">
                            Selected
                          </label>
                          {selectedSlots.length > 0 && (
                            <button 
                              type="button" 
                              onClick={() => setSelectedSlots([])}
                              className="text-[0.6rem] font-bold text-text-dim hover:text-red-500 transition-colors"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <AnimatePresence mode="popLayout">
                            {selectedSlots.length === 0 ? (
                              <div className="text-[0.7rem] text-text-dim/60 italic py-1">
                                No slots selected...
                              </div>
                            ) : (
                              selectedSlots.sort((a,b) => a.getTime() - b.getTime()).map(slot => (
                                <motion.div 
                                  key={`selected-${slot.toISOString()}`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  className="flex items-center justify-between p-2.5 bg-white border border-brand-primary/10 rounded-lg shadow-sm group"
                                >
                                  <div className="text-[0.65rem] font-bold text-text-main">
                                    {format(slot, 'MMM d, h p')}
                                  </div>
                                  <button 
                                    type="button"
                                    onClick={() => removeSlot(slot)}
                                    className="text-text-dim hover:text-red-500 p-0.5"
                                  >
                                    <X size={12} />
                                  </button>
                                </motion.div>
                              ))
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Professional Calendar Picker */}
                    <div className="flex-grow p-10 flex flex-col items-center justify-center">
                      <div className="w-full max-w-[620px]">
                        <div className="flex items-center justify-between mb-10 w-full px-4">
                          <div className="flex flex-col">
                            <h4 className="font-display font-extrabold text-[1.5rem] text-text-main">
                              {format(currentMonth, 'MMMM yyyy')}
                            </h4>
                            <p className="text-xs text-text-muted font-medium mt-1">Select your preferred date</p>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              type="button"
                              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                              className="w-11 h-11 flex items-center justify-center hover:bg-bg-base rounded-full transition-all border border-subtle active:scale-95"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button 
                              type="button"
                              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                              className="w-11 h-11 flex items-center justify-center hover:bg-bg-base rounded-full transition-all border border-subtle active:scale-95"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                            <div key={`header-${day}`} className="text-center text-[0.7rem] font-bold text-text-dim py-4 uppercase tracking-[0.2em]">{day}</div>
                          ))}
                          {(() => {
                            const monthStart = startOfMonth(currentMonth);
                            const monthEnd = endOfMonth(monthStart);
                            const startDate = startOfWeek(monthStart);
                            const endDate = endOfWeek(monthEnd);
                            const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });
                            
                            return calendarDays.map((day) => {
                              const isOutside = !isSameMonth(day, monthStart);
                              const isPast = isBefore(day, startOfDay(new Date()));
                              const isToday = isSameDay(day, new Date());
                              const isSelected = isSameDay(day, selectedDate);
                              const isDisabled = isPast || isOutside;

                              return (
                                <button
                                  key={`day-${day.toISOString()}`}
                                  type="button"
                                  disabled={isDisabled}
                                  onClick={() => setSelectedDate(day)}
                                  className={`
                                    relative h-16 flex items-center justify-center rounded-2xl text-[1rem] font-bold transition-all duration-200
                                    ${isSelected ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/40 z-10' : ''}
                                    ${isDisabled ? 'text-text-dim/20' : isSelected ? '' : 'text-text-main hover:bg-brand-primary/10 hover:text-brand-primary'}
                                    ${isToday && !isSelected ? 'text-brand-primary' : ''}
                                    ${isOutside ? 'opacity-0 pointer-events-none' : ''}
                                  `}
                                >
                                  {format(day, 'd')}
                                  {isToday && !isSelected && (
                                    <div className="absolute bottom-3 w-1 h-1 rounded-full bg-brand-primary" />
                                  )}
                                  {selectedSlots.some(s => isSameDay(s, day)) && !isSelected && (
                                    <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-brand-teal border-2 border-white shadow-sm" />
                                  )}
                                </button>
                              );
                            });
                          })()}
                        </div>
                      </div>
                    </div>

                    {/* Right: Time Slot Chooser */}
                    <div className="lg:w-[320px] p-10 border-l border-subtle bg-white shrink-0">
                      <div className="mb-8">
                        <p className="text-[0.7rem] font-black text-text-dim uppercase tracking-widest mb-1.5">{format(selectedDate, 'EEEE, MMM d')}</p>
                        <h4 className="font-display font-extrabold text-[1.15rem] text-text-main leading-tight mb-2">Select a Time</h4>
                        <div className="flex items-center gap-2 text-[0.7rem] font-bold text-brand-primary bg-brand-primary/5 py-1.5 px-3 rounded-lg border border-brand-primary/10 w-fit">
                          <Clock size={12} /> IST Timezone
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-3 max-h-[440px] overflow-y-auto pr-2 custom-scrollbar">
                        {timeSlots.map(slot => {
                          const isSelected = selectedSlots.some(s => s.getTime() === slot.getTime());
                          const isLimitReached = selectedSlots.length >= 3 && !isSelected;

                          return (
                            <button
                              key={`time-btn-${slot.toISOString()}`}
                              type="button"
                              disabled={isLimitReached}
                              onClick={() => toggleSlot(slot)}
                              className={`
                                group relative w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between
                                ${isSelected 
                                  ? 'bg-[#0069ff]/5 border-[#0069ff] text-[#0069ff] shadow-sm' 
                                  : 'bg-white border-subtle hover:border-[#0069ff] hover:bg-[#0069ff]/[0.02] text-text-main'}
                                ${isLimitReached ? 'opacity-30 cursor-not-allowed' : ''}
                              `}
                            >
                              <span className={`text-[0.95rem] font-bold ${isSelected ? 'text-[#0069ff]' : 'text-[#0069ff]'}`}>
                                {format(slot, 'h:mm a')}
                              </span>
                              {isSelected ? (
                                <div className="flex items-center gap-2">
                                  <div className="bg-[#0069ff] text-white p-1 rounded-full"><Check size={12} strokeWidth={4} /></div>
                                </div>
                              ) : (
                                <ChevronRight size={16} className="text-[#0069ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-8 p-5 bg-blue-50/50 border border-blue-100 rounded-2xl flex gap-3">
                        <CheckCircle2 size={16} className="text-[#0069ff] shrink-0 mt-0.5" />
                        <p className="text-[0.75rem] text-text-muted leading-relaxed">
                          Select up to 3 slots for redundancy.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <FormGroup label="Message" required>
                <textarea 
                  name="message" 
                  rows={6} 
                  required 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
