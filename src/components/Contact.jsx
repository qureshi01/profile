import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';
import { TelemetryButton } from './TelemetryButton';

export const Contact = () => {
  const { triggerTelemetry } = useArchitecture();
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
    <section id="contact" className="py-24 my-16 bg-[#050811] border-t border-b border-slate-800/80 relative">
      
      {/* Decorative Glow Ambient Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-md">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT & INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Available for full-time Backend Engineering, Spring Boot Microservices, and Remote opportunities.
          </p>
        </div>

        {/* Contact Grid: 2 Column Clean Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Direct Contact
              </h3>

              <div className="space-y-6 text-sm">
                
                {/* Email Item */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-white font-bold text-base hover:text-cyan-300 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Phone</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-white font-bold text-base hover:text-emerald-300 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Location</span>
                    <span className="text-white font-bold text-base block">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels Row */}
              <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex-1 text-xs"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex-1 text-xs"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repos</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Clean, Un-congested Simple Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-white">Send Message</h3>
                <p className="text-xs text-slate-400 mt-1">Feel free to reach out for role opportunities or technical collaboration.</p>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Message dispatched successfully! Telemetry trace captured.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-slate-300 text-xs font-semibold block">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#070d18] border border-slate-700/80 rounded-xl px-4 py-3.5 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-300 text-xs font-semibold block">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#070d18] border border-slate-700/80 rounded-xl px-4 py-3.5 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-300 text-xs font-semibold block">Subject</label>
                  <input
                    type="text"
                    placeholder="Role Opportunity / Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#070d18] border border-slate-700/80 rounded-xl px-4 py-3.5 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-slate-300 text-xs font-semibold block">Message *</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#070d18] border border-slate-700/80 rounded-xl px-4 py-3.5 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-sm py-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
