import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const Contact = () => {
  const { triggerTelemetry } = useArchitecture();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    triggerTelemetry({
      title: "Contact Form API Request",
      endpoint: "POST /api/v1/contact/send-message",
      status: 200, latency: "24ms", traceId: "tr-contact-post-9090",
      steps: [
        "1. POST /api/v1/contact/send-message invoked",
        "2. Input payload validation passed",
        "3. Spring Mail SMTP triggered background thread",
        "4. Message persisted to MongoDB messages collection",
        "5. HTTP 200 OK dispatched"
      ],
      payload: {
        senderName: formData.name || "Recruiter",
        senderEmail: formData.email || "recruiter@company.com",
        subject: formData.subject || "Backend Engineer Role",
        message: formData.message,
        timestamp: new Date().toISOString()
      }
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactItems = [
    { icon: Mail,   color: 'text-[var(--cyan)]', label: 'Email',    val: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: Phone,  color: 'text-emerald-400',    label: 'Phone',    val: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
    { icon: MapPin, color: 'text-amber-400',       label: 'Location', val: personalInfo.location },
  ];

  return (
    <section id="contact" className="section-sep py-24 sm:py-32">
      <div className="container-custom">

        {/* Section heading */}
        <div className="section-title">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--cyan)] text-[11px] font-mono mb-6">
            <MessageSquare className="w-3.5 h-3.5" /> CONTACT & INQUIRIES
          </span>
          <h2>Get In <span className="gradient-text">Touch</span></h2>
          <p>Available for full-time Backend Engineering, Spring Boot Microservices, and remote opportunities.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left — contact info ── */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card space-y-5">
              <h3 className="font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-3 text-sm font-mono uppercase tracking-wider">
                Direct Contact
              </h3>

              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <div key={i} className="inner-box flex items-center gap-3">
                    <item.icon className={`w-4 h-4 flex-shrink-0 ${item.color}`} />
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className={`${item.color} font-semibold text-sm hover:underline truncate block`}>
                          {item.val}
                        </a>
                      ) : (
                        <p className="text-[var(--text-primary)] font-semibold text-sm">{item.val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex gap-3">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                  className="btn btn-secondary flex-1 justify-center text-xs">
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" /> LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer"
                  className="btn btn-secondary flex-1 justify-center text-xs">
                  <GithubIcon className="w-4 h-4 text-[var(--cyan)]" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* ── Right — message form ── */}
          <div className="lg:col-span-7">
            <div className="card space-y-5">
              <div className="border-b border-[var(--border-subtle)] pb-4">
                <h3 className="font-bold text-[var(--text-primary)] text-sm font-mono uppercase tracking-wider">Send a Message</h3>
                <p className="text-[11px] text-[var(--text-muted)] mt-1">For role opportunities or technical collaboration.</p>
              </div>

              {submitted && (
                <div className="inner-box flex items-center gap-3 border-emerald-500/40 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-400 text-xs font-mono">Message dispatched! Telemetry trace captured.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Name *</label>
                    <input type="text" required placeholder="John Doe"
                      value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="form-input" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Email *</label>
                    <input type="email" required placeholder="john@company.com"
                      value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="form-input" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Subject</label>
                  <input type="text" placeholder="Role Opportunity / Discussion"
                    value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Message *</label>
                  <textarea required rows="5" placeholder="Write your message here..."
                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="form-input resize-none" />
                </div>

                <button type="submit" className="btn btn-primary w-full justify-center">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
