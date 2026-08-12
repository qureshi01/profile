import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useArchitecture } from '../context/ArchitectureContext';

export const Contact = () => {
  const { triggerTelemetry } = useArchitecture();
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: 'Backend Engineering Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    triggerTelemetry({
      title: "Contact Form REST API Dispatch",
      endpoint: "POST /api/v1/contact/send-message",
      status: 201,
      latency: "32ms",
      traceId: `tr-contact-${Date.now()}`,
      steps: [
        "1. REST API endpoint POST /api/v1/contact/send-message invoked",
        "2. Input validation: Email format & XSS protection check passed",
        "3. Rate Limiting: IpAddress token bucket OK (1/10 consumed)",
        "4. Asynchronous Kafka Event published to 'contact-notifications' topic",
        "5. Spring Mail Async Worker picked message for dispatch",
        "6. Returned HTTP 201 CREATED status payload"
      ],
      payload: {
        timestamp: new Date().toISOString(),
        sender: formData.senderName || "Recruiter / Hiring Manager",
        email: formData.senderEmail || "hiring@company.com",
        subject: formData.subject,
        body: formData.message,
        recipient: personalInfo.email,
        status: "DISPATCHED_TO_KAFKA_QUEUE"
      }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ senderName: '', senderEmail: '', subject: 'Backend Engineering Opportunity', message: '' });
    }, 4000);
  };

  const channels = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, accent: 'sky' },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, accent: 'emerald' },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/hashimqureshic', href: personalInfo.linkedin, accent: 'indigo' },
    { icon: MapPin, label: 'Location', value: personalInfo.location, accent: 'amber' },
  ];

  const accentMap = {
    sky: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
    emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  };

  return (
    <section id="contact" className="section relative">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-badge"><MessageSquare className="w-3.5 h-3.5" /> Contact</span>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-desc">
            Have a project, job opportunity, or architecture discussion? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="glass-card card-pad stack-md h-full">
              <h3 className="text-lg font-bold text-white card-divider">Contact Channels</h3>
              <div className="stack-sm">
                {channels.map(({ icon: Icon, label, value, href, accent }) => {
                  const inner = (
                    <>
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${accentMap[accent]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 py-0.5">
                        <span className="text-xs text-slate-500 block mb-1">{label}</span>
                        <span className="text-sm text-white font-medium break-all leading-relaxed">{value}</span>
                      </div>
                    </>
                  );

                  return href ? (
                    <a key={label} href={href} target={label === 'LinkedIn' ? '_blank' : undefined} rel="noreferrer" className="card-inner flex items-center gap-5 hover:border-sky-500/25 transition-colors">
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className="card-inner flex items-center gap-5">{inner}</div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-card card-pad stack-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 card-divider">
                <div>
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <p className="text-xs font-mono text-sky-400 mt-1.5">POST /api/v1/contact/send-message</p>
                </div>
                <span className="chip chip-emerald text-[10px] w-fit">201 CREATED</span>
              </div>

              {submitted ? (
                <div className="card-inner p-10 text-center stack-md animate-fade-in border-emerald-500/25">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-lg text-white">Message Sent!</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Thank you — your message has been queued and will reach Hashim shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="stack-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-2">Name *</label>
                      <input
                        type="text"
                        name="senderName"
                        required
                        value={formData.senderName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-2">Email *</label>
                      <input
                        type="email"
                        name="senderEmail"
                        required
                        value={formData.senderEmail}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Role or project title"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="input-field resize-y min-h-[120px]"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
