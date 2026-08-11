import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Terminal, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';
import { TelemetryButton } from './TelemetryButton';

export const Contact = () => {
  const { triggerTelemetry, isDevToolsActive } = useArchitecture();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    triggerTelemetry({
      title: "Contact Form API Request Dispatch",
      endpoint: "POST /api/v1/contact/send-message",
      status: 200,
      latency: "24ms",
      traceId: "tr-contact-post-9090",
      steps: [
        "1. REST API endpoint POST /api/v1/contact/send-message invoked",
        "2. Input Payload validation: Name, Email, Message non-null assertions passed",
        "3. Spring Mail SMTP Service triggered background thread",
        "4. Message persisted to MongoDB messages collection",
        "5. HTTP 200 OK Response dispatched"
      ],
      payload: {
        senderName: formData.name || "Recruiter / Hiring Manager",
        senderEmail: formData.email || "recruiter@company.com",
        subject: formData.subject || "Backend Engineer Role Opportunity",
        messagePayload: formData.message || "Hi Hashim, we would love to discuss a Backend Engineering opportunity.",
        timestamp: new Date().toISOString()
      }
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 my-12 sm:my-16 bg-[#060911] border-t border-b border-slate-800/80 relative">
      
      {/* Decorative Glow Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title Header with Uncollapsed Margin Top/Bottom */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-md">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>REST API ENDPOINT RECEIVER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Available for full-time Backend Engineering, Spring Boot Microservices, and Remote opportunities.
          </p>
        </div>

        {/* Contact Grid: 2 Column Clean Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards with Separation Margin */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 space-y-6 my-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-4">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Direct Contact Information</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-mono">
                
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 my-2">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs text-slate-400">Email Endpoint</span>
                  </div>
                  <a href={`mailto:${personalInfo.email}`} className="text-white font-bold text-sm block hover:text-cyan-300 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 my-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs text-slate-400">Phone Hotline</span>
                  </div>
                  <a href={`tel:${personalInfo.phone}`} className="text-white font-bold text-sm block hover:text-emerald-300 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 my-2">
                  <div className="flex items-center gap-2 text-amber-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs text-slate-400">Location Base</span>
                  </div>
                  <span className="text-white font-bold text-sm block">
                    {personalInfo.location}
                  </span>
                </div>

              </div>

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex-1 text-xs py-3"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex-1 text-xs py-3"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repos</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: REST API Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 space-y-6 my-2">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Send Backend Payload</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">POST /api/v1/contact/send-message</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 font-bold">
                  200 OK
                </span>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Message dispatched successfully! Telemetry trace captured.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 text-xs font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 text-xs font-semibold">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold">Subject / Role Title</label>
                  <input
                    type="text"
                    placeholder="Backend Developer Position"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-xs font-semibold">Message Payload *</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-xs py-3.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch REST API Request</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
